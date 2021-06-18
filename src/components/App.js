import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';
import axios from 'axios';


class App extends React.Component {

    state = {
        movies : [],        
        searchQuery: ""
    }

    // async componentDidMount(){
    //     const response = await fetch("http://localhost:3007/movies");
    //     const data = await response.json()
    //     this.setState({movies:data})
    // }

    async componentDidMount(){
        const response = await axios.get("http://localhost:3007/movies");        
        this.setState({movies:response.data})
    }

    // deleteMovie = (movie) =>{
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     this.setState({
    //         movies:newMovieList
    //     })
    // }
    

    //FETCH API    
    // deleteMovie = async (movie) =>{
    //     const baseUrl = `http://localhost:3007/movies/${movie.id}`
    //     await fetch(baseUrl, {
    //         method:"DELETE"
    //     })
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     this.setState({
    //         movies:newMovieList
    //     })
    // }

    //AXIOS API    
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
        // console.log(e.target.value);
        this.setState({searchQuery:e.target.value})
    }



    render() {

        let filteredMovies = this.state.movies.filter(
            movie => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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