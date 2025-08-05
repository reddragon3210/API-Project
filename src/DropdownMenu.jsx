
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import './DropdownMenu.css'; 

export default function DropdownMenu({ options = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Menu onClick={toggleDropdown} style={{ padding: '10px', cursor: 'pointer' }}/>
        
      {isOpen && (
        <ul 
          className='dropdown-menu'>
          {options.length > 0
            ? options.map((option, idx) => (
                <li
                  key={idx}
                  className= 'dropdown-item'
                  onClick={() => {
                    if (onSelect) onSelect(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))
            : [1, 2, 3].map((num) => (
                <li key={num} style={{ padding: '5px 0' }}>Option {num}</li>
            ))}
        </ul>
      )}
    </div>
  );
}