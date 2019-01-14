import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { Priority } from '../../../../models/i-toDo.interface';

import * as ToDoActions from '../../../../actions/toDo.actions';

@Component({
	selector: 'app-add-card',
	templateUrl: './add-card.component.html',
	styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

	@ViewChild('form') form: NgForm;
	@ViewChild('panel') panel;

	@Input() priority: Priority;

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
	}

	addTask() {
		if (this.form.valid) {
			this.panel.close();
			this.store.dispatch(new ToDoActions.AddToDo({
				title: this.form.value.title,
				comment: this.form.value.comment,
				checked: false,
				priority: this.priority
			}));
			this.form.resetForm();
		}
	}

}
