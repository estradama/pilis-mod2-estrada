const onClick = (e) => {
    e.preventDefault()

    const registro = {
        comercio: document.getElementById("comercio").value,
        titular: document.getElementById("titular").value,
        celular: document.getElementById("celular").value
    }
   
    const {comercio, titular, celular} = registro

    if (comercio && titular && celular) {

        fetch("https://my-json-server.typicode.com/Reyvenus/JsonApiTest/comercios", {
            method: "POST",
            body: JSON.stringify(registro),
            headers: { "Content-type": "application/json" }
        })

            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                Swal.fire(
                    'Contacto enviado',
                    'Gracias por participar',
                    'success'
                );

                document.getElementById("formulario").reset()
            })
    }
    else {
        return alert("Todos los campos son obligatorios")
    }
}


document.getElementById("enviar").addEventListener("click", onClick)