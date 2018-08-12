// Soldier

function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  };

  this.receiveDamage = function(damage){
    this.health -= damage;
  };
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.contructor = Viking;

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  }

  this.battleCry = function() {
    return "Odin Owns You All!";
  }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.contructor = Saxon;

function Saxon(health, strength) {
  Soldier.call(this, health, strength)

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in combat";
    }
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
  };
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
  };

  this.vikingAttack = function() {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    
    if (randomSaxon.health <= 0) {
      var index = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy = this.saxonArmy.splice(index, 1);
    }
    
    return randomSaxon.receiveDamage(randomViking.strength);
  };

  this.saxonAttack = function() {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    
    if (randomViking.health <= 0) {
      var index = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy = this.vikingArmy.splice(index, 1);
    }
    
    return randomViking.receiveDamage(randomSaxon.strength);
  };

  this.showStatus = function() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  };
}

