import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import AddWidget from './AddWidget';
import { useDispatch } from 'react-redux';
import { addWidget, setSearchQuery } from '../redux/dashboardSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categories = ['CSPM Executive Dashboard', 'CWPP Dashboard', 'Registry Scan', 'Ticket Security'];

  const handleAddWidget = (widgetData) => {
    dispatch(addWidget({ categoryName: widgetData.category, widget: widgetData }));
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  // Determine if we are on the Home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar" style={{ backgroundColor: isHomePage ? '#F0F0F0' : '#ffffff' }}>
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard V2</Link>
      </div>
      {/* Conditionally render navbar-center and navbar-right */}
      {!isHomePage && (
        <>
          <div className="navbar-center">
            <input
              type="text"
              placeholder="Search anything..."
              onChange={handleSearchChange}
            />
          </div>
          <div className="navbar-right">
            <AddWidget categories={categories} onAddWidget={handleAddWidget} />
            <select className="date-range-btn">
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last 365 days</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
