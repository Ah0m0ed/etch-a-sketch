let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", function (e) {
    switch (e.target.id) {
        case "start":
            start();
            break;
        case "reset":
            reset();
            break;
        case "shading":
            shading();
            break;
        case "rainbow":
            rainbow();
    }
});

function start() {
    console.log("Start");
}
function reset() {
    console.log("Reset");
}
function shading() {
    console.log("Shading");
}
function rainbow() {
    console.log("Rainbow");
}