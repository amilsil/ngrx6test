import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter/counter.reducer';
import { OrgFetch } from './orgs/org.actions';
import { Org } from './orgs/org.models';
import * as orgSelectors from './orgs/org.selectors';

interface AppState {
    count: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    orgs$: Observable<Org[]>;

    constructor(private store: Store<AppState>) {
        this.orgs$ = store.pipe(select(orgSelectors.getOrgs));
        this.orgs$.subscribe(o => console.log('orgs are ', o));
    }

    ngOnInit() {}
    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }

    fetchOrg() {
        this.store.dispatch(new OrgFetch());
    }
}
