import React from 'react';

const Autosuggest = props => {
  return (
    <input type='text'
      onChange={(e) => { props.onHandleChange(e.target.value) }}
      value={props.selectedSuggestion}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown} />
  );

}

export default Autosuggest;