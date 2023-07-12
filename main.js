// create ship class
class Ship {
    constructor(name, hull, firepower, accuracy) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
  }
  
  // create function to pick random number between given numbers in whole numbers
  const randomWholeNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // create function to pick random number between given numbers in decimal
  const randomDecimalNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  
  // human spaceship subclass
  // let playerShip = new Ship ('USS Assembly', 20, 5, 0.7)
  class humanShip extends Ship {
    constructor (name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)
    }  
    // create attack method
    attack(target) {
      if (Math.random() < this.accuracy) {
        console.log('We damaged the enemy!');
        target.hull -= this.firepower;
        if (target.hull <= 0) {
          console.log('We got them! Enemy ship has been destroyed');
        } else {
          console.log(`Hit! The enemy ship has ${target.hull} hull integrity remaining`);
        }
      } else {
        console.log('You missed!');
      }
    }
    retreat() {
      console.log(`You have survived the battle and retreated, but at what cost?`);
    }
  }
  
  // alien spaceship subclass
  // let alienShip = new Ship ('Bad Boy', randomWholeNumber(3, 6),randomWholeNumber(2, 4), randomDecimalNumber(0.6, 0.8))
  
  class alienShip extends Ship {
    constructor (name, hull, firepower, accuracy) {
      super (name, hull, firepower, accuracy)
    } 
    // create attack method
    attack(player) {
      if (Math.random() < this.accuracy) {
        console.log('You have been hit!');
        player.hull -= this.firepower;
        if (player.hull <= 0) {
          console.log('We are done for. The ship is destroyed!');
        } else {
          console.log(`Damaged received! The our ship has ${player.hull} hull integrity remaining`);
        }
      } else {
        console.log('They missed!');
      }
    }
  }
  
  
  // make instance of human class
  
  let playerShip = new humanShip ('USS Assembly', 20, 5, 0.7)
  
  // make instance of alien class
  
  let foreignShip = new alienShip ('Bad Boy', randomWholeNumber(3, 6),randomWholeNumber(2, 4), randomDecimalNumber(0.6, 0.8))
  
  // playerShip.attack(foreignShip)
  // foreignShip.attack(playerShip)