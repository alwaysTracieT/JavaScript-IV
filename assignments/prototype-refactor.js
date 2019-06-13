/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/ 
  
class GameObject {
    construtor(attributes) {
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    };

    destroy() {
      return `${this.name} was removed from the game`;
    };
  };

 class CharacterStats extends GameObject {
    constructor(moreAttributes) {
      super(moreAttributes);
      this.healthPoints = moreAttributes.healthPoints;
      this.name = moreAttributes.name;
    };
  
     takeDamage() {
        return `Ouch, ${this.name}! That must sting! (${this.name} took damage.)`;
    };
  };

 class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
      super(humanoidAttributes);
      this.team = humanoidAttributes.team;
      this.weapons = humanoidAttributes.weapons;
      this.language = humanoidAttributes.language;
    };
    greet() {
      return `${this.name} offers a greeting in ${this.language}`;
    };
};

class Villain extends Humanoid {
    constructor(evilAttributes) {
        super(evilAttributes);
        this.evilGlare = evilAttributes.evilGlare;
        this.opponentHealth = evilAttributes.opponentHealth;
    };
    sideEye() {
        return `The side-eye of ${this.name} will have you cowering in no time, puny plumber!`;
    };
};

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const MIL = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 14,
      height: 1,
    },
    healthPoints: 8,
    name: 'The Matriarch',
    team: 'The depths',
    weapons: [
      'sarcasm',
      'salt on everything'
    ],
    language: 'Common Tongue',
    evilGlare: 'Shooting daggers'
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(MIL.sideEye());
