import { useState } from "react"
import CommonFormComponent from "../common-form/CommonFormIndex"
import { registerFormElement } from "../config/configIndex"

export default function RegisterComponent() {

    const initialState = {
        name: '',
        email: '',
        password: ''
    }

    const [registerFormData, setRegisterFormData] = useState(initialState);

    function onHandleRegister(e) {
        e.preventDefault();
        setRegisterFormData(initialState);
        console.log('registerFormData', registerFormData)
    }
    return (
        <>
            <h1>Getting started</h1>
            <CommonFormComponent
                formData={registerFormData}
                setFormData={setRegisterFormData}
                formControls={registerFormElement}
                onHandleSubmit={onHandleRegister}
                buttonText={'Register'}
            />
        </>
    )
}