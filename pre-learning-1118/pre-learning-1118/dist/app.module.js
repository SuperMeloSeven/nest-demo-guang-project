"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const person_module_1 = require("./person/person.module");
const aaa_controller_1 = require("./aaa.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [person_module_1.PersonModule],
        controllers: [app_controller_1.AppController, aaa_controller_1.AaaController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'app_service',
                useClass: app_service_1.AppService,
            },
            {
                provide: 'person',
                useValue: {
                    name: 'aaa',
                    age: 20,
                },
            },
            {
                provide: 'person2',
                useFactory() {
                    return {
                        name: 'bbb',
                        desc: 'cccc',
                    };
                },
            },
            {
                provide: 'person3',
                useFactory(person, appService) {
                    return {
                        name: person.name,
                        desc: appService.getHello(),
                    };
                },
                inject: ['person', 'app_service'],
            },
            {
                provide: 'person5',
                async useFactory() {
                    await new Promise((resolve) => {
                        setTimeout(resolve, 3000);
                    });
                    return {
                        name: 'aaa',
                        desc: 'ccc',
                    };
                },
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map