function Ship(currentPort) {
    this.startingPort = currentPort;
    this.previousPort = null;
}

Ship.prototype.setSail = function () {
    this.currentPort = null;
}
module.exports = Ship;