import React from 'react';

const MovieList = (props) => {

    const truncateStr = (string, maxLength) => {
        if(!string) return null;
        if(string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)}...`;
    }
 
    return (
        <div className="row">
            {props.movies.map((movie, i) => (
                <div className="col-md-3" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{truncateStr(movie.overview, 150)}</p>
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