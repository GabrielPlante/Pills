import {Prise} from './prise';

export interface RendezVous {
    id?: number;
    nameOfPatient?: string;
    dateOfRdv?: Date;
    prises?: Prise[];
}
