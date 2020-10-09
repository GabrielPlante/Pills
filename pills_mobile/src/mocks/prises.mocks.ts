import {Prise} from '../models/prise';
import {MEDICAMENTS_MOCKED} from './medicaments.mocks';

export const PRISES_MOCKED: Prise[] = [
    {
        id: 0,
        medicament: MEDICAMENTS_MOCKED[0],
        date: new Date(2020, 10, 9, 12, 30, 0),
    },
    {
        id: 1,
        medicament: MEDICAMENTS_MOCKED[1],
        date: new Date(2020, 10, 9, 12, 30, 0),
    },
    {
        id: 2,
        medicament: MEDICAMENTS_MOCKED[0],
        date: new Date(2020, 10, 9, 19, 30, 0),
    },
    {
        id: 3,
        medicament: MEDICAMENTS_MOCKED[0],
        date: new Date(2020, 10, 10, 15, 30, 0),
    },
    {
        id: 4,
        medicament: MEDICAMENTS_MOCKED[1],
        date: new Date(2020, 10, 10, 15, 30, 0),
    },
    {
        id: 5,
        medicament: MEDICAMENTS_MOCKED[2],
        date: new Date(2020, 10, 11, 20, 30, 0),
    },
    {
        id: 6,
        medicament: MEDICAMENTS_MOCKED[2],
        date: new Date(2020, 10, 9, 8, 30, 0),
    },
    {
        id: 7,
        medicament: MEDICAMENTS_MOCKED[1],
        date: new Date(2020, 10, 9, 12, 30, 0),
    },
    {
        id: 8,
        medicament: MEDICAMENTS_MOCKED[1],
        date: new Date(2020, 10, 9, 20, 30, 0),
    },
    {
        id: 9,
        medicament: MEDICAMENTS_MOCKED[1],
        date: new Date(2020, 10, 9, 21, 30, 0),
    }
];
