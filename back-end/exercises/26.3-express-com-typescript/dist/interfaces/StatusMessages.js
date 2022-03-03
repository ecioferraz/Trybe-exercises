"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
;
var Messages;
(function (Messages) {
    Messages["NOT_FOUND"] = "Restaurant not found";
})(Messages = exports.Messages || (exports.Messages = {}));
;
;
//# sourceMappingURL=StatusMessages.js.map