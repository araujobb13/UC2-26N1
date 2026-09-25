// Interface que representa a capacidade de realizar exploração espacial
// Qualquer classe que implementar Exploratory deverá
// possuir os métodos definidos abaixo

export interface Exploratory {

    // Inicia uma exploração em um determinado local
    // Recebe o nome do local e retorna uma mensagem
    explore(location: string): string;

    // Coleta dados durante a exploração
    // Retorna uma mensagem informando que os dados foram coletados
    collectData(): string;
}