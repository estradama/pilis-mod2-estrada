
const entrar = "../main/index.html"

const onClick = (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value

    if (email && pass) {
        fetch("https://my-json-server.typicode.com/reyvenus/JsonApiTest/users")
            .then(resp => resp.json())
            .then(resp => {
                const validacion = resp.filter(e => e.email === email && e.password === pass)
                if (validacion.length > 0) {
                    return location.replace(entrar)
                }
                else {
                    return Swal.fire({
                        title: 'Atencion!',
                        text: 'Usuario o contraseña invalidas',
                        icon: 'question',
                        confirmButtonText: 'volver a intentar'
                    })
                }
            })
            document.getElementById("formLogin").reset()
    }
    else{
        return Swal.fire({
            title: 'Incompleto',
            text: 'Por favor completar correctamente',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
}

let botonEntrar = document.getElementById("entrar");
botonEntrar.addEventListener("click", onClick);

////////////////////////////////////////////////////////

