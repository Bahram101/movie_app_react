import React from 'react'
import SearchBar from './Searchbar';
import MovieList from './MovieList';






class App extends React.Component {

    state = {
        movies : [
            {
                "id": 7,
                "name": "The Matrix 3",
                "rating": "8.1",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
                
            },
            {
                "id": 8,
                "name": "The Matrix Reloaded",
                "rating": "6.9",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                
            },
            {
                "id": 11,
                "name": "Saw 3D",
                "rating": "7.5",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
                
            },
            {
                "id": 12,
                "name": "Blitz 007",
                "rating": "11",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
                
            },
            {
                "id": 13,
                "name": "Hostage",
                "rating": "6.3",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                
            }
        ],        
        searchQuery: ""
    }

    deleteMovie = (movie) =>{
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