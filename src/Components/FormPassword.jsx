const FormPassword = (props) => {
    return (
        <>
        <p>Nombre</p>
        <input type="text" />
        <p>Contraseña</p>
        <input type="text" onChange={(e) => props.setPassword(e.target.value)} />
        </>
    )
}

export default FormPassword;