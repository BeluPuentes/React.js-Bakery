

export const validar =(values)=>{
    if (values.nombre.length<1){
        alert("No completo el campo de nombre")
        return false
    }
    if (values.email.length<1){
        alert("No completo el campo de mail")
        return false
    }
    if (values.tel.length<11){
        alert("El campo telefono es incorrecto")
        return  false
    }
    return true
}