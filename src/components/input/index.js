import "./styles.scss"

export const Input = ({ id, placeholder, label, ...restInput }) => {
    return (
        <div className="input">
            <label htmlFor={id} className="input__label">
                {label}
            </label>
            <input id={id} placeholder={placeholder} className="input__field" {...restInput} />
        </div>
    )
}