const form = document.querySelector("#form-login") as HTMLFormElement;

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const users = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    const userFound = users.find((user: any) =>
        user.email === email &&
        user.password === password
    );

    if(userFound){

        localStorage.setItem(
            "userData",
            JSON.stringify(userFound)
        );

        alert("Login correcto");

    }else{

        alert("Email o contraseña incorrectos");

    }

});