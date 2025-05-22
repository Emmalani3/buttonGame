/*const spider = [
    { spider: "spider", x: 50, y: 45 },
]

//select random image
function randomNum(arr) {
    if (arr.length === 0) {
        return "null";
    }
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

const mainImage = document.getElementById("mainImage");
const spiderbttn = document.getElementById("spiderbttn");

// Initial image name (without extension or _boop)
let imageName = "";
let isSquish = false;

function loadRandomSpider() {
    const spiderObj = randomNum(spider);
    if (!spiderObj) return;

    imageName = spiderObj.spider;
    isSquish = false;

    mainImage.src = `spiders/${imageName}.png`;

    spiderbttn.style.left = `${spiderObj.x}%`;
    spiderbttn.style.top = `${spiderObj.y}%`;
    spiderbttn.textContent = " X ";
}


// Initial positioning
loadRandomSpider();


const counter = document.getElementById("counter");
let count = 0;

spiderbttn.addEventListener("click", () => {
    if (!isSquish) {
        // Show the boop image
        mainImage.src = `spiders/${imageName}_squish.png`;
        isSquish = true;
        count++;
        counter.textContent = count;
                
        // After 1 second, load a new random animal
        setTimeout(() => {
            loadRandomSpider();
        }, 1000);
    }
});
*/
document.addEventListener('DOMContentLoaded', function () {

    let mainImage = document.getElementById('mainImage');
    let count = 0;
    let spiderCounter = document.getElementById('spiderCounter');
    let imageName = "spider";
    let isSquish = false;

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function relocate(element) {
        let xAxis = `${randomNum(10, 90)}%`;
        let yAxis = `${randomNum(10, 90)}%`;
        element.style.left = xAxis;
        element.style.top = yAxis;
        document.getElementById('xAxis').textContent = `X-Axis: ${xAxis}`;
        document.getElementById('yAxis').textContent = `Y-Axis: ${yAxis}`;
    }

    function resize(element) {
        let height = randomNum(50, 150);
        let width = height;
        element.style.height = `${height}px`;
        element.style.width = `${width}px`;
        document.getElementById('height').textContent = `Height: ${height}px`;
        document.getElementById('width').textContent = `Width: ${width}px`;
    }

    function rotate(element) {
        let rotate = randomNum(0, 360);
        element.style.transform = `rotate(${rotate}deg)`;
        document.getElementById('rotate').textContent = `Rotation: ${rotate} degrees`;
    }

    mainImage.addEventListener("click", () => {
        if (!isSquish) {
            mainImage.src = `spiders/${imageName}_squish.png`;
            isSquish = true;
            count++;
            spiderCounter.textContent = `Count: ${count}`;

            setTimeout(() => {
                mainImage.src = `spiders/${imageName}.png`;
                relocate(mainImage);
                resize(mainImage);
                rotate(mainImage);
                isSquish = false;
            }, 500);
        }
    });

});
