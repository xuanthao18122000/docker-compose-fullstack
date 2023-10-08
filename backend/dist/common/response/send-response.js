"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendResponse = void 0;
class SendResponse {
    static success(data, msg = '', res = null) {
        if (res) {
            return res.send({
                code: 200,
                success: true,
                data: data,
                msg: msg,
            });
        }
        return {
            code: 200,
            success: true,
            data: data,
            msg: msg,
        };
    }
}
exports.SendResponse = SendResponse;
//# sourceMappingURL=send-response.js.map