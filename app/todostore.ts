export class TodoItem {
	text: String;
}

export class TodoStore {

	items: TodoItem[];

	constructor(){
		this.items = [{text: 'Test Note 1'}];
	}


	addToStore(newItem: String){
		this.items.push({
			text: newItem
		});
	}

	removeFromStore(item: TodoItem) {
	    const index = this.items.indexOf(item);
	    this.items.splice(index, 1);
	}
}