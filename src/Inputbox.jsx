import React, { useState } from 'react';
import './InputBox.css'; 

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(['tomato', 'tom cruise','tetul', 'technology']);
  const [highlightedWord, setHighlightedWord] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue.toLowerCase().includes('t')) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }

    
    const wordToHighlight = 'tomato';
    const lowerCaseValue = newValue.toLowerCase();
    if (lowerCaseValue.includes(wordToHighlight)) {
      setHighlightedWord(wordToHighlight);
    } else {
      setHighlightedWord('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>
      <div className="input-container">
        <textarea
          rows={1}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here"
          className="input-box"
        />
        {showSuggestions && (
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <div className="highlighted-text">
          {inputValue.split(' ').map((word, index) => (
            <span
              key={index}
              style={{ color: word.toLowerCase() === 'tomato' ? 'red' : 'black' }}
            >
              {word}{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputBox;