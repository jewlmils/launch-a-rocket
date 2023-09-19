let timer = null;
let countdownNumber = 10;

let changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

// countdown
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber - 1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            if (countdownNumber <= 0) {
                changeState(3)
            }
        }, 500);
// sucess or failure
    } else if (state === 3) {
        let sucess = setTimeout(function () {
            let randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber: ', randomNumber)
            if (randomNumber > 7) {
                changeState(4) //yeheeey!
            } else {
                changeState(5) //nauuur :<
            }
        }, 2000);
    }
}