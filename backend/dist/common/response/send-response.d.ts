import { Response } from 'express';
export declare class SendResponse {
    static success(data: any, msg?: string, res?: Response): Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    };
}
