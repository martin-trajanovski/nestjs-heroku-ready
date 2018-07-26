"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var hello_world_module_1 = require("./hello-world/hello-world.module");
var api_controller_1 = require("./api.controller");
var api_service_1 = require("./api.service");
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        common_1.Module({
            imports: [hello_world_module_1.HelloWorldModule],
            controllers: [api_controller_1.ApiController],
            providers: [api_service_1.ApiService],
        })
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
