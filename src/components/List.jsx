import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const {items, handleClick} = props;

  return (
    <ul>
      {items.map(o => <li className="listItem" key={o.id} onClick={() => handleClick(o)}>{o.name}</li>)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  handleClick: PropTypes.func.isRequired
}

export default List

