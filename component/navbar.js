function navbar() {
    return `<div class="container">
    <ul>
        <li><a href="menu.html">Menu</a></li>
    </ul>
    <ul>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="signup.html">SignUp</a></li>
    </ul>
</div>`

}

function logUser() {

    let loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser !== null && loggedUser !== "") {

        let user_option = document.querySelector("#navbar > div > ul:nth-of-type(2)");

        user_option.innerHTML = "";

        let name = document.createElement("li");

        name.textContent = loggedUser;

        let logout = document.createElement("li");

        logout.textContent = "Logout";
        logout.onclick = () => {
            userLogout();
        }

        let li3 = document.createElement("li");
        let a3 = document.createElement("a");
        a3.href = "cart.html";
        a3.textContent = "Cart";
        li3.append(a3);

        user_option.append(li3, name, logout);

    }
}

function userLogout() {
    localStorage.setItem("loggedUser", "");
    let li1 = document.createElement("li");
    let a1 = document.createElement("a");
    a1.href = "login.html";
    a1.textContent = "Login";
    li1.append(a1);

    let li2 = document.createElement("li");
    let a2 = document.createElement("a");
    a2.href = "signup.html";
    a2.textContent = "Signup";
    li2.append(a2);

    let li3 = document.createElement("li");
    let a3 = document.createElement("a");
    a3.href = "cart.html";
    a3.textContent = "Cart";
    li3.append(a3);

    let user_option = document.querySelector("#navbar > div > ul:nth-of-type(2)");

    user_option.innerHTML = "";
    user_option.append(li3, li1, li2);
}

export { navbar, logUser, userLogout };