import { Component, OnInit, OnDestroy } from '@angular/core';

import { ISubscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ITodo } from '../../models/i-toDo.interface';
import { Priority } from '../../models/i-toDo.interface';
import * as ToDoActions from '../../actions/toDo.actions';

@Component({
	selector: 'app-to-do-list',
	templateUrl: './to-do-list.component.html',
	styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {

	private subscription: ISubscription;

	public priority = Priority;
	public toDoListImportant: ITodo[];
	public toDoListRegular: ITodo[];
	public toDoListNotImportant: ITodo[];

	constructor(private store: Store<AppState>) {
		this.subscription = store.select('toDoList').subscribe((val) => {
			this.toDoListImportant = val.filter((toDo) => toDo.priority === this.priority.important);
			this.toDoListRegular = val.filter((toDo) => toDo.priority === this.priority.regular);
			this.toDoListNotImportant = val.filter((toDo) => toDo.priority === this.priority.notImportant);
		});
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	removeTodo(index: number) {
		this.store.dispatch(new ToDoActions.RemoveToDo(index));
	}
}
