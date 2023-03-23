import React, { useState } from 'react';

import styled from '@emotion/styled'

function DropdownList() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // EStilos usanto @emotion/styled

  const StyledSelect = styled.select`
  background-color: #4e1111;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  height: 40px;
  padding: 0 10px;
  width: 150px;
  margin-top: 15px;
  font-family: 'Barlow', sans-serif;

  &:focus {
    outline: none;
    border-color: #b50000;
    box-shadow: 0 0 5px rgba(102,175,233,.5);
  }
`;

  return (
    <div>
      <StyledSelect value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
        <option value="option 4">option 4</option>
      </StyledSelect>
      <p>You are selected the: {selectedOption}</p>
    </div>
  );
}

export default DropdownList;
