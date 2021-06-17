import React from 'react';

class SearchBar extends React.Component{

    
    handleForSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleForSubmit}>
                <div className="form-row mb-5 mt-5">
                    <div className="col-12">
                        <input 
                            type="text" className="form-control"
                            // onChange={(e) => this.setState({searchQuery: e.target.value})}                              
                            onChange={this.props.searchMovieP}                              
                            placeholder="Search a movie"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar