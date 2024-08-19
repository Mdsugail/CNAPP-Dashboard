import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Accounts", content: "Some random text for Cloud Accounts" },
        { id: 5, name: "Default CSPM Widget", content: "This is a default widget for CSPM Executive Dashboard" } // Default widget
      ]
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        { id: 2, name: "Top 5 Specific Name Alert", content: "Some random text for Cloud Accounts" },
        { id: 6, name: "Default CWPP Widget", content: "This is a default widget for CWPP Dashboard" } // Default widget
      ]
    },
    {
      name: "Registry Scan",
      widgets: [
        { id: 3, name: "Image Risk Assessments", content: "Some random text for Cloud Accounts" },
        { id: 7, name: "Default Registry Scan Widget", content: "This is a default widget for Registry Scan" } // Default widget
      ]
    },
    {
      name: "Ticket Security",
      widgets: [
        { id: 4, name: "Ticket Accounts", content: "Some random text for Cloud Accounts" },
        { id: 8, name: "Default Ticket Security Widget", content: "This is a default widget for Ticket Security" } // Default widget
      ]
    }
  ],
  searchQuery: ""
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets.push({
          ...widget,
          id: Date.now(), // Assign a unique ID to the new widget
        });
      } else {
        console.error(`Category ${categoryName} not found!`);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchQuery: (state, action) => { // New reducer to set the search query
      state.searchQuery = action.payload;
    }
  }
});

export const { addWidget, removeWidget, setSearchQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;