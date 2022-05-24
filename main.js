class Lamp {
    status;
    constructor(status) {
        this.status = status;
    }

    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}

class Switch {
    status;
    lamp;
    constructor(status) {
        this.status = status;
    }
    connectLamp(lamp) {
        this.lamp = lamp;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    turnOn() {
        this.lamp.turnOn();
    }
    turnOff() {
        this.lamp.turnOff();    
    }
}
let switchButton = new Switch(false)
let lamp = new Lamp(switchButton.getStatus());
console.log(lamp.status);
switchButton.connectLamp(lamp);
switchButton.turnOn();
console.log(lamp.status);
