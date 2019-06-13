// CODE here for your Lambda Classes
//CLASS "Game Obj" Old Way
function GameObject(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
    this.name = options.name;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
  };
  
//CLASS "Game Obj" New Way
class GameObject {
    construtor(gameProperties) {
      this.createdAt = gameProperties.createdAt;
      this.dimensions = gameProperties.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game`;
    }
  }

//CLASS "Character Stats" New Way

  class CharacterStats extends GameObject {
    constructor(characterProperties) {
      super(characterProperties);
      this.hp = characterProperties.hp;
      this.name = characterProperties.name;
    }
  
     takeDamage() {
      return `${this.name} took damage`;
    }
  }

