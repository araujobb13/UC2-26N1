import { Spacecraft } from "./Spacecraft";
import { CombatCapable } from "../interfaces/CombatCapable";
import { CargoCarrier } from "../interfaces/CargoCarrier";
import { Exploratory } from "../interfaces/Exploratory";

// Representa uma nave multifuncional
// Ela herda as características básicas de Spacecraft
// e possui três capacidades:
// - Combate
// - Transporte de carga
// - Exploração
export class MultiPurposeShip
    extends Spacecraft
    implements CombatCapable, CargoCarrier, Exploratory {

    // Poder de ataque da nave
    private weaponPower: number;

    // Capacidade máxima de carga da nave
    private cargoCapacity: number;

    // Quantidade de carga transportada atualmente
    private currentCargo: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        weaponPower: number,
        cargoCapacity: number
    ) {
        // Chama o constructor da classe Spacecraft
        // para inicializar os atributos básicos da nave
        super(id, name, fuel, health);

        // Guarda o poder de ataque
        this.weaponPower = weaponPower;

        // Guarda a capacidade máxima de carga
        this.cargoCapacity = cargoCapacity;

        // A nave começa sem nenhuma carga
        this.currentCargo = 0;
    }

    // =========================
    // MÉTODOS DE COMBATE
    // =========================

    // Realiza um ataque contra outra nave
    attack(target: Spacecraft): number {

        // Verifica se a nave está operacional
        if (!this.isOperational()) {
            return 0;
        }

        // O dano causado é igual ao poder da arma
        const damage = this.weaponPower;

        // Aplica o dano na nave alvo
        target.takeDamage(damage);

        // Retorna o dano causado
        return damage;
    }

    // =========================
    // MÉTODOS DE CARGA
    // =========================

    // Adiciona carga à nave
    loadCargo(amount: number): void {

        // Verifica se a nova carga ultrapassaria
        // a capacidade máxima da nave
        if (this.currentCargo + amount > this.cargoCapacity) {
            console.log("Não é possível carregar essa quantidade.");
            return;
        }

        // Adiciona a carga
        this.currentCargo += amount;
    }

    // Remove carga da nave
    unloadCargo(amount: number): void {

        // Verifica se a quantidade retirada
        // é maior do que a carga atual
        if (this.currentCargo - amount < 0) {
            console.log("Não é possível retirar essa quantidade.");
            return;
        }

        // Remove a carga
        this.currentCargo -= amount;
    }

    // Retorna a capacidade máxima de carga
    getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    // Retorna a carga atual
    getCurrentCargo(): number {
        return this.currentCargo;
    }

    // =========================
    // MÉTODOS DE EXPLORAÇÃO
    // =========================

    // Inicia uma exploração em determinado local
    explore(location: string): string {

        // Verifica se a nave está operacional
        if (!this.isOperational()) {
            return "A nave não está operacional.";
        }

        // Verifica se possui combustível suficiente
        if (this.getFuel() < 10) {
            return "Combustível insuficiente para realizar a exploração.";
        }

        // Consome 10 unidades de combustível
        this.consumeFuel(10);

        // Retorna uma mensagem informando
        // que a exploração foi iniciada
        return `${this.getName()} iniciou uma exploração em ${location}.`;
    }
    consumeFuel(arg0: number) {
        throw new Error("Method not implemented.");
    }

    // Coleta dados científicos durante a exploração
    collectData(): string {
        return `${this.getName()} coletou dados científicos.`;
    }
}