import { Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem as TodoItemModel} from './todostore'

@Component({
	selector: 'todo-item',
	template: `
		<div>
			{{ item.text }}
			<button class="delete-button" (click)="deleteClicked()">X</button>
		</div>
	`

})

export class TodoItem {
	@Input()
	item: TodoItemModel;

	@Output()
	done = new EventEmitter();

	deleteClicked() {
    	this.done.next(this.item);
  	}

}
