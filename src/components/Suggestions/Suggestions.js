import React from 'react';
import '../Suggestions/Suggestions.css'

const Suggestions = (props) => {
    return (
        <div className='suggestion-list'>
            <ul>
                {props.suggestionList && props.suggestionList.map((suggestion, index) => {
                    const selected = props.selectedSuggestionKey === suggestion.value ? 'selected' : '';
                    const active = props.cursor === index ? 'active' : '';
                    return <li key={suggestion.value}  className={selected || active} onClick={() => props.onSuggestionClick(suggestion)}>{suggestion.label}</li>
                })}
            </ul>
        </div>
    )
}

export default Suggestions;