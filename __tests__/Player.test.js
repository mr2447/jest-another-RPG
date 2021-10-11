const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
const Player = require('../lib/Player');
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("get player's status as an object", () => {
    const player = new Player('Dave');

    expect(player.getStatus()).toHaveProperty('potions');
    expect(player.getStatus()).toHaveProperty('health');
    expect(player.getStatus()).toHaveProperty('strength');
    expect(player.getStatus()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));
    
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test("get player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();
    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
});

test ("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reducedHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reducedHealth(999999)

    expect(player.health).toBe(0);
})