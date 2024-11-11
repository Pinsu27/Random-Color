let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let p1 = document.querySelector("#rgb-code");
    let randomColor = getRgbColor();
    p1.innerText = randomColor;
    p1.classList.remove('show');  // Remove show class to reset animation
    setTimeout(() => {
        p1.classList.add('show');  // Add show class to trigger pop-up effect
    }, 100);

    let body = document.querySelector("body");
    body.style.backgroundColor = randomColor;
    // console.log("Color Updated");
});


function getRgbColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`
    return color;
}


