import React, { Component } from 'react'

export default class Search extends Component {
    render() {

        const { handleInputChange, handleInputSubmit, value } = this.props
        return (
            <div>

                <form className='text-center row' onSubmit={handleInputSubmit}>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="search" className='text-center'>Type ingredients separated by coma.</label>
                        <div className='input-group'>
                            <input onChange={handleInputChange} value={value} type="search" className="form-control" id="search" placeholder="potato, onion, tomato..." />
                            <div className="input-group-append">
                                <button type='submit' className='input-group-text bg-primary text-white'><i className='fas fa-search'></i></button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        )
    }
}
