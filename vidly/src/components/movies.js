import React, { Component } from 'react';
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



class Movie extends Component {
    state = { movies: getMovies() }

    renderMovieMessage = () => {
        const {length : count} = this.state.movies;
        if (count)
            return <h1>There are {count} Movies</h1>
        else
            return <h1>There are no movies</h1>
    }

    renderMovieTable = () => {
        if (this.state.movies.length)
            return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMovieEntries()}
                    </tbody>
                </Table>
            )
         
    }

    handleDelete = (movie) => {
        console.log(movie);
        deleteMovie(movie._id);
        this.setState({movies:getMovies()})

    }
    renderMovieEntries = () => {
    
        return this.state.movies.map(movie =>
            <tr key={movie._id}>
                <td>{movie.title}</td> 
                <td>{movie.genre.name}</td> 
                <td>{movie.numberInStock}</td> 
                <td>{movie.dailyRentalRate}</td> 
                <td><Button variant="danger" size="sm" onClick={ () => this.handleDelete(movie)}>Delete</Button>{' '}</td>
            </tr>);
    }

    render() {

        console.log(this.state);
        return (
            <React.Fragment>
                {this.renderMovieMessage()}
                {this.renderMovieTable()}
            </React.Fragment>
        )
    }
}

export default Movie;