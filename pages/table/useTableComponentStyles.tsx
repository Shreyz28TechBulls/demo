import { createStyles } from '@mantine/core';

const useTableComponentStyles = createStyles((theme) => ({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    '& th, & td': {
      textAlign: 'left', // Align text to the left
      padding: '16px', // Increased padding for slightly larger row height
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

  editableRow: {
    backgroundColor: theme.colors.blue[0], // Light blue background for editable rows
  },

  editText: {
    color: theme.colors.blue[6], // Primary blue color for the "Edit" text
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.colors.blue[8], // Darker blue on hover
    },
  },

  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e6e6e6', // Light gray background for the tag
    color: '#333', // Dark text for better contrast
    borderRadius: '4px', // Slightly rounded corners
    padding: '6px 10px', // Adjust padding for a balanced appearance
    fontSize: '14px',
    position: 'relative',
    whiteSpace: 'nowrap',
  },

  dropdownButton: {
    marginLeft: '8px', // Add spacing between the label and button
    padding: '0', // Remove padding for no shape
    border: 'none', // Remove any border
    background: 'none', // No background
    color: '#333', // Standard text color
    fontSize: '14px', // Standard font size
    cursor: 'pointer', // Keep it clickable
    '&:hover': {
      color: theme.colors.blue[6], // Slightly change color on hover for feedback
    },
  },

  tagInputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
    border: '2px solid #FFBF00',  /* Set border color to yellow */
    borderRadius: '4px',          /* Slightly rounded corners */
    maxWidth: '600px',
  },
  
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  input: {
    flex: 1,
    minWidth: '120px',
    padding: '6px 8px',
    border: 'none', // Default border color
    outline: 'none',
    fontSize: '14px',
    backgroundColor: 'transparent',
    transition: 'border-color 0.2s ease-in-out', // Smooth transition for border color
    '&:focus': {
      borderColor: '#FFD700', // Yellow border when focused
    },
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  dropdown: {
    position: "absolute",
    top: "calc(100% + 4px)", // Positioned right below the tag
    left: 0,
    background: "#f7f7f7", // Light gray background
    border: "1px solid #ccc", // Subtle border
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Visible shadow for contrast
    borderRadius: "4px", // Slightly rounded corners
    zIndex: 1000, // Ensure visibility
    padding: "4px 0",
    maxHeight: "200px", // Restrict max height
    overflowY: "auto", // Enable scrolling for long lists
  },
  dropdownItem: {
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#333", // Text color
    backgroundColor: "#f7f7f7", // Matches dropdown background
    "&:hover": {
      backgroundColor: "#e0e0e0", // Slightly darker gray on hover
    },
  },
}));

export default useTableComponentStyles;


