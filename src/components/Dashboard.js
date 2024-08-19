import React, { useState } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget, addWidget } from '../redux/dashboardSlice';
import AddWidgetModal from './AddWidgetModal'; // Import AddWidgetModal directly

const Dashboard = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.dashboard.categories);
  const searchQuery = useSelector(state => state.dashboard.searchQuery.toLowerCase());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  const handleAddWidget = (widgetData) => {
    dispatch(addWidget({ categoryName: currentCategory, widget: widgetData }));
    setIsModalOpen(false);
  };

  const openAddWidgetModal = (categoryName) => {
    setCurrentCategory(categoryName);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="dashboard-section">
          <h3>{category.name}</h3>
          <div className="widgets-grid">
            {category.widgets
              .filter(widget =>
                widget.name.toLowerCase().includes(searchQuery) || 
                widget.content.toLowerCase().includes(searchQuery)
              )
              .map(widget => (
                <div key={widget.id} className="widget">
                  <button
                    className="remove-widget-btn"
                    onClick={() => handleRemoveWidget(category.name, widget.id)}
                  >
                    &times;
                  </button>
                  <h4>{widget.name}</h4>
                  <p>{widget.content}</p>
                </div>
              ))}
            <div className="widget add-widget-box">
              <button onClick={() => openAddWidgetModal(category.name)} className="add-widget-btn">
                <span>+</span> Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <AddWidgetModal
          onClose={() => setIsModalOpen(false)}
          onAddWidget={handleAddWidget}
        />
      )}
    </div>
  );
};

export default Dashboard;
