import { Atleta } from "./atleta";

export interface Equipe {
    id: number;
    nome: String;
    quantAtletas: number;
    atletas: Atleta[];
}