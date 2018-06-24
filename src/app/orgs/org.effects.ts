import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OrgActionTypes, OrgFetchSuccess, OrgFetchFailed } from './org.actions';
import { OrgService } from './org.service';

@Injectable()
export class OrgEffects {
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(OrgActionTypes.OrgFetch),
        mergeMap(action =>
            this.orgService.getOrgs().pipe(
                map(data => new OrgFetchSuccess(data)),
                catchError(() => of(new OrgFetchFailed())),
            ),
        ),
    );

    constructor(private actions$: Actions, private orgService: OrgService) {}
}
