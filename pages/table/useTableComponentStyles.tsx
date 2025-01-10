import { createStyles } from '@mantine/core';

const useTableComponentStyles = createStyles((theme) => ({
  // Table Styles
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    '& th, & td': {
      textAlign: 'left',
      padding: '16px',
      backgroundColor: '#ffffff',
      border: 'none',
    },
    '& th': {
      backgroundColor: '#d3d3d3',
      borderBottom: '2px solid #bbb',
    },
    '& td': {
      borderBottom: '1px solid #ddd',
    },
    '& th:nth-of-type(1), & th:nth-of-type(2), & th:nth-of-type(4), & th:nth-of-type(5), & th:nth-of-type(6), & th:nth-of-type(7)': {
      width: '150px',
    },
    '& th:nth-of-type(3), & td:nth-of-type(3)': {
      width: '450px',
    },
  },

  // Editable row styles
  editableRow: {
    backgroundColor: theme.colors.blue[0],
  },

  editText: {
    color: theme.colors.blue[6],
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.colors.blue[8],
    },
  },

  // Tag styles
  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    color: '#333',
    borderRadius: '4px',
    padding: '6px 10px',
    fontSize: '14px',
    position: 'relative',
    whiteSpace: 'nowrap',
  },

  // Dropdown styles
  dropdownButton: {
    marginLeft: '8px',
    padding: '0',
    border: 'none',
    background: 'none',
    color: '#333',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue[6],
    },
    // Rotate the icon when dropdown is open
    '&.dropdown-open': {
      transform: 'rotate(180deg)',
    },
  },
  dropdown: {
    position: 'absolute', // Ensure the dropdown is positioned absolutely
    top: 'calc(100% + 4px)', // Position it just below the tag
    left: 0,
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: 1000, // Ensure it is above other elements
    padding: '4px 0',
    maxHeight: '200px', // Fixed height for dropdown
    minWidth: '150px', // Minimum width of dropdown
    maxWidth: '100%', // Max width will be the parent container's width
    overflowY: 'auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  
  dropdownItem: {
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#333',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },

  // Input and tags container
  tagInputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow wrapping to the next line
    gap: '8px',
    padding: '8px',
    border: '2px solid #FFBF00',
    borderRadius: '4px',
    maxWidth: '600px', // Fixed max width for the container
    width: '100%',
    overflow: 'visible', // Allow dropdown to be visible
    wordBreak: 'break-word', // Break long words if necessary
    position: 'relative', // Ensure the dropdown is positioned relative to this container
  },
  

  // Tags wrapper
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },

  // Input field
  inputBox: {
    flex: 1, // Allow the input to grow but stay within parent bounds
    minWidth: '40px',
    maxWidth: '100%', // Prevent the input from exceeding the parent's width
    padding: '6px 1px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: 'transparent',
    boxSizing: 'border-box', // Include padding in width calculations
    wordBreak: 'break-word', // Break long text properly
  },

  // Input wrapper for input and preview span
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    gap: '8px',
    flexWrap: 'wrap', // Wrap content to the next line
  },

  // previewSpan: {
  //   fontSize: '14px',
  //   color: '#aaa', // Light gray color for the preview text
  //   pointerEvents: 'none', // Disable interaction with the preview
  //   whiteSpace: 'nowrap', // Prevent wrapping of the preview text
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  // },
  previewSpan: {
    position: 'absolute', // Position it absolutely inside the input container
    top: '50%', // Vertically align the preview to the center of the input
    left: '100%', // Place the preview span right after the input field
    transform: 'translateY(-50%)', // Adjust to center vertically
    fontSize: '14px',
    color: '#aaa', // Light gray color for the preview text
    pointerEvents: 'none', // Disable interaction with the preview
    whiteSpace: 'nowrap', // Prevent wrapping of the preview text
    minWidth: '40px', // Set a minimum width for the preview span
    maxWidth: '100%', // Make the preview span as wide as the available space
  },
}));

export default useTableComponentStyles;
