function InputField({
    type,
    className,
    name,
    value,
    placeholder,
    onChange
}) {
    return (
        <>
            <input
                type={type}
                className={className}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default InputField;