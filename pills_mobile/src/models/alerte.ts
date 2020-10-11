export interface Alerte {
    id?: number;
    nameOfPatient?: string;
    dateOfPrise?: Date;
    dateOfAlert?: Date;
    medicament?: string;
    alertMessage?: string;
    correction?: boolean;
    dateOfCorrection: Date;
}
