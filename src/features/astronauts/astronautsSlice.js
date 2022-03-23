// Action Creators
export function fetchAstronauts(astronauts) {
 
   return function (dispatch){
    //dispatch an initial action to set up as a "loading" state
    dispatch({type: "astronauts/astronautsLoading"});

    //initiate a network request with fetch
    fetch("http://api.open-notify.org/astros.json")
      .then((r) => r.json())
      .then((astronauts) =>
        //when we have data from the response, dispatch another action to add the data to our Redux store
        dispatch({
          type: "astronauts/astronautsLoaded",
          payload: astronauts.people,
        })
      );
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle", //loading status for fetch
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };

    //added case
    case "astronauts/astronautsLoading":
      return{
        ...state,
        status: "loading",
      }

    default:
      return state;
  }
}
