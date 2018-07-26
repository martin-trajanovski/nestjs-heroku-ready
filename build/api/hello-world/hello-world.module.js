"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var hello_world_controller_1 = require("./hello-world.controller");
var hello_world_service_1 = require("./hello-world.service");
var HelloWorldModule = /** @class */ (function () {
    function HelloWorldModule() {
    }
    HelloWorldModule = __decorate([
        common_1.Module({
            imports: [],
            controllers: [hello_world_controller_1.HelloWorldController],
            providers: [hello_world_service_1.HelloWorldService],
        })
    ], HelloWorldModule);
    return HelloWorldModule;
}());
exports.HelloWorldModule = HelloWorldModule;
