
export interface RequestResponse<T>{
    codeResponse: string
    error: string
    message: string
    data: T
}
