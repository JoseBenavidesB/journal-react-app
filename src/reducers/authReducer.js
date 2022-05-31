import { types } from "../types/types";



export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.loggin:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
            
        case types.loggin:
            return {}

        default:
            return state;
    }
};
