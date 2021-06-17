import React from 'react';

class SearchBar extends React.Component{

    state = {
        searchQuery: ""
    }

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
                            onChange={(e) => this.setState({searchQuery: e.target.value})}                              
                            placeholder="Search a movie"
                            value={this.state.searchQuery}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar