window.onload = animate();

function newPosition () {
    var height = window.innerHeight;
    var width = window.innerWidth;

    return [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];
}

function animate () {
    var newq = newPosition();

    document.getElementById('main').animate([
        { transform: `translateX(${newq[0]}px)` },
        { transform: `translateY(${newq[1]}px)` },
    ],{
        duration: 1000,
        iterations: Infinity,

      }
    )
}
