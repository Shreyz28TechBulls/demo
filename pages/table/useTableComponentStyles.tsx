import { createStyles } from '@mantine/core';

const useTableComponentStyles = createStyles((theme) => ({
  // Styles for TableComponent
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    '& th, & td': {
      textAlign: 'center',
      padding: '12px',
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
  editText: {
    color: theme.colors.blue[6],
    cursor: 'pointer',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.colors.blue[8],
    },
  },
  editableRow: {
    backgroundColor: '#e9f5ff',
  },

  // Styles for Tags component
  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: '16px',
    padding: '4px 8px',
    fontSize: '14px',
    color: '#333',
    whiteSpace: 'nowrap',
  },
  tagLabel: {
    marginRight: '8px',
  },
  removeButton: {
    border: 'none',
    background: 'none',
    color: theme.colors.red[6],
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.red[8],
    },
  },

  // Styles for TagsHorizontalScrollableInputField
  tagInputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
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
  },
}));

export default useTableComponentStyles;
