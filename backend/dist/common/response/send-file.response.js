"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadExcel = void 0;
function downloadExcel(name, file, res) {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${name}.xlsx`);
    return res.send(file);
}
exports.downloadExcel = downloadExcel;
//# sourceMappingURL=send-file.response.js.map