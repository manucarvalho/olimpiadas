import { Pais } from "./pais";

export interface Atleta {
    id: number;
    nome: String;
    genero: string;
    pais: Pais;
}