import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';
import Undead from '../Undead';
import Team from '../Team';

describe('Тест команды', () => {
  test('Проверка Team.add()', () => {
    const bowman = new Bowman('Jack');
    const team = new Team();
    team.add(bowman);
    const result = team.toArray();
    const expected = [bowman];

    expect(result).toEqual(expected);

    expect(() => {
      team.add(bowman);
    }).toThrow();
  });
  test('Проверка Team.addAll()', () => {
    const team = new Team();
    const bowman = new Bowman('Jack');
    const daemon = new Daemon('Bill');
    const mag = new Magician('Bob');
    const war = new Swordsman('Nick');
    const zombie = new Zombie('Lu');
    const undead = new Undead('Mathew');
    team.addAll(bowman, bowman, daemon, mag, war, zombie, undead);
    const result = team.toArray();
    const expected = [
      bowman, daemon, mag, war, zombie, undead,
    ];

    expect(result).toEqual(expected);
  });
});
