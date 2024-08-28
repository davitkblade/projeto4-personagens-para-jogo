const Character = require('./Character')
class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.position = 'defesa'
  }
  attack(target) {
    if (this.position === 'ataque') {
      const damage = this.attackPts - target.defensePts
      target.lifepoints -= damage
      console.log(`${this.name} atacou ${target.name}!`)
      console.log(`${target.name} perdeu ${damage} pontos de vida.`)
    } else {
      console.log(`${this.name} está em posição de defesa e não pode atacar!`)
    }
  }
  changeStance() {
    if (this.position === 'ataque') {
      this.position = 'defesa'
      console.log(`${this.name} mudou para a posição de defesa.`)
    } else {
      this.position = 'ataque'
      console.log(`${this.name} mudou para a posição de ataque.`)
    }
  }
}
module.exports = Warrior