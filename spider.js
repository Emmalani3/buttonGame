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
        //document.getElementById('xAxis').textContent = `X-Axis: ${xAxis}`;
       // document.getElementById('yAxis').textContent = `Y-Axis: ${yAxis}`;
    }

    function resize(element) {
        let height = randomNum(50, 150);
        let width = height;
        element.style.height = `${height}px`;
        element.style.width = `${width}px`;
        //document.getElementById('height').textContent = `Height: ${height}px`;
        //document.getElementById('width').textContent = `Width: ${width}px`;
    }

    function rotate(element) {
        let rotate = randomNum(0, 360);
        element.style.transform = `rotate(${rotate}deg)`;
        //document.getElementById('rotate').textContent = `Rotation: ${rotate} degrees`;
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
