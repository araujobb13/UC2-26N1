const readline = require("readline-sync")

// ATTACK FUNCTIONS . fuções de ataque

// função de ataque do guerreiro (console.log vai imprimir no terminal)
// let demage criar um dano aletorio 
// math.radom gera um numero aletorio de 0 a 1 
// *9 transforma 0 até 8 
// +12 faz virar 20 
// retun no caso o dano 


function warriorAttack() {

    console.log(" The Warrior swings a heavy axe!")

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}

function berserkerAttack() {

    console.log(" The Berserker enters a rage!")

    let damage = Math.floor(Math.random() * 13) + 10

    return damage
}

function guardianAttack() {

    console.log(" The Guardian strikes carefully!")

    let damage = Math.floor(Math.random() * 7) + 8

    return damage
}


// CLASSES
// LET WARRIOR cria guerreiro (objt) 
// dano, vida personagem, defesa, poção , atque 

let warrior = {
    className: "Warrior",
    health: 120,
    defense: 8,
    potions: 3,
    attack: warriorAttack
}

let berserker = {
    className: "Berserker",
    health: 100,
    defense: 5,
    potions: 3,
    attack: berserkerAttack
}

let guardian = {
    className: "Guardian",
    health: 140,
    defense: 12,
    potions: 3,
    attack: guardianAttack
}


// ENEMIES inimigos
// crie o array para a lista de inimigos 
// goblin da mina, vida, dano minimo, dano max 


let enemies = [

    {
        name: "Mine Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Moria Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15
    },

    {
        name: "Dark Bat",
        health: 35,
        minDamage: 4,
        maxDamage: 9
    },

    {
        name: "Cave Troll",
        health: 80,
        minDamage: 10,
        maxDamage: 18
    },

    {
        name: "Ancient ",
        health: 50,
        minDamage: 7,
        maxDamage: 13
    }
]


// CREATE CHARACTER

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
function createCharacter() {

    console.log("===================================")
    console.log(" WELCOME TO KHAZAD-DÛM ")
    console.log("===================================")

    let name = prompt("Enter your character name: ")

    console.log("\nChoose your class:")
    console.log("1 - Warrior")
    console.log("2 - Berserker")
    console.log("3 - Guardian")

    let option = prompt("Option: ")

    let selectedClass

    if (option == 1) {

        selectedClass = { ...warrior }

    } else if (option == 2) {

        selectedClass = { ...berserker }

    } else {

        selectedClass = { ...guardian }
    }

    selectedClass.name = name
    selectedClass.isDefending = false

    return selectedClass
}


// GENERATE ENEMY


function generateEnemy(enemies) {

    let index = Math.floor(Math.random() * enemies.length)

    return { ...enemies[index] }
}


// PLAYER ATTACK


function attack(character, enemy) {

    let damage = character.attack()

    enemy.health -= damage

    console.log(` You dealt ${damage} damage!`)
}


// DEFEND


function defend(character) {

    character.isDefending = true

    console.log(" You brace for the next attack!")
}


// USE POTION


function usePotion(character) {

    if (character.potions > 0) {

        character.health += 30
        character.potions--

        console.log(" You used a potion and recovered 30 HP!")

    } else {

        console.log(" No potions left!")
    }
}


// COMBAT MENU


function combatMenu() {

    console.log("\n========================")
    console.log("COMBAT TURN ")
    console.log("========================")
    console.log("1 - Attack")
    console.log("2 - Defend")
    console.log("3 - Use Potion")

    return prompt("Choose an action: ")
}

// ========================================
// START COMBAT
// ========================================

function startCombat(character, enemy) {

    console.log(`\n A ${enemy.name} appears!`)

    while (enemy.health > 0 && character.health > 0) {

        console.log(`\n ${character.name} HP: ${character.health}`)
        console.log(` ${enemy.name} HP: ${enemy.health}`)

        let choice = combatMenu()

        // PLAYER TURN

        if (choice == 1) {

            attack(character, enemy)

        } else if (choice == 2) {

            defend(character)

        } else if (choice == 3) {

            usePotion(character)

        } else {

            console.log(" Invalid option!")
            continue
        }

        // ENEMY DEFEATED

        if (enemy.health <= 0) {

            console.log(`\n You defeated the ${enemy.name}!`)
            return true
        }

        // ENEMY TURN

        let enemyDamage = Math.floor(
            Math.random() * (enemy.maxDamage - enemy.minDamage + 1)
        ) + enemy.minDamage

        if (character.isDefending) {

            enemyDamage = Math.floor(enemyDamage / 2)

            character.isDefending = false
        }

        let finalDamage = enemyDamage - character.defense

        if (finalDamage < 0) {

            finalDamage = 0
        }

        character.health -= finalDamage

        console.log(`  The ${enemy.name} dealt ${finalDamage} damage!`)
    }

    return false
}


// MAIN GAME LOOP


let character = createCharacter()

let defeatedEnemies = 0

while (character.health > 0 && defeatedEnemies < 5) {

    let enemy = generateEnemy(enemies)

    let victory = startCombat(character, enemy)

    if (victory) {

        defeatedEnemies++

        console.log(`\n Enemies defeated: ${defeatedEnemies}/5`)
    }
}

// END GAME


if (character.health <= 0) {

    console.log("\n You died in the depths of Khazad-dûm...")

} else {

    console.log("\n Khazad-dûm has been reclaimed!")
}