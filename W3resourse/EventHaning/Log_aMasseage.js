const div = document.createElement("div");
div.innerText = "This is my div";
document.body.appendChild(div);
const btn = document.createElement("button");
btn.innerText = "Click me!";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    console.log("Hello Button ");
})
