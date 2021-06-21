import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import TestComponent from './TestComponent';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: "",
        testData: 'Welcome test data',
        inputData: '',
        second: ''
    }


    addMovie = async (movie) => {
        await axios.post("http://localhost:3002/movies/", movie)
            .then(({ data }) =>
                this.setState({ movies: this.state.movies.concat([movie]) })
            )
        this.getMovies();
        // this.setState({...this.state, movies: state.movies.concat([movie]) })
    }

    editMovie = async (id, updatedMovie) => {
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
        this.getMovies()
    }


    async componentDidMount() {
       this.getMovies()
    }


    async getMovies(){
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }

    deleteMovie = async (movie) => {
        await axios.delete(`http://localhost:3002/movies/${movie.id}`)
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


    onClickButton = () => {
        alert('WELCOME')
    }


    onChangeInput = (fieldName, value) => {
        switch (fieldName) {
            case 'firstInput':
                console.log(fieldName, value)
                this.setState(state => ({
                    inputData: value
                }))
                break;
            case 'secondInput':
                console.log(fieldName, value)
                this.setState(state => ({
                    second: value
                }))
                break;
        }
    }



    render() {

        let filteredMovies = this.state.movies.filter(
            movie => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
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
                            {/* <TestComponent data={this.state} onClickButton={this.onClickButton} onChangeInput={this.onChangeInput} /> */}
                        </React.Fragment>
                    )}>
                    </Route>

                    <Route path="/add" render={({ history }) => (
                        <AddMovie
                            onAddMovie={(movie) => {
                                this.addMovie(movie)
                                history.push('/')
                            }}
                        />
                    )}>
                    </Route>

                    <Route path="/edit/:id" render={(props) => (
                        <EditMovie
                            {...props}
                            onEditMovie={(id, movie) => {
                                this.editMovie(id, movie)
                            }}
                        />
                    )}>
                    </Route>

                </div>
            </Router>

        )
    }
}

export default App;