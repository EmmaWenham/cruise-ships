const Port = require('../src/Port.js')

describe('port constructor', () => {
    describe('with ports and itinerary', () => {
        let ship;
        let dover;
        let itinerary;

        beforeEach(() => {
            dover = new Port('Dover');
            port = jest.fn();
            ship = jest.fn();
        });

        it('can be intantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('can add a ship', () => {

            const ship = jest.fn();

            dover.addShip(ship);

            expect(dover.ships).toContain(ship);
        });

        it('can remove a ship', () => {
            const titanic = {};
            const bloodyMary = {};

            dover.addShip(titanic);
            dover.addShip(bloodyMary);
            dover.removeShip(bloodyMary);

            expect(dover.ships).toEqual([titanic]);
        })
    })
});