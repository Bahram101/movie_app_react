import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import axios from 'axios';
// require('dotenv').config();
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }


    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }


    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3007/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState({
            movies: newMovieList
        })
    }


    searchMovie = (e) => {
        this.setState({ searchQuery: e.target.value })
    }



    render() {
        let filteredMovies = this.state.movies.filter(
            movie => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <Router>
                <div className="container">

                    <Route path="/" exact render={() => (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-12">
                                    <SearchBar searchMovieP={this.searchMovie} />
                                </div>
                            </div>

                            <MovieList
                                movies={filteredMovies}
                                deleteMovieP={this.deleteMovie}
                            />
                        </React.Fragment>
                    )}>

                    </Route>

                    <Route path="/add" component={AddMovie} />


                </div>
            </Router>

        )
    }
}

export default App;