import React from 'react';
import WineIndexItem from './WineIndexItem';

function WineIndex(props) {
  const wineList = props.wines.map(wine => {
    return <WineIndexItem key={wine.id} wine={wine} selectWine={props.selectWine}/>
  });

  return (
    <table className="wine-list">
      <tbody>
        <tr>
          <td>Score</td>
          <td>Winery</td>
          <td>Wine</td>
          <td>Vintage</td>
          <td>Color</td>
          <td>Region</td>
        </tr>
        {wineList}
      </tbody>
    </table>
  )
}

export default WineIndex;