import React from 'react';

function WineIndexItem(props) {
  return (
    <tr onMouseEnter={() => props.selectWine(props.wine.id)} onMouseLeave={() => props.selectWine(null)} >
      <td>{props.wine.score}</td>
      <td>{props.wine.winery_full}</td>
      <td>{props.wine.wine_full}</td>
      <td>{props.wine.vintage}</td>
      <td>{props.wine.color}</td>
      <td>{props.wine.region}</td>
    </tr>
  )
}

export default WineIndexItem;