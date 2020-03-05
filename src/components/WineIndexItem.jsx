import React from 'react';

function WineIndexItem(props) {
  const {score, winery_full, wine_full, vintage, color, region} = props.wine;
  
  return (
    <tr onMouseEnter={() => props.selectWine(props.wine.id)} onMouseLeave={() => props.selectWine(null)} >
      <td>{score}</td>
      <td>{winery_full}</td>
      <td>{wine_full}</td>
      <td>{vintage}</td>
      <td>{color[0].toUpperCase() + color.slice(1)}</td>
      <td>{region}</td>
    </tr>
  )
}

export default WineIndexItem;