function Login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function likeMessage(element) {
    alert("This page says Ninja was liked");
}

function removeButton(element) {
    element.remove();
}