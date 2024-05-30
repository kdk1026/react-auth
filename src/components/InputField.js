function InputField({
    type,
    className,
    name,
    value,
    placeholder,
    onChange,
    inputRef
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
                ref={inputRef}
            />
        </>
    )
}

export default InputField;