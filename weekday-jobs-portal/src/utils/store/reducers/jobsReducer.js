import actions from "../../../resources/constants";
 const initialState ={ 
    jobs:[],
    jobsCount : 0,
    hasLoading : false,
    error : null
 }
export default function jobsReducer(state = initialState, { type, payload }  ){
    switch (type){
        case actions.FETCH_JOBS_SUCCESS:
            return {...state, jobs : payload.jobs, jobsCount : payload.jobsCount, hasLoading : false};
         case actions.FETCH_JOBS_FAILED:
            return {...state, error : payload.error}
        default: 
          return state;
    }

}