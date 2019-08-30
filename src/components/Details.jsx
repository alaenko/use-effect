import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import loadingImg from '../loading1.gif';

function Details(props) {
  const [detailed, setDetailed] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (!props.info) return;
    setloading(true);
    try {
      fetch(process.env.REACT_APP_DETAILS_URL + props.info.id + '.json')
      .then(res => res.json())
      .then(data => {
        setDetailed(data)
      })
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }, [props.info]);
 
  return (
    <React.Fragment>
      {detailed && 
        <ul>
          <li>{loading ? <img src={loadingImg}/> : <img src={detailed.avatar}/>}</li>
          <li className="listItem name">{detailed.name}</li>
          <li className="listItem">City: {detailed.details.city}</li>
          <li className="listItem">Company: {detailed.details.company}</li>
          <li className="listItem">Position: {detailed.details.position}</li>
        </ul>
    }
    </React.Fragment>
    
  )
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}

export default Details

