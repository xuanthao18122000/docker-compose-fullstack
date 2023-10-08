import { HttpException } from '@nestjs/common';
export declare class ErrorPayloadDto {
    code: number;
    msg: string;
    success: boolean;
    errors: object;
    constructor({ code, success, msg, errors }: {
        code: any;
        success?: boolean;
        msg?: string;
        errors?: any[];
    });
}
export declare class ErrorException extends HttpException {
    constructor(statusCode: any, code: number, msg: string);
}
