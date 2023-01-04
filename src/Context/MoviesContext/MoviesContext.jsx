import MoviesReducer from "./MoviesReducer";
import {createContext,useEffect,useReducer} from "react";
const INTIAL_STATE={
		movies:[],
				isFetching:true,
				error:false,
};
export const Moviescontext=createContext(INTIAL_STATE);

export const MovesContextProvider=({children})=>{
	const[state,dispatch]=useReducer(MoviesReducer,INTIAL_STATE);
return(
	<MoviesContext.Provider value={
	{
			movies:state.movies,
				isFetching:state.isFetching,
				error:state.error,
		dispatch,
	}
	}>
		{children}
	</MoviesContext.Provider>
		);
};
