import { createStyles } from '@mantine/core';

const useTableComponentStyles = createStyles((theme) => ({
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
  },

  tagInputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
    border: '2px solid #FFBF00',
    borderRadius: '4px',
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
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: 'transparent',
    transition: 'border-color 0.2s ease-in-out',
    '&:focus': {
      borderColor: '#FFD700',
    },
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },

  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    background: '#f7f7f7',
    border: '1px solid #ccc',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    zIndex: 1000,
    padding: '4px 0',
    maxHeight: '200px',
    overflowY: 'auto',
  },

  dropdownItem: {
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#333',
    backgroundColor: '#f7f7f7',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },

  // New styles for input field and preview span
  inputBox: {
    flex: 1,
    padding: '6px 8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    outline: 'none',
    backgroundColor: 'transparent',
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    gap: '8px',
  },

  previewSpan: {
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '14px',
    color: '#aaa', // Light gray color for preview
    pointerEvents: 'none', // Make sure it doesn’t interfere with typing
    whiteSpace: 'nowrap', // Prevent wrapping
  },
}));

export default useTableComponentStyles;
