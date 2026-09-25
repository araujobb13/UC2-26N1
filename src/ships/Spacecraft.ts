// Importa a interface que define a capacidade de reparo.
import { Repairable } from "../interfaces/Repairable";

// Classe base das espaçonaves.
// Ela é abstrata porque não queremos criar uma nave genérica.
// As outras classes de naves irão herdar dela.
export abstract class Spacecraft implements Repairable {

    // Atributos privados para proteger os dados da nave.
    // Eles só podem ser acessados diretamente dentro desta classe.
    private id: number;
    private name: string;
    private fuel: number;
    private health: number;

    // O constructor recebe os dados necessários para criar uma nave.
    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number
    ) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
        this.health = health;
    }

    // Getter usado para consultar o ID da nave.
    getId(): number {
        return this.id;
    }

    // Getter usado para consultar o nome da nave.
    getName(): string {
        return this.name;
    }

    // Getter usado para consultar a quantidade de combustível.
    getFuel(): number {
        return this.fuel;
    }

    // Getter usado para consultar a quantidade de vida.
    getHealth(): number {
        return this.health;
    }

    // Adiciona combustível à nave.
    refuel(amount: number): void {
        this.fuel += amount;
    }

    // Reduz o combustível da nave.
    // O combustível nunca pode ficar abaixo de zero.
    consumeFuel(amount: number): void {
        this.fuel -= amount;

        if (this.fuel < 0) {
            this.fuel = 0;
        }
    }

    // Diminui a vida da nave de acordo com o dano recebido.
    takeDamage(amount: number): void {
        this.health -= amount;

        // A vida não pode ficar abaixo de 0.
        if (this.health < 0) {
            this.health = 0;
        }
    }

    // Recupera a vida da nave.
    // Se nenhum valor for informado, recupera 20 pontos.
    repair(amount: number = 20): void {
        this.health += amount;

        // A vida máxima da nave é 100.
        if (this.health > 100) {
            this.health = 100;
        }
    }

    // Retorna o custo do reparo da nave.
    getRepairCost(): number {
        return 100;
    }

    // Exibe as informações atuais da nave no terminal.
    showStatus(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.name}`);
        console.log(`Combustível: ${this.fuel}`);
        console.log(`Vida: ${this.health}`);
    }

    // Verifica se a nave ainda pode funcionar.
    // Para estar operacional, ela precisa ter vida e combustível.
    isOperational(): boolean {
        return this.health > 0 && this.fuel > 0;
    }
}