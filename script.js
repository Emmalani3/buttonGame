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
        //document.getElementById('colorInfo').textContent = `Color Output: ${randomColor}`;
    }
    //change location of button
    function relocate(event) {
        let xAxis = `${randomNum(10, 90)}%`;
        let yAxis = `${randomNum(10, 90)}%`;
        event.target.style.left = xAxis;
        event.target.style.top = yAxis;
        //document.getElementById('xAxis').textContent = `X-Axis: ${xAxis}`;
        //document.getElementById('yAxis').textContent = `Y-Axis: ${yAxis}`;
    }
    function resize(event) {
        let text= randomNum(10, 30);
        event.target.style.fontSize = `${text}px`;
        //document.getElementById('fontSize').textContent = `Font-size: ${text}`;

        let height = randomNum((text*2.5), 150);
        let width = randomNum((text*3), 150);
        event.target.style.height = `${height}px`;
        event.target.style.width = `${width}px`;
        //document.getElementById('height').textContent = `Hegith: ${height}px`;
        //document.getElementById('width').textContent = `Width: ${width}px`;
    }
    function cornerRound(event) {
        let corner = `${randomNum(0, 50)}px`;
        event.target.style.borderRadius = corner;
        //document.getElementById('cornerRound').textContent = `Corner Round: ${corner}`
    }
    //counter
    let count = 0; // define this outside the function so it persists

    function counter() {
        count++;
        let counterDisplay = document.getElementById('counter');
        counterDisplay.textContent = `Counter: ${count}`;
    }
    const restartBtn = document.getElementById('reset');
    const counterDisplay = document.getElementById('counter');

    restartBtn.addEventListener('click', () => {
        // Reset counter
        count = 0;
        counterDisplay.textContent = `Counter: ${count}`;

        // Reset button styles
        bttn.style.backgroundColor = 'blue';
        bttn.style.left = '50%';
        bttn.style.top = '50%';
        bttn.style.width = '100px';
        bttn.style.height = '50px';
        bttn.style.fontSize = '16px';
        bttn.style.borderRadius = '12px';
        bttn.style.transform = 'none'; // optional in case you're adding rotation later
    });

    
    bttn.addEventListener('click', colorChange);    
    bttn.addEventListener('click', relocate);
    bttn.addEventListener('click', resize);
    bttn.addEventListener('click', cornerRound);
    bttn.addEventListener('click', counter);

});

