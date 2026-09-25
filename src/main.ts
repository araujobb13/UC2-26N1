// Importa as classes de naves que vamos testar.
import { Fighter } from "./ships/Fighter";
import { TransportShip } from "./ships/TransportShip";
import { ExplorationShip } from "./ships/ExplorationShip";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { Repairable } from "./interfaces/Repairable";
import { CombatCapable } from "./interfaces/CombatCapable";
import { CargoCarrier } from "./interfaces/CargoCarrier";
import { Exploratory } from "./interfaces/Exploratory";
// ==========================================
// CRIANDO AS NAVES
// ==========================================
// Interface que define informações básicas de uma nave.
// Ela exige que a classe forneça métodos para consultar
// o ID e o nome da nave.
interface SpacecraftInfo {

    // Método para consultar o ID.
    getId(): number;

    // Método para consultar o nome.
    getName(): string;
}
// Cria uma nave de combate.
const fighter = new Fighter(
    1,
    "USS Enterprise",
    100,
    100,
    30
);

// Cria uma nave de transporte.
const transport = new TransportShip(
    2,
    "Cargo One",
    100,
    100,
    500
);

// Cria uma nave de exploração.
const explorer = new ExplorationShip(
    3,
    "Discovery",
    100,
    100
);

// Cria uma nave multifuncional.
const multiPurpose = new MultiPurposeShip(
    4,
    "USS Voyager",
    100,
    100,
    25,
    300
);

// ==========================================
// MOSTRANDO O STATUS DAS NAVES
// ==========================================

console.log("===== FIGHTER =====");
fighter.showStatus();

console.log("\n===== TRANSPORT SHIP =====");
transport.showStatus();

console.log("\n===== EXPLORATION SHIP =====");
explorer.showStatus();

console.log("\n===== MULTI PURPOSE SHIP =====");
multiPurpose.showStatus();



// ==========================================
// PARTE 11 - ARRAYS DE INTERFACES
// ==========================================

// Array que pode armazenar qualquer nave
// que tenha capacidade de combate.
const combatShips: CombatCapable[] = [];

// Adiciona o Fighter ao grupo de naves de combate.
combatShips.push(fighter);

// Adiciona a MultiPurposeShip ao grupo.
// Ela também implementa CombatCapable.
combatShips.push(multiPurpose);


// ==========================================
// NAVES DE EXPLORAÇÃO
// ==========================================

// Array que pode armazenar qualquer objeto
// que tenha capacidade de exploração.
const explorationShips: Exploratory[] = [];

// Adiciona a ExplorationShip.
explorationShips.push(explorer);

// Adiciona a MultiPurposeShip.
// Ela também implementa Exploratory.
explorationShips.push(multiPurpose);


// ==========================================
// NAVES DE TRANSPORTE
// ==========================================

// Array que pode armazenar qualquer objeto
// que tenha capacidade de transportar carga.
const cargoShips: CargoCarrier[] = [];

// Adiciona a TransportShip.
cargoShips.push(transport);

// Adiciona a MultiPurposeShip.
// Ela também implementa CargoCarrier.
cargoShips.push(multiPurpose);


// ==========================================
// PARTE 14 - INTERFACES NÃO SÃO CLASSES
// ==========================================

// Função que recebe qualquer objeto
// que tenha a capacidade de ser reparado.
function repairObject(object: Repairable): void {

    // Executa o método de reparo do objeto.
    object.repair();

    console.log("Objeto reparado com sucesso!");
}


// Testa o reparo usando o Fighter.
repairObject(fighter);

// Testa o reparo usando a MultiPurposeShip.
repairObject(multiPurpose);

// ==========================================
// PARTE 16 - INTERFACE COMO CONTRATO
// ==========================================

// O Fighter pode ser usado porque implementa CombatCapable.
startCombat(fighter, transport);

// A MultiPurposeShip também pode ser usada
// porque também implementa CombatCapable.
startCombat(multiPurpose, fighter);

function startCombat(fighter: Fighter, transport: TransportShip) {
    throw new Error("Function not implemented.");
}
