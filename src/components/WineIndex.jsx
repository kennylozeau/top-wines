import React from 'react';
import WineIndexItem from './WineIndexItem';

function WineIndex(props) {
  const wineList = props.wines.map(wine => {
    return <WineIndexItem key={wine.id} wine={wine} />
  });

  return (
    <ul>
      {wineList}
    </ul>
  )
}

export default WineIndex;