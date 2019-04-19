import React, { Component } from 'react'
// import { recipe } from '../tempDetails'
export default class Details extends Component {

    state = {
        recipe: null
    }

    async componentDidMount() {
        const url = `https://www.food2fork.com/api/get?key=994c234aa2eb53f1f94d9f6c2d0ef1ac&rId=${this.props.details_id}`
        const data = await fetch(url)
        const jsonData = await data.json()
        this.setState({
            recipe: jsonData.recipe
        })
    }



    render() {
        const { handleIndex } = this.props
        if (this.state.recipe) {
            return (
                <div className='mt-3'>
                    <div className="row">
                        <div className="col-md-6">
                            <div onClick={() => handleIndex(0)} className="btn btn-warning mb-2">Back to recipes</div>
                            <img className='d-block w-100' src={this.state.recipe.image_url} alt="Dish" />
                        </div>
                        <div className="col-md-6">
                            <h3>{this.state.recipe.title}</h3>
                            <p>Published by: {this.state.recipe.publisher}</p>
                            <div className="btn btn-success mr-3">Publisher Webpage</div>
                            <div className="btn btn-success">Recipe URL</div>
                            <ul className='list-group mt-2'>

                                {
                                    this.state.recipe.ingredients.map((ingredient, index) => {
                                        return (
                                            <li className='list-group-item' key={index}>{ingredient}</li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            )
        }
        return null

    }
}
