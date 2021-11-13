
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