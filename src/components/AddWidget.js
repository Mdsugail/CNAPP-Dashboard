import React, { useState } from 'react';
import AddWidgetModal from './AddWidgetModal';
import './AddWidget.css';

const AddWidget = ({ categories, onAddWidget }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddWidget = (widgetData) => {
    onAddWidget(widgetData); // Pass the widgetData to the parent handler
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="add-widget-btn">
        <span>+</span> Add Widget
      </button>
      {isModalOpen && (
        <AddWidgetModal
          categories={categories}
          onClose={handleCloseModal}
          onAddWidget={handleAddWidget}
        />
      )}
    </div>
  );
};

export default AddWidget;
