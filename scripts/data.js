const API = {
    getEmployeeData() {
        return fetch("http://localhost:3000/employees?_expand=department&_expand=computer")
         // Fetch from the API
            .then(response => response.json())        // Parse as JSON

    }
}


    export default API