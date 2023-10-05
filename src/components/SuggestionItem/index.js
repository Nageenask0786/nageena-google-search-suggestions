import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionText} = props
  const {suggestion} = suggestionDetails

  const OnEnterText = () => {
    suggestionText(suggestion)
  }

  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button className="button" type="button" onClick={OnEnterText}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
