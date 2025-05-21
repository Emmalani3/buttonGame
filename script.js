/*const attribueArr = [
    {attribute: "xAxis", rangeMin: 5, rangeMax: 95 },
    {attribute: "yAxis", rangeMin: 5, rangeMax: 95 },
    {attribute: "red", rangeMin: 0, rangeMax: 255 },
    {attribute: "green", rangeMin: 0, rangeMax: 255 },
    {attribute: "blue", rangeMin: 0, rangeMax:255 },
    {attribute: "fontSize", rangeMin: 8, rangeMax: 100}, //font size conrol button or height width
    {attribute: "height", rangeMin: /*fontSize+2 12, rangeMax:--- }, // allow height to control width or allow seperate 
    {attribute: "width", rangeMin:/*height--- , rangeMax:--- },
    {attribute: "corner", rangeMin: 0, rangeMax: 50 },
    {attribute: "zIndex", rangeMin: 0, rangeMax:--- }

]
/*
//standard random array function
function randomNum(arr) {
    if (arr.length === 0) {
        return "null";
    }
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

function randomNum(arr.rangeMin, arr.rangeMax) {
    const num = Math.floor(Math.random() * (arr.rangeMax - arr.rangeMin) + arr.rangeMin)
    return num;
}

// go through each attribute
function bttnAttributes(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.attribute[i] = randomNum(arr)
    }
}
// pick random number between max and min for attribute
// add 1 to z-index so its the formost object
// assign that number to the new button attribute
// generate button location on page, height, width, rgb, corner, z-index
// when new button clicked starts process again and deactivate button

//ALTERNATE BUTTON RANDOMIZER
function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min) + min)
    return num;
}
let xAxis = randomNum(5, 95);
let yAxis = randomNum(5, 95);

*/
document.addEventListener('DOMContentLoaded', function () {
    //change the color of a button
    let bttn = document.getElementById('startbttn');

    function randomNum(max, min) {
        const num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }
    
    function colorChange(event) {
        let randomColor = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
        event.target.style.backgroundColor = randomColor;
        document.getElementById('colorInfo').textContent = `Color Output: ${randomColor}`;
    }
    //change location of button
    function relocate(event) {
        let xAxis = `${randomNum(5, 95)}%`
        let yAxis = `${randomNum(5, 95)}%`
        event.target.style.left = xAxis;
        event.target.style.top = yAxis;
        document.getElementById('xAxis').textContent = `X-Axis ${xAxis}`;
        document.getElementById('yAxis').textContent = `Y-Axis ${yAxis}`;
    }
    
    bttn.addEventListener('click', colorChange);    
    bttn.addEventListener('click', relocate);

});

