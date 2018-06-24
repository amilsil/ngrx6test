import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter/counter.reducer';
import { OrgFetch } from './orgs/org.actions';
import { Org } from './orgs/org.models';

interface AppState {
    count: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    count$: Observable<number>;
    orgs$: Observable<Org[]>;

    constructor(private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
        this.orgs$ = store.pipe(select('orgs'));
        this.orgs$.subscribe(o => console.log('orgs are ', o));
    }

    ngOnInit() {
        this.store.dispatch(new OrgFetch());
    }
    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}
