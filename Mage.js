const Character = require('./Character')
class Mage extends Character {
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.magicPts = magicPts
  }
  attack(target) {
    const damage = this.attackPts + this.magicPts - target.defensePts
    target.lifepoints -= damage
    console.log(`${this.name} lançou um feitiço em ${target.name}!`)
    console.log(`${target.name} perdeu ${damage} pontos de vida.`)
  }
  heal(target) {
    const healAmount = 2 * this.magicPts
    target.lifepoints += healAmount
    console.log(`${this.name} curou ${target.name}!`)
    console.log(`${target.name} recuperou ${healAmount} pontos de vida.`)
  }
}
module.exports = Mage