import { Org } from './org.models';
import {
    OrgActionsUnion,
    OrgActionTypes,
    OrgFetchSuccess,
} from './org.actions';

export interface State {
    orgs: Org[];
}

const initialState: State = {
    orgs: [],
};

export function orgReducer(
    state: State = initialState,
    action: OrgActionsUnion,
): State {
    switch (action.type) {
        case OrgActionTypes.OrgFetchSuccess: {
            const ofa = action as OrgFetchSuccess;
            return {
                orgs: ofa.orgs,
            };
        }

        default:
            return state;
    }
}

export const getOrgs = (state: State) => state.orgs;
