// JavaScript source code
let alt = document.querySelector("img");
alt.onclick = function () {
    let alt1 = alt.getAttribute("src");
    if (alt1 === "imges/578fd700baa1cd115d7c9f21b312c8fcc2ce2db8.jpg")
        alt.setAttribute("src", "imges/16524c90f603738dd868ee23b91bb051f819ec61.jpg");
    else {
        alt.setAttribute("src","imges/578fd700baa1cd115d7c9f21b312c8fcc2ce2db8.jpg")
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    let myName = prompt("请输入名字");
    localStorage.setItem("name", myName);
    myHeading.textContent = "hello你好" + myName;
}

if (!localStorage.getItem("name")) {
    setUsername();
}
else {
    let myStorage = localStorage.getItem("name");
    myHeading.textContent = "hello你好" + myStorage;
}

myButton.onclick = function () {
    setUsername();
}