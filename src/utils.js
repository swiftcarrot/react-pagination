export range from 'lodash/range';

export const makeStyles = customStyles => {
  const { primaryColor } = { ...defaultStyles, ...customStyles };

  return {
    item: { ...styles.item, color: primaryColor },
    itemActive: {
      ...styles.itemActive,
      backgroundColor: primaryColor,
      borderColor: primaryColor
    },
    itemFirst: styles.itemFirst,
    itemLast: styles.itemLast,
    itemDisabled: styles.itemDisabled
  };
};

export const defaultStyles = {
  primaryColor: '#5e72e4'
};

export const styles = {
  item: {
    position: 'relative',
    display: 'block',
    padding: '6px 8px',
    marginLeft: -1,
    lineHeight: 1.25,
    backgroundColor: '#fff',
    border: '1px solid #dee2e6',
    cursor: 'pointer'
  },

  itemActive: {
    display: 'inline-block',
    zIndex: 1,
    color: '#fff'
  },

  itemFirst: {
    marginLeft: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },

  itemLast: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },

  itemDisabled: {
    color: '#6c757d',
    pointerEvents: 'none',
    cursor: 'auto',
    backgroundColor: '#fff',
    borderColor: '#dee2e6'
  }
};
