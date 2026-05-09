const form = document.querySelector("#form-login");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find((user) => user.email === email &&
        user.password === password);
    if (userFound) {
        localStorage.setItem("userData", JSON.stringify(userFound));
        alert("Login correcto");
    }
    else {
        alert("Email o contraseña incorrectos");
    }
});
export {};
//# sourceMappingURL=login.js.map