import { useState } from "react";

export default function FormComponent() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    });

    // function handleInputChange(e) {
    //     const { value } = e.target;
    //     setFormValue(value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('value', formValue)
    }

    function handleOnChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value //[name] here name is dynamic property which will change depending on the form element updated
        })

    }
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formValue.name}
                    onChange={handleOnChange}
                /><br></br>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formValue.email}
                    onChange={handleOnChange}
                /><br></br>
                <button className="button" type="submit">Submit</button>
            </form>
        </>
    )
}