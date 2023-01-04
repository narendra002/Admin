import {axios} from "axios"
import {getMoviesSuccess,getMoviesStart,getMoviesFailure} from "./MoviesActions";
export const getMovies=async(dispatch)=>{
	dispatch(getMoviesStart());
	try {
		const res= await axios.get("/movies");
			dispatch(getMoviesSuccess(res.data));
	} catch (error) {
		dispatch(getMoviesFailure(error));
	}
}
;
