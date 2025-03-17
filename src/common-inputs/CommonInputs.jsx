export default function CommonInputComponent({ label, name, id, type, placeholder, value, onChange }) {
    return (
        <>
            <div>

                <label style={{ padding: "20px" }} htmlFor={name}>{label}</label>
                <input
                    name={name}
                    type={type || 'text'}
                    id={id}
                    placeholder={placeholder || "Enter value here"}
                    value={value}
                    onChange={onChange}
                ></input>
            </div>
        </>
    );
}