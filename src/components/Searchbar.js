import React from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends React.Component{

    
    handleForSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleForSubmit}>
                <div className="row mb-5 mt-5">
                    <div className="col-10">
                        <input 
                            type="text" className="form-control"
                            // onChange={(e) => this.setState({searchQuery: e.target.value})}                              
                            onChange={this.props.searchMovieP}                              
                            placeholder="Search a movie"
                        />
                    </div>
                    <div className="col-2 float-right">
                        <Link 
                            to="/add"
                            className="btn btn-success"
                            style={{float:'right'}}>+ Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar