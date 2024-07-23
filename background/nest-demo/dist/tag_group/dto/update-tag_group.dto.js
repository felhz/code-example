"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagGroupDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tag_group_dto_1 = require("./create-tag_group.dto");
class UpdateTagGroupDto extends (0, mapped_types_1.PartialType)(create_tag_group_dto_1.CreateTagGroupDto) {
}
exports.UpdateTagGroupDto = UpdateTagGroupDto;
//# sourceMappingURL=update-tag_group.dto.js.map