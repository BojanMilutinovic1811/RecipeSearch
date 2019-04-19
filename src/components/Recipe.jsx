import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const { image_url, publisher, title, recipe_id, source_url } = this.props.recipe
        const { handleDetails } = this.props
        return (
            <div className='col-10 col-md-3 col-lg-4'>
                <div className="card">
                    <img className="card-img-top" src={image_url} alt="Dish" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Provided By: {publisher}</p>
                        <div onClick={() => handleDetails(1, recipe_id)} className="btn btn-success mr-3">Details</div>
                        <a href={source_url} className="btn btn-warning">Source Page</a>
                    </div>
                </div>
            </div>
        )
    }
}
