import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';
// import { recipes } from './tempList'
class App extends Component {

  state = {
    recipes: [],
    url: 'https://www.food2fork.com/api/search?key=994c234aa2eb53f1f94d9f6c2d0ef1ac',
    urlbase: 'https://www.food2fork.com/api/search?key=994c234aa2eb53f1f94d9f6c2d0ef1ac',
    details_id: 35383,
    page_index: 0,
    searchInput: '',
    error: ''
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleInputSubmit = (e) => {
    e.preventDefault()
    const base = this.state.urlbase
    const ingredient = this.state.searchInput
    console.log(base + '&q=' + ingredient);
    this.setState({ url: base + '&q=' + ingredient, searchInput: '' }, () => {
      this.getRecipes()
      this.displayPage()
      console.log(this.state);
    })
  }

  async getRecipes() {
    const data = await fetch(this.state.url)
    const jsonData = await data.json()
    if (jsonData.recipes.length < 1) {
      this.setState({ error: 'There are no recipes with that ingredient.' })
    }
    this.setState({
      recipes: jsonData.recipes
    })
  }

  componentDidMount() {
    this.getRecipes()
  }

  handleIndex = (index) => {
    this.setState({
      page_index: index
    })
  }

  handleDetails = (index, details_id) => {
    this.setState({
      page_index: index,
      details_id: details_id
    })
  }

  displayPage() {
    console.log('displaying page');
    switch (this.state.page_index) {
      case 0:
        return <List handleInputChange={this.handleInputChange} handleDetails={this.handleDetails} recipes={this.state.recipes} handleInputSubmit={this.handleInputSubmit} value={this.state.searchInput} error={this.state.error} />
      case 1:
        return <Details details_id={this.state.details_id} handleIndex={this.handleIndex} />
      default:
        return <List handleDetails={this.handleDetails} recipes={this.state.recipes} />
    }
  }

  render() {
    return (
      <div className="App container">
        {
          this.displayPage()
        }
      </div>
    );
  }
}

export default App;
