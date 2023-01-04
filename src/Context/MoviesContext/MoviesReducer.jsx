const MoviesReducer=(state,action)=>{
	switch(action.type){
			case:GET_MOVIES_START:
			return{
				movies:[],
				isFetching:true,
				error:false,
			};

			case:GET_MOVIES_SUCCESS:
			return{
				movies:[],
				isFetching:true,
				error:false,
			};

			case:GET_MOVIES_FAILURE:
			return{
				movies:[],
				isFetching:false,
				error:true,
			};
		default:
			return{...state};
	}
};
export default MoviesReducer;