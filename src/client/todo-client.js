
export const endpoint = "http://todo-app-backend.centralindia.cloudapp.azure.com"

export const getTaskGroups = (user) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup`, {
        method: 'GET',
        headers: {user}
    })
}

export const createTaskGroups = (user, newTaskGroupName) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup`, {
        method: 'POST',
        headers: {user, 'Content-Type': 'application/json'},
        body: JSON.stringify({name: newTaskGroupName})
    })
}

export const getTaskInTaskGroups = (user, taskGroupId) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup/${taskGroupId}/tasks`, {
        method: 'GET',
        headers: {user}
    })
}

export const createNewTaskInTaskGroups = (user, taskGroupId, taskName) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup/${taskGroupId}/task`, {
        method: 'POST',
        headers: {user, 'Content-Type': 'application/json'},
        body: JSON.stringify({name: taskName})
    })
}

export const markTaskAsCompleted = (user, taskGroupId, taskId) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup/${taskGroupId}/task/${taskId}/complete`, {
        method: 'PUT',
        headers: {user, 'Content-Type': 'application/json'}
    })
}

export const removeTask = (user, taskGroupId, taskId) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup/${taskGroupId}/task/${taskId}`, {
        method: 'DELETE',
        headers: {user, 'Content-Type': 'application/json'}
    })
}

const RestCall = (url, params) => {
    console.log(url, params);
    return fetch(url, params).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
        console.log(response);
        throw new Error({status: response.status, error: response.error});
      }
    });
};