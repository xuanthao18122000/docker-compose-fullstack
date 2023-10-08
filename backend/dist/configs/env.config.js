"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg = void 0;
require("dotenv/config");
const cfg = (key, parser = String) => parser(process.env[key]);
exports.cfg = cfg;
//# sourceMappingURL=env.config.js.map