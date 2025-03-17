import CommonInputComponent from "../common-inputs/CommonInputs";

export default function CommonFormComponent({ formControls = [], formData, setFormData, buttonText, onHandleSubmit }) {
    function renderForm(currentElement, idx) {
        let content = null;
        const { label, name, placeholder, type, id, onChange, value } = currentElement;
        switch (currentElement.componentType) {
            case 'input':
                content = (
                    <CommonInputComponent
                        key={idx}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                        id={id}
                        type={type}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                        )}
                        value={formData[name]}
                    />
                );
                break;

            case 'select':
                break;


            default:
                content = (
                    <CommonInputComponent
                        key={idx}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                        id={id}
                        type={type}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                        )}
                        value={formData[name]}
                    />
                );
                break;
        }
        return content;
    }

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                {
                    formControls && formControls.length ? formControls.map((item, idx) =>
                        renderForm(item, idx)) : null
                }
                <button className="button" type="submit">{buttonText || "Submit"}</button>
            </form>
        </>
    );
}