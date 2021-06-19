import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';
import axios from 'axios';
require('dotenv').config();


class App extends React.Component {

    state = {
        movies : [],        
        searchQuery: ""
    }


    async componentDidMount(){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);        
        
        this.setState({movies:response.data.results})
        console.log(response.data.results);
    }

         
    deleteMovie = async (movie) =>{
        axios.delete(`http://localhost:3007/movies/${movie.id}`) 
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState({
            movies:newMovieList
        })
    }


    searchMovie = (e) => {
        this.setState({searchQuery:e.target.value})
    }



    render() {
        let filteredMovies = this.state.movies.filter(
            movie => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar searchMovieP={this.searchMovie}/>                        
                    </div>
                </div>
                <MovieList 
                    movies={filteredMovies}
                    deleteMovieP = {this.deleteMovie}
                />
            </div>
        )
    }
}

export default App;