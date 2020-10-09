import {Medicament} from './medicament';

export interface Prise {
    id?: number;
    medicament?: Medicament;
    date?: Date;
    isTaken?: boolean;
    hasProblem?: boolean;
}
