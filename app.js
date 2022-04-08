let ballonsMap = ['green', 'red', 'blue', 'pink', 'grey', 'purple', 'black', 'yellow', 'brown', 'blue', 'purple', 'pink', 'grey', 'green', 'red', 'black', 'brown', 'pink', 'purple', 'blue'];

const popBalloon = (position) => {
    
    ballonsMap[position] = null;
    render();
}
const render = () => {
    const ballons = ballonsMap.map((color, position) => {
        let visibility = "active"
        if (color == null) {
            visibility = "popped"
        }
        return `<div class="balloon ${visibility}" style="background:${color}" onClick="popBalloon(${position})"></div>`; // <--- render each balloon

    });
    document.querySelector("#balloon-count").innerHTML = ballonsMap.filter(b => b !== null).length; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if (document.querySelector("#balloon-count").innerHTML == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

window.onload = render();