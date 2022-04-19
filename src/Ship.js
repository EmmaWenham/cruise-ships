const startingPort = 'Dover';

class Ship {
    constructor(name) {
        this.name = name;
        this.startingPort = startingPort;
    }

    setSail() {
        this.startingPort = null;
    }

    dock(Port) {
        this.currentPort = Port;
    }

};

module.exports = Ship;