
import './NavBar.css';
import { Search, Settings, CircleUser, Menu } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import React, { useState } from 'react';


function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMenuClick = () => setShowDropdown((v) => !v);

  return (
    <>
      <div className="navbar">
        <div id="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1>API Project</h1>
            <DropdownMenu
              options={["Profile", "Settings", "Logout"]}
              onSelect={(option) => {
                setShowDropdown(false);
                // handle option select here
                alert(`Selected: ${option}`);
              }}
            />
        </div>
        <div id='nav-right'>
          <Search className="nav-items" />
          <Settings className="nav-items" />
          <CircleUser className="nav-items" />
        </div>
      </div>
    </>
  );
}

export default NavBar
