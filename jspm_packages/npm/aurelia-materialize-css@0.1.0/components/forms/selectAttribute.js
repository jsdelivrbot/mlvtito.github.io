var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "./../../config"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, config_1) {
    "use strict";
    var SelectAttribute = (function () {
        function SelectAttribute(element) {
            this.element = element;
        }
        SelectAttribute.prototype.attached = function () {
            $(this.element).material_select();
        };
        SelectAttribute.prototype.detached = function () {
            $(this.element).material_select("destroy");
        };
        SelectAttribute = __decorate([
            aurelia_framework_1.customAttribute(config_1.config.materialSelect),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], SelectAttribute);
        return SelectAttribute;
    }());
    exports.SelectAttribute = SelectAttribute;
});

//# sourceMappingURL=selectAttribute.js.map
