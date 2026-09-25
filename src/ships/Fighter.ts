import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";

// Representa uma nave de combate
// O Fighter herda as características básicas de Spacecraft
// e também possui a capacidade de atacar
export class Fighter extends Spacecraft implements CombatCapable {

    // Poder de ataque exclusivo do Fighter
    private weaponPower: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        weaponPower: number
    ) {
        // Chama o constructor da classe Spacecraft
        super(id, name, fuel, health);

        // Guarda o poder da arma do Fighter
        this.weaponPower = weaponPower;
    }

    // Permite consultar o poder da arma
    getWeaponPower(): number {
        return this.weaponPower;
    }

    // Realiza um ataque contra outra espaçonave
    attack(target: Spacecraft): number {

        // Verifica se o Fighter pode realizar o ataque
        if (!this.isOperational()) {
            return 0;
        }

        // O dano causado é baseado no poder da arma
        const damage = this.weaponPower;

        // Aplica o dano na nave alvo
        target.takeDamage(damage);

        // Retorna a quantidade de dano causado
        return damage;
    }
}