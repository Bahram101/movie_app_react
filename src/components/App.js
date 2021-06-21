import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    
    addMovie = async (movie) => {
        await axios.post("http://localhost:3002/movies/", movie)
        this.setState(state => ({
            movies:state.movies.concat([movie])
        }))
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
        ).sort((a,b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        })

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

                    <Route path="/add" render={({history}) => (
                        <AddMovie
                            onAddMovie = { (movie) => {
                                this.addMovie(movie)
                                history.push('/')}                        
                            }
                        />
                    )}>                       
                    </Route>

                </div>
            </Router>

        )
    }
}

export default App;