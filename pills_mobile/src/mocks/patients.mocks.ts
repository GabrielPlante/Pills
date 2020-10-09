import {Patient} from '../models/patient';
import {SOIGNANTS_MOCKED} from './soignants.mocks';
import {PRISES_MOCKED} from './prises.mocks';

export const PATIENTS_MOCKED: Patient[] = [
    {
        id: 0,
        firstname: 'Robert',
        name: 'Wilson',
        soignant: SOIGNANTS_MOCKED[0],
        prises: [PRISES_MOCKED[0], PRISES_MOCKED[1], PRISES_MOCKED[2], PRISES_MOCKED[3], PRISES_MOCKED[4], PRISES_MOCKED[5]]
    },
    {
        id: 0,
        firstname: 'Fabrice',
        name: 'Lucini',
        soignant: SOIGNANTS_MOCKED[0],
        prises: [PRISES_MOCKED[6], PRISES_MOCKED[7], PRISES_MOCKED[8]]
    }
];
