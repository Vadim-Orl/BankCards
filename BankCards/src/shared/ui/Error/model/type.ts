export interface ErrorType {
    data: {
        type: string;
        message: string;
    };
    status: number;
}

export enum ErrorCode {
    notAuth = 401,
    serverOut = 500,
    invalidRequest = 400,
}
