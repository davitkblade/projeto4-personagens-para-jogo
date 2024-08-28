class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
      this.name = name
      this.lifepoints = lifepoints
      this.attackPts = attackPts
      this.defensePts = defensePts
    }
    attack(target) {
      const damage = this.attackPts - target.defensePts
      target.lifepoints -= damage
      console.log(`${this.name} atacou ${target.name}!`)
      console.log(`${target.name} perdeu ${damage} pontos de vida.`)
    }
  }
  module.exports = Character