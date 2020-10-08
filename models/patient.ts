import {Soignant} from './soignant';
import {Prise} from './prise';

export interface Patient {
    id?: number;
    name?: string;
    firstname?: string;
    soignant?: Soignant;
    prises?: Prise[];
}
