
export const endpoint = "http://todo-app-backend.centralindia.cloudapp.azure.com"

export const getTaskGroups = (user) => {
    return RestCall(`${endpoint}/api/v1/TaskGroup`, {
        method: 'GET',
        headers: {user}
    })
}


const RestCall = (url, params) => {
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