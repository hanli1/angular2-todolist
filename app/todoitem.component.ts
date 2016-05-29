import { Component, Input, Output, EventEmitter, Directive, ElementRef} from '@angular/core';
import {TodoItem as TodoItemModel} from './todostore'

@Component({
	selector: 'todo-item',
	template: `
		<div class="item-box" (mouseenter)="mouseEntered()" (mouseleave)="mouseLeft()">
			{{ item.text }}
			<button [hidden]="!active" class="delete-button" (click)="deleteClicked()">X</button>
		</div>
	`,
	// @backgroundAnimation="active"
	// animations: [
	//     trigger("backgroundAnimation", [
	//       state(false, style({ "opacity":"0" })),
	// 	  state(true, style({ "opacity":"1" })),
	//       transition("* => *", [
	// 	       animate(500)
	//       ])
	// 	   ])
	// ]
})

export class TodoItem {

	active = false;

	@Input()
	item: TodoItemModel;

	@Output()
	done = new EventEmitter();

	deleteClicked() {
    	this.done.next(this.item);
  	}

  	mouseEntered()
  	{
		this.active = true;
  	}

  	mouseLeft()
  	{
		this.active = false;
  	}

}
