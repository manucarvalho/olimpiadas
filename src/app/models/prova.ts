import { Sport } from "./sport";

export interface Prova {
    id: number;
    nome: String;
    genero: string;
    tipo: string;
    premiacao: string;
    sport: Sport;
}