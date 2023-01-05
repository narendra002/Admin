const API_KEY = '4008ea8497eda5d3e80f32017f7d35bc';
const url = "https://api.themoviedb.org/3";
import axios from "axios"
import {getMoviesSuccess,getMoviesStart,getMoviesFailure} from "./MovieActions";
export const getMovies=async(dispatch)=>{
	dispatch(getMoviesStart());
	try {
		const{data:{results},}= await axios.get(`${url}/movie/popular?api_key=${API_KEY}`);
		dispatch(getMoviesSuccess(results));
	} catch (error) {
		dispatch(getMoviesFailure(error));
	}
};
