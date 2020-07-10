import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        console.log('executed service')
        // returns a promise back
        return Axios.get('http://localhost:8080/hello-world')
    }
}

export default new HelloWorldService()