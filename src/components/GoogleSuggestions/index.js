import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeOfSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestionText = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const SearchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card">
          <div className="flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon"
            />

            <input
              type="search"
              placeholder="Google Search"
              value={searchInput}
              onChange={this.onChangeOfSearchInput}
            />
          </div>
          <ul className="suggestions">
            {SearchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                suggestionText={this.suggestionText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
