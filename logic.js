const car = {
    make: 'VW',
    type: 'Polo',
    seats: [
        'seat1',
        'seat2',
        'seat3'
    ],
    isTurnedOn: false,
    turnOn: function() { //method
        this.isTurnedOn = true;
    },
    fly: function () {
        alert('fly')
    },
    switchCar: function (isOn) {
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
        console.log ('turn car ' +isOn)
    }
}

