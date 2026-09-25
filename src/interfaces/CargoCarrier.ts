// Interface que representa a capacidade de uma nave transportar cargas
// Qualquer classe que implementar CargoCarrier deverá
// possuir os métodos definidos abaixo

export interface CargoCarrier {

    // Adiciona uma quantidade de carga à nave
    loadCargo(amount: number): void;

    // Remove uma quantidade de carga da nave
    unloadCargo(amount: number): void;

    // Retorna a capacidade máxima de carga da nave
    getCargoCapacity(): number;

    // Retorna a quantidade de carga que está sendo transportada atualmente
    getCurrentCargo(): number;
}