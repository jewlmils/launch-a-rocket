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
            
            if (countdownNumber > 4 && countdownNumber <= 7 ) {
                // be nervous
                document.getElementById('nervous').className
                    = 'nervous show';
            } else {
                document.getElementById('nervous').className
                    = 'nervous';
            }
            if (countdownNumber > 1 && countdownNumber <= 4) {
                // can't wait
                document.getElementById('cant-wait').className
                    = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className
                    = 'cant-wait';
            }
            
            if (countdownNumber <= 0) {
                changeState(3)
            }
        }, 500);

// sucess or failure
    } else if (state === 3) {
        let sucess = setTimeout(function () {
            let randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber: ', randomNumber)
            if (randomNumber > 5) {
                changeState(4) //yeheeey!
            } else {
                changeState(5) //nauuur :<
            }
        }, 2000);
    }
}