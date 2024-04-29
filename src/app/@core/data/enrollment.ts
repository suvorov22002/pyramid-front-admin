import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Enrollment {
    id?: number | null;
    miseMin: number;
    miseMax: number;
    percent: number;
    bonusRate: number;
    bonusMax: number;
    partner: string;
    game: string;
    status: string;
}

export interface EnrollmentResponse extends RequestResponse<Enrollment> { }

export abstract class EnrollmentData {
    abstract enrollGame(enroll: Enrollment): Observable<Enrollment>;
    abstract listAllEnrolls(): Observable<Enrollment[]>;
    abstract unsubscribeEnroll(id: number): Observable<object>;
    abstract updateEnroll(id: number, enroll: Enrollment): Observable<Enrollment>;
}