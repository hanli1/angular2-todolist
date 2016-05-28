"use strict";
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var TodoStore = (function () {
    function TodoStore() {
        this.items = [{ text: 'Test Note 1' }];
    }
    TodoStore.prototype.addToStore = function (newItem) {
        this.items.push({
            text: newItem
        });
    };
    TodoStore.prototype.removeFromStore = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
    };
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=todostore.js.map