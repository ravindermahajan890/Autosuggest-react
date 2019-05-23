import React from 'react';
import Autosuggest from '../Autosuggest/Autosuggest';
import Suggestions from '../Suggestions/Suggestions'
import { CITIES } from '../../CITIES';
import '../App/App.css'

class App extends React.Component {
  state = {
    options: CITIES,
    selectedSuggestion: '',
    showList: false,
    key: '',
    cursor: 0
  };
  handleChange = (value) => {
    this.setState({
      selectedSuggestion: value,
      showList: true
    });
    this.filterOptions(value);
  };
  onSuggestionSelect = (value) => {
    this.setState({
      selectedSuggestion: value.label,
      showList: false,
      key: value.value,
      cursor: 0
    });
    this.filterOptions(value.label);
  }

  onInputFocus = () => {
    this.setState({ showList: true });
  }

  filterOptions = (value) => {
    let options;
    if (value.length > 0) {
      options = CITIES.filter((city) => {
        return city.label.toLowerCase().includes(value.toLowerCase());
      })
    } else if (value.length === 0) {
      options = CITIES;
    }
    this.setState({
      options
    });
  }
  navigateThroughKeys = (e) => {
    const { cursor, options } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (e.keyCode === 40 && cursor < options.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    } else if (e.keyCode === 13) {
      this.onSuggestionSelect(options[cursor])
    }
    if (document.querySelector('.active')) {
      document.querySelector('.active').scrollIntoView({ block: 'center' });
    }
  }


  render() {
    const { cursor, selectedSuggestion, options, key } = this.state;
    return (
      <section>
        <div className='wrapper'>
          <h2 className='text-center'>Autosuggest</h2>
          <Autosuggest onHandleChange={this.handleChange} selectedSuggestion={selectedSuggestion} onFocus={this.onInputFocus} onKeyDown={this.navigateThroughKeys}></Autosuggest>
          {this.state.showList ? <Suggestions suggestionList={options} onSuggestionClick={this.onSuggestionSelect} selectedSuggestionKey={key} cursor={cursor} /> : ''}
        </div>
      </section>
    );
  }
}

export default App;