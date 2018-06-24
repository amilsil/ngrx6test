import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Org } from './org.models';

@Injectable()
export class OrgService {
    orgs: Org[] = [
        { id: 1, name: 'First' },
        { id: 2, name: 'Second' },
        { id: 3, name: 'Third' },
        { id: 4, name: 'Fourth' },
    ];

    constructor() {}

    // Uses http.get() to load data from a single API endpoint
    getOrgs(): Observable<Org[]> {
        return of(this.orgs);
    }
}
