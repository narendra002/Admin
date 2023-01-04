import axios from "axios"
import {getMoviesSuccess,getMoviesStart,getMoviesFailure} from "./MovieActions";
export const getMovies=async(dispatch)=>{
	dispatch(getMoviesStart());
	try {
		const res= await axios.get("/movie");
			dispatch(getMoviesSuccess(res.data));
	} catch (error) {
		dispatch(getMoviesFailure(error));
	}
};
