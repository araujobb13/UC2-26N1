import { Spacecraft } from "../ships/Spacecraft";

// Interface que representa a capacidade de uma nave realizar combate
// Qualquer classe que implementar CombatCapable será obrigada
// a possuir o método attack()
export interface CombatCapable {

    // Recebe uma nave como alvo e retorna a quantidade de dano causado
    attack(target: Spacecraft): number;
}