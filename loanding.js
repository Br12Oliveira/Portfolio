var porcent = document.querySelector(".porcent");
var count = 1;
var load = setInterval(animate, 375);

function animate() {
    if (count == 57) {
        clearInterval(load);

    }
    else {
        count = count + 1;
        porcent.textContent = count + '%'
    }
}

