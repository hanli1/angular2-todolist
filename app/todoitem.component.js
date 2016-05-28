"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todostore_1 = require('./todostore');
var TodoItem = (function () {
    function TodoItem() {
        this.done = new core_1.EventEmitter();
    }
    TodoItem.prototype.deleteClicked = function () {
        this.done.next(this.item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todostore_1.TodoItem)
    ], TodoItem.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoItem.prototype, "done", void 0);
    TodoItem = __decorate([
        core_1.Component({
            selector: 'todo-item',
            template: "\n\t\t<div>\n\t\t\t{{ item.text }}\n\t\t\t<button class=\"delete-button\" (click)=\"deleteClicked()\">X</button>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoitem.component.js.map