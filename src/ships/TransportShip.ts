import { Spacecraft } from "./Spacecraft";
import { CargoCarrier } from "../interfaces/CargoCarrier";

// Representa uma nave de transporte
// A TransportShip herda as características básicas de Spacecraft
// e também possui a capacidade de transportar cargas
export class TransportShip extends Spacecraft implements CargoCarrier {

    // Define a quantidade máxima de carga que a nave suporta
    private cargoCapacity: number;

    // Define a quantidade de carga que a nave está transportando atualmente
    private currentCargo: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        cargoCapacity: number
    ) {
        // Chama o constructor da classe Spacecraft
        super(id, name, fuel, health);

        // Define a capacidade máxima da nave
        this.cargoCapacity = cargoCapacity;

        // Toda nave começa sem carga
        this.currentCargo = 0;
    }

    // Adiciona carga à nave sem ultrapassar sua capacidade máxima
    loadCargo(amount: number): void {

        if (this.currentCargo + amount > this.cargoCapacity) {
            console.log("Não é possível carregar essa quantidade.");
            return;
        }

        this.currentCargo += amount;
    }

    // Remove carga da nave sem permitir que fique abaixo de zero
    unloadCargo(amount: number): void {

        if (this.currentCargo - amount < 0) {
            console.log("Não é possível retirar essa quantidade.");
            return;
        }

        this.currentCargo -= amount;
    }

    // Retorna a capacidade máxima de carga da nave
    getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    // Retorna a quantidade de carga atual da nave
    getCurrentCargo(): number {
        return this.currentCargo;
    }
}