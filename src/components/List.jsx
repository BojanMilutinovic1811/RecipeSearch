import React, { Component } from 'react'
import Recipe from './Recipe'
import Search from './Search'

export default class List extends Component {
    render() {
        const { recipes, handleDetails, handleInputChange, handleInputSubmit, value, error } = this.props
        return (
            <div>
                <h1 className='text-center my-3'>Search for recipe with food2fork</h1>
                <Search handleInputChange={handleInputChange} value={value} handleInputSubmit={handleInputSubmit} />
                <h3>Recipes List</h3>
                <div className="row">

                    {recipes.length === 0 ? <h3>{error}</h3> :
                        recipes.map(singleRecipe => {
                            return <Recipe handleDetails={handleDetails} key={singleRecipe.recipe_id} recipe={singleRecipe} />
                        })
                    }

                </div>

            </div>
        )
    }
}
