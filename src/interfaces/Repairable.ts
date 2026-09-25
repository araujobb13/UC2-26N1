// Interface que representa a capacidade de um objeto ser reparado.
// Qualquer classe que implementar Repairable deverá
// possuir os métodos definidos abaixo.

export interface Repairable {

    // Realiza o reparo do objeto.
    repair(): void;

    // Retorna o custo necessário para realizar o reparo.
    getRepairCost(): number;
}