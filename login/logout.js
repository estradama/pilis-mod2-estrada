const login = ("../index.html")

const salir = (e) => {
    e.preventDefault()
    return location.replace(login)
}


let logOut = document.getElementById("logout")
logOut.addEventListener("click", salir)