/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    // it('sets name property', () => {
    //     const ship = new Ship('Dover');

    //     expect(ship.name).toEqual('Dover');
    // });

    it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
        
    });

    it('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});