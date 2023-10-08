declare const statusCode: {
    BACKEND: {
        code: number;
        type: string;
        msg: string;
    };
    BAD_REQUEST: {
        code: number;
        type: string;
    };
    UNAUTHORIZED: {
        code: number;
        type: string;
        msg: string;
    };
    LOGIN_ERROR: {
        code: number;
        type: string;
    };
    FORBIDDEN: {
        code: number;
        type: string;
        msg: string;
    };
    NOT_FOUND: {
        code: number;
        type: string;
    };
    WRONG_DATA: {
        code: number;
        type: string;
        msg: string;
    };
    NOT_ENOUGH_DATA: {
        code: number;
        type: string;
        msg: string;
    };
    VALIDATION_ERROR: {
        code: number;
        type: string;
    };
    USER_EXISTED: {
        code: number;
        type: string;
    };
    USER_NOT_FOUND: {
        code: number;
        type: string;
    };
    WRONG_PASSWORD: {
        code: number;
        type: string;
    };
    USER_INACTIVE: {
        code: number;
        type: string;
    };
};
export default statusCode;
