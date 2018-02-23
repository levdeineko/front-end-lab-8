/**
 * @typedef {Object} CombatHistory
 * @property {wins} number - Number of victories
 * @property {loses} number - Number of defeats
 */

/**
 * @typedef {Object} Stats
 * @property {string} name - The name of fighter
 * @property {number} attack - The amount of attack of fighter
 * @property {number} hp - The total number of health point of fighter
 */

/**
 * @typedef {Object} Fighter
 * @property {function} getName - Return name of the fighter
 * @property {function} fight - Return true if fighter make dmg to enemy, otherwise false
 * @property {function} block - Return true if enemy can block incoming damage, otherwise false (randomly)
 * @property {function} getStats - Retrurn {Stats} of fighter
 * @property {number} getCombatHistory - Return {CombatHistory} of previous fights
 */

/**
 * Pretty print fighter's info
 * @param {Fighter} fighter - The fighter
 * DO NOT MODIFY
 */

/**
 * Your code goes here
 */
 function showResult(fighter) {
     console.log('Fighter', fighter.getName());
     console.log('- Fighter stats:', fighter.getCombatHistory());
     console.log('- Properties:', fighter.getStats());

 }

 function fighter(info) {
     let details = info;
     let history = { wins: 0, loses: 0 };

     getName = () => details.name;

     fight = (protector) => {
         let protectorInitialHP = protector.getStats().hp;
         if (protector.block()) {
             return false; // in case damage was not given
         } else {
             protector.getStats().hp -= details.attack;
             let damageWasGiven = protectorInitialHP > protector.getStats().hp; // true in case damage was given
             if (damageWasGiven && protector.getStats().hp <= 0) {
                 history.wins++;
                 protector.getCombatHistory().loses++;
             };
             return damageWasGiven;
         }
     };

     block = () => {
         return !!Math.floor(Math.random() * 2); // randomize the block
     };

     getStats = () => details;
     getCombatHistory = () => history;
     return {
         getName,
         fight,
         block,
         getStats,
         getCombatHistory
     }
 }

 /**
  * The following code must be valid after implementation!
  */

 let fighter1 = fighter({ name: 'John', attack: 100, hp: 100 });
 let fighter2 = fighter({ name: 'Kayn', attack: 50, hp: 300 });
 let fighter3 = fighter({ name: 'Bill', attack: 40, hp: 100 });

 fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
 fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

 showResult(fighter1);
 showResult(fighter2);
 showResult(fighter3);

// /**
//  * Fighter John
//  * - Combat stats: { wins: 1, loses: 0 }
//  * - Properties: { name: 'John', attack: 100, hp: 100 }
//  */
// showResult(fighter1);

// /** Fighter Kayn
//  * - Combat stats: { wins: 0, loses: 0 }
//  * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
//  */
// showResult(fighter2);

// /**
//  * Fighter Bill
//  * - Combat stats: { wins: 0, loses: 1 }
//  * - Properties: { name: 'Bill', attack: 40, hp: 0 }
//  */
// showResult(fighter3);
