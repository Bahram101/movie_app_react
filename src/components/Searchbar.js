import React from 'react';

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
                        <button 
                            className="btn btn-success"
                            style={{float:'right'}}>+ Add Movie
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar