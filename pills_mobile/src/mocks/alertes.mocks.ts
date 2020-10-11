import {Alerte} from '../models/alerte';
import {MEDICAMENTS_MOCKED} from './medicaments.mocks';

export const ALERTES_MOCKED: Alerte[] = [
    {
        id: 0,
        nameOfPatient: ' Fabrice Lucini ',
        medicament: MEDICAMENTS_MOCKED[0].name,
        dateOfPrise: new Date(2020, 10, 16, 12, 30),
        dateOfAlert: new Date(2020, 10, 16, 12, 36),
        alertMessage: ' Je n\'ai pas pu prendre mon médicament car je ne retrouve plus la boîte, c\'est grave ? ',
        correction: true,
        dateOfCorrection: new Date(2020, 10, 16, 12, 42)
    },
    {
        id: 0,
        nameOfPatient: ' Jean Philippe Smet ',
        medicament: MEDICAMENTS_MOCKED[1].name,
        dateOfPrise: new Date(2020, 10, 16, 15, 30),
        dateOfAlert: new Date(2020, 10, 17, 9, 20),
        alertMessage: ' Je suis parti en week end et j\'ai totalement oublié de prendre mon traitement d\'hier ! ',
        correction: false,
        dateOfCorrection: new Date()
    },
];
