import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AddWidgetModal.css';
import { removeWidget } from '../redux/dashboardSlice';

const AddWidgetModal = ({ categories, onClose, onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories && categories.length > 0 ? categories[0] : '');

  const dispatch = useDispatch();
  const categoryWidgets = useSelector(state => {
    const category = state.dashboard.categories.find(cat => cat.name === selectedCategory);
    return category ? category.widgets : [];
  });

  const handleAddWidget = () => {
    if (widgetName && widgetContent) {
      onAddWidget({
        name: widgetName,
        content: widgetContent,
        category: selectedCategory
      });
      onClose();
    }
  };

  const handleUncheckWidget = (widgetId) => {
    dispatch(removeWidget({ categoryName: selectedCategory, widgetId }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add or Remove Widget</h3>
        <div className="form-group">
          <label>Widget Name</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Widget Content</label>
          <input
            type="text"
            value={widgetContent}
            onChange={(e) => setWidgetContent(e.target.value)}
          />
        </div>
        {categories && (
          <div className="form-group">
            <label>Select Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-group">
          <label>Current Widgets in {selectedCategory}</label>
          {categoryWidgets.map(widget => (
            <div key={widget.id}>
              <input
                type="checkbox"
                checked={false} // unchecked by default
                onChange={() => handleUncheckWidget(widget.id)}
              />
              <span>{widget.name}</span>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-confirm" onClick={handleAddWidget}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
