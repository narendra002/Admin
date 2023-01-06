const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "http://127.0.0.1:4000";
import axios from "axios"
import {getMoviesSuccess,getMoviesStart,getMoviesFailure
,	deleteMoviesFailure,deleteMoviesSuccess,deleteMoviesStart} from "./MovieActions";
export const getMovies=async(dispatch)=>{
	dispatch(getMoviesStart());
	try {
		const res= await axios.get(`${url}/movie`);
		
		dispatch(getMoviesSuccess(res.data));
	} catch (error) {
		dispatch(getMoviesFailure(error));
	}
};


export const deleteMovies=async(id,dispatch)=>{
	dispatch(deleteMoviesStart());
	try {
		 await axios.delete(`${url}/movie/`+id);
		
		dispatch(deleteMoviesSuccess(id));
	} catch (error) {
		dispatch(deleteMoviesFailure(error));
	}
};
