import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ToDoService } from '../services/to-do.service';

import * as ToDoActions from '../actions/toDo.actions';

@Injectable()
export class ToDoEffects {

	@Effect()
	fetchTodos$: Observable<Action> = this.actions$.pipe(
		ofType(ToDoActions.FETCH_TODOS),
		switchMap(() => this.toDoService.getTodos().pipe(
			map((toDos) => new ToDoActions.FetchTodosSuccess(toDos)),
			catchError((error) => of(new ToDoActions.FetchTodosFail(error)))
		))
	);

	@Effect({dispatch: false})
	consoleError: Observable<Action> = this.actions$.pipe(
		ofType(ToDoActions.FETCH_TODOS_FAIL),
		tap((error) => console.log(error))
	);

	constructor(private toDoService: ToDoService, private actions$: Actions) { }
}
