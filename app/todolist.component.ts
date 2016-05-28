import { Component, ViewEncapsulation } from '@angular/core';
import {TodoStore, TodoItem as TodoModelItem} from './todostore'
import {TodoItem} from './todoitem.component'

@Component({
	selector: 'todo-list',
	template: `
		<p class="title">Todos</p>
		<div class="textbox">
			<input placeholder="Input reminder here" [(ngModel)]="newItem"
				(keyup.enter)="addItem()">
			<button class="add-button" (click)="addItem()">Add</button>
			<ul>
				<li *ngFor="let item of items">
					<todo-item [item]="item" (done)="removeItem($event)"></todo-item>
				</li>
			</ul>
		</div>
		
	`,
	directives: [TodoItem]

})

export class TodoList {
	newItem = "";
	store: TodoStore;
	items = null;

	constructor(store: TodoStore){
		this.store = store;
		this.items = store.items;
	}
	addItem()
	{
		if (this.newItem.trim() === "")
		{
			//alert("Cannot add blank item");
			return;
		}
			

		//add to list
		this.store.addToStore(this.newItem);

		this.newItem = "";
	}
	removeItem(item: TodoModelItem) {
    this.store.removeFromStore(item);
  }
}
