import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { ITodo } from '../../../../models/i-toDo.interface';
import { Priority } from '../../../../models/i-toDo.interface';

import * as ToDoActions from '../../../../actions/toDo.actions';

@Component({
	selector: 'app-to-do-card',
	templateUrl: './to-do-card.component.html',
	styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {

	@Input() toDo: ITodo;

	public priority = Priority;

	constructor(private store: Store<AppState>) { }

	ngOnInit() { }

	deleteToDo() {
		if (confirm('Do you really want to delete this task?')) {
			this.store.dispatch(new ToDoActions.RemoveToDo(this.toDo.id));
		}
	}

	toggleCheck() {
		this.store.dispatch(new ToDoActions.ToggleToDo(this.toDo.id));
	}

	moveToNotImportant() {
		this.store.dispatch(new ToDoActions.MoveToNotImportant(this.toDo));
	}

	moveToRegular() {
		this.store.dispatch(new ToDoActions.MoveToRegular(this.toDo));
	}

	moveToImportant() {
		this.store.dispatch(new ToDoActions.MoveToImportant(this.toDo));
	}
}
