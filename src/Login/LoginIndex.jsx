import { useState } from "react";
import CommonFormComponent from "../common-form/CommonFormIndex";
import { loginFormElement } from "../config/configIndex";

export default function LoginComponent() {
    const initialState = {
        email: '',
        password: ''
    }
    const [loginFormData, setLoginFormData] = useState(initialState);

    function onHandleSubmit(event) {
        event.preventDefault();
        setLoginFormData(initialState);
    }
    return (
        <>
            <h1>Log in</h1> <br></br>
            <CommonFormComponent
                formData={loginFormData}
                setFormData={setLoginFormData}
                formControls={loginFormElement}
                onHandleSubmit={onHandleSubmit}
            />
        </>
    );
}