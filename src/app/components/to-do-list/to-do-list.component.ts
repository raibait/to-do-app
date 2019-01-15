import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ISubscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { IToDoObject } from '../../models/i-toDoObject.interface';
import { Priority } from '../../models/priority.enum';
import * as ToDoActions from '../../actions/toDo.actions';

@Component({
	selector: 'app-to-do-list',
	templateUrl: './to-do-list.component.html',
	styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {

	private subscription: ISubscription;

	public priority = Priority;
	public toDoObject: IToDoObject;

	constructor(private store: Store<AppState>) {
		this.store.dispatch(new ToDoActions.FetchTodos());
		this.subscription = store.select('toDoObject').subscribe((val) => this.toDoObject = val);
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,	event.container.data, event.previousIndex, event.currentIndex);
		}
		this.store.dispatch(new ToDoActions.UpdateTodoObject(this.toDoObject));
	}

}
