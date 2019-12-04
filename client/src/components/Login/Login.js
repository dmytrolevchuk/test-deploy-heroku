import React, {Component} from "react";
import axios from 'axios';

class Login extends Component {

    componentDidMount() {

        axios.post('/users/test', {
            email: "sfsfd",
            password: "232424"
        })
            .then(res => res.data)
            .then(data => {

                   console.log("data", data)
                }
            )
            .catch(err => console.log(err))

    }

    render() {
        return <h1>Login works!</h1>;
    }
}

export default Login;
