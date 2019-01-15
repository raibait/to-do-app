import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { IToDo } from '../../../../models/i-toDo.interface';
import { Priority } from '../../../../models/priority.enum';

import * as ToDoActions from '../../../../actions/toDo.actions';

@Component({
	selector: 'app-to-do-card',
	templateUrl: './to-do-card.component.html',
	styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit {

	@Input() toDo: IToDo;
	@Input() priority: Priority;

	constructor(private store: Store<AppState>) { }

	ngOnInit() { }

	deleteToDo() {
		if (confirm('Do you really want to delete this task?')) {
			this.store.dispatch(new ToDoActions.RemoveToDo({
				toDo: this.toDo,
				priority: this.priority
			}));
		}
	}

	toggleCheck() {
		this.store.dispatch(new ToDoActions.ToggleToDo({
			toDo: this.toDo,
			priority: this.priority
		}));
	}

}
