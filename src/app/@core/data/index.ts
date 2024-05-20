
export interface RequestResponse<T> {
    codeResponse: string
    error: string
    message: string
    data: T
}

export interface Bet {
    id?: number | null;
    codeGame: string;
    barcode: number;
    codePartner: string;
    salle: string;
    cashierLogin: string;
    numeroTirage: number;
    status: string;
    codeBonus: number;
    numeroTicket: number;
    montantMise: number;
    montantGainMax: number;
    montantGainMin: number;
    odds: number;
    codePari: string;
    selection: string;
    createdAt: Date;
    slips: Slip;
}

interface Slip {

}

