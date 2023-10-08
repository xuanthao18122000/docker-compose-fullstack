"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = (password) => {
    return bcrypt.hashSync(password, 12);
};
exports.hashPassword = hashPassword;
const comparePasswords = (password, passwordHash) => {
    return bcrypt.compareSync(password, passwordHash);
};
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=auth.utils.js.map