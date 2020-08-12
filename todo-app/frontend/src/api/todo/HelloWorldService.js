import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        // console.log('executed service')
        // returns a promise back
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        // console.log('executed service')
        // returns a promise back
        return Axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        // console.log('executed service')
        // returns a promise back
        let username = 'in28minutes'
        let password = 'dummy'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            {
                headers: {
                    authorization: basicAuthHeader
                }
            });
    }
}

export default new HelloWorldService()