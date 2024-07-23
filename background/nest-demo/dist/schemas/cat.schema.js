"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatSchema = void 0;
const mongoose = require("mongoose");
exports.CatSchema = new mongoose.Schema({
    user: String,
    roles: String,
    name: String,
});
//# sourceMappingURL=cat.schema.js.map