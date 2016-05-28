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
var todoitem_component_1 = require('./todoitem.component');
var TodoList = (function () {
    function TodoList(store) {
        this.newItem = "";
        this.items = null;
        this.store = store;
        this.items = store.items;
    }
    TodoList.prototype.addItem = function () {
        if (this.newItem.trim() === "") {
            //alert("Cannot add blank item");
            return;
        }
        //add to list
        this.store.addToStore(this.newItem);
        this.newItem = "";
    };
    TodoList.prototype.removeItem = function (item) {
        this.store.removeFromStore(item);
    };
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n\t\t<p class=\"title\">Todos</p>\n\t\t<div class=\"textbox\">\n\t\t\t<input placeholder=\"Input reminder here\" [(ngModel)]=\"newItem\"\n\t\t\t\t(keyup.enter)=\"addItem()\">\n\t\t\t<button class=\"add-button\" (click)=\"addItem()\">Add</button>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let item of items\">\n\t\t\t\t\t<todo-item [item]=\"item\" (done)=\"removeItem($event)\"></todo-item>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t",
            directives: [todoitem_component_1.TodoItem]
        }), 
        __metadata('design:paramtypes', [todostore_1.TodoStore])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todolist.component.js.map