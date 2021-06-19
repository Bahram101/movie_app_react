import React from 'react';

const MovieList = (props) => {
 
    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div className="col-md-3" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteMovieP(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge bg-info text-dark">{movie.vote_average}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )  
}

export default MovieList