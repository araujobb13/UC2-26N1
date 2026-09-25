import { Spacecraft } from "./Spacecraft";
import { Exploratory } from "../interfaces/Exploratory";

// Representa uma nave especializada em exploração espacial
// A ExplorationShip herda as características de Spacecraft
// e implementa a capacidade de exploração definida pela interface Exploratory
export class ExplorationShip extends Spacecraft implements Exploratory {

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number
    ) {
        // Chama o constructor da classe Spacecraft
        super(id, name, fuel, health);
    }

    // Inicia uma exploração em um determinado local
    // A exploração consome 10 unidades de combustível
    explore(location: string): string {

        // Verifica se a nave possui vida e combustível
        if (!this.isOperational()) {
            return "A nave não está operacional.";
        }

        // Verifica se existe combustível suficiente para explorar
        if (this.getFuel() < 10) {
            return "Combustível insuficiente para realizar a exploração.";
        }

        // Consome combustível durante a exploração
        this.consumeFuel(10);

        return `${this.getName()} iniciou uma exploração em ${location}.`;
    }
    consumeFuel(arg0: number) {
        throw new Error("Method not implemented.");
    }

    // Retorna uma mensagem informando que dados científicos foram coletados
    collectData(): string {
        return `${this.getName()} coletou dados científicos.`;
    }
}