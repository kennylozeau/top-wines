import React from 'react';

function TastingNotes(props) {

  let tastingNotes = "Loading tasting notes...";

  if (!props.loading) {
    tastingNotes = props.notes;
  }

  return (
    <div className="tasting-notes">
      <h2>Tasting Notes</h2>
      {tastingNotes}
    </div>
  )
}

export default TastingNotes;