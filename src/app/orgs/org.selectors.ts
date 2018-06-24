import { ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromOrgs from './orgs.reducer';

export interface AppState {
    orgs: fromOrgs.State;
}

export const reducers: ActionReducerMap<AppState> = {
    orgs: fromOrgs.orgReducer,
};

const getOrgState = (state: AppState) => state.orgs;

export const getOrgs = createSelector(getOrgState, state => state.orgs);
