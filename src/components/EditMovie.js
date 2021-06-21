import React from 'react';
import serialize from 'form-serialize';
import axios from 'axios';

class EditMovie extends React.Component {

    state = {
        title: "",
        rating: "",
        overview: "",
        imageURL: "",
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        this.setState({
            title: response.data.title,
            rating: response.data.rating,
            overview: response.data.overview,
            imageURL: response.data.imageURL
        })       
        console.log('STATE',this.state); 
    }

    
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();        

        // const title = this.state.title;
        // const rating = this.state.rating;
        // const imageURL = this.state.imageURL;
        // const iverview = this.state.iverview;

        const {title, rating, imageURL, overview} = this.state;
        const id = this.props.match.params.id;

        const updatedMovie = {
            title, rating, imageURL, overview
        }

        this.props.onEditMovie(id, updatedMovie)
        this.props.history.push('/')

    }


    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    {/* <input className="form-control" id="disabledInput" type="text" placeholder="EDIT The Form To Add A Movie.." disabled /> */}
                    <div className="row">
                        <div className="form-group mb-3 col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="title"
                                value={this.state.title} 
                                onChange={this.onInputChange}/>
                        </div>
                        <div className="form-group mb-3 col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.rating} 
                                onChange={this.onInputChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group mb-3 col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" 
                                value={this.state.imageURL}
                                onChange={this.onInputChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group mb-3 col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"
                                value={this.state.overview}
                                onChange={this.onInputChange}></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
                </form>
            </div>
        )
    }
}


export default EditMovie;