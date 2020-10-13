import {RendezVous} from '../models/rendezVous';
import {PRISES_MOCKED} from './prises.mocks';

export const RENDEZVOUS_MOCKED: RendezVous[] = [
    {
        id: 0,
        nameOfPatient: 'Marc Dutertre',
        dateOfRdv: new Date(2020, 10, 18, 15, 20),
        prises: [PRISES_MOCKED[0], PRISES_MOCKED[1], PRISES_MOCKED[2], PRISES_MOCKED[3]]
    },
    {
        id: 1,
        nameOfPatient: 'Ben Shapiro',
        dateOfRdv: new Date(2020, 10, 20, 11),
        prises: [PRISES_MOCKED[0], PRISES_MOCKED[5], PRISES_MOCKED[6]]
    },
    {
        id: 2,
        nameOfPatient: 'Eric Lamour',
        dateOfRdv: new Date(2020, 10, 21, 10, 20),
        prises: [PRISES_MOCKED[6], PRISES_MOCKED[7], PRISES_MOCKED[8], PRISES_MOCKED[3]]
    },
    {
        id: 3,
        nameOfPatient: 'Alice Roquin',
        dateOfRdv: new Date(2020, 10, 22, 18, 20),
        prises: [PRISES_MOCKED[3], PRISES_MOCKED[8], PRISES_MOCKED[6]]
    },
];
