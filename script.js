document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    let bttn = document.getElementById('startbttn');
    const restartBtn = document.getElementById('reset');
    const counterDisplay = document.getElementById('counter');

    // Fix: Function should take (min, max)
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Style functions
    function colorChange(event) {
        if (wreckedMode) return;
        let randomColor = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
        event.target.style.backgroundColor = randomColor;
    }

    function relocate(event) {
        if (wreckedMode) return;
        let xAxis = `${randomNum(10, 90)}%`;
        let yAxis = `${randomNum(10, 90)}%`;
        event.target.style.left = xAxis;
        event.target.style.top = yAxis;
    }

    function resize(event) {
        if (wreckedMode) return;
        let text = randomNum(10, 30);
        event.target.style.fontSize = `${text}px`;
        let height = randomNum(text * 2.5, 150);
        let width = randomNum(text * 3, 150);
        event.target.style.height = `${height}px`;
        event.target.style.width = `${width}px`;
    }

    function cornerRound(event) {
        if (wreckedMode) return;
        let corner = `${randomNum(0, 50)}px`;
        event.target.style.borderRadius = corner;
    }

    // Counter logic
    let count = 0;
    function updateCounterDisplay() {
        counterDisplay.textContent = `Counter: ${count}`;
    }

    function incrementCounter() {
        count++;
        updateCounterDisplay();
        checkWreckedTrigger();
    }

    // Wrecked mode logic
    let wreckedTrigger = 3;
    let wreckedMode = false;
    let wreckedTimeout;

    function checkWreckedTrigger() {

        if (!wreckedMode && count > 0 && count % wreckedTrigger === 0) {
            activateWreckedMode();
        }
    }

    function activateWreckedMode() {
        wreckedMode = true;
        bttn.style.backgroundColor = 'red';
        bttn.textContent = "DON'T Click!";


        wreckedTimeout = setTimeout(() => {
            wreckedMode = false;
            bttn.textContent = "Click Me!";
            bttn.style.backgroundColor = 'blue';
            wreckedTrigger = randomNum(5, 15); // re-randomize trigger
        }, 1500);
    }

    function handleClick(event) {
        if (wreckedMode) {
            count -= 10;
            if (count < 0) count = 0;
            updateCounterDisplay();
            return;
        }
        colorChange(event);
        relocate(event);
        resize(event);
        cornerRound(event);
        incrementCounter();
    }

    // Restart logic
    restartBtn.addEventListener('click', () => {
        count = 0;
        updateCounterDisplay();
        wreckedMode = false;
        clearTimeout(wreckedTimeout);
        wreckedTrigger = randomNum(5, 15);
        bttn.textContent = "Click Me!";
        bttn.style.backgroundColor = 'blue';
        bttn.style.left = '50%';
        bttn.style.top = '50%';
        bttn.style.width = '100px';
        bttn.style.height = '50px';
        bttn.style.fontSize = '16px';
        bttn.style.borderRadius = '12px';
    });

    bttn.addEventListener('click', handleClick);

    // Start with display
    updateCounterDisplay();
});
