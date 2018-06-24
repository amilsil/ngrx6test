import { Action } from '@ngrx/store';
import { Org } from './org.models';

export enum OrgActionTypes {
    OrgFetch = '[Org] Fetch',
    OrgFetchSuccess = '[Org] Fetch Success',
    OrgFetchFailed = '[Org] Fetch Failed',
}

export class OrgFetch implements Action {
    readonly type = OrgActionTypes.OrgFetch;
}

export class OrgFetchSuccess implements Action {
    readonly type = OrgActionTypes.OrgFetchSuccess;
    constructor(public orgs: Org[]) {}
}

export class OrgFetchFailed implements Action {
    readonly type = OrgActionTypes.OrgFetchFailed;
}

export type OrgActionsUnion = OrgFetch | OrgFetchSuccess | OrgFetchFailed;
