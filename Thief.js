const Character = require('./Character')
class Thief extends Character {
  attack(target) {
    const damage = 2 * (this.attackPts - target.defensePts)
    target.lifepoints -= damage
    console.log(`${this.name} atacou ${target.name} com furtividade!`)
    console.log(`${target.name} perdeu ${damage} pontos de vida.`)
  }
}
module.exports = Thief