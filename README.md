# README

[Top 100 Wines Live Site](https://kennylozeau.github.io/top-wines)

Top 100 Wines is a single-page React web app which allows users to read tasting notes for a list of the top wines of 2018. The wines are listed based on rank, displaying relevant details for each wine. When a user places their cursor over a wine in the list, that specific wine's tasting notes will be fetched from a server and displayed alongside the wine list. These server requests have been debounced in order to limit the rate of requests being sent, also comfortably allowing the user to scroll down the list with their cursor hovered.

When the user first visits the site, the `TopWines` component is mounted, initiating an Axios request to fetch the list of top 100 wines and storing the requested data in the component's state (note that a CORS proxy is being used here):

```javascript
// /src/components/TopWines.jsx
componentDidMount() {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2018.json'
    }).then(response => {
        this.setState({wines: response.data});
      });
  }
```

The `TopWines` component renders a `WineIndex` component, passing the fetched wine data and the `selectWine` method as props, while also conditionally rendering a `TastingNotes` component:

```javascript
// /src/components/TopWines.jsx
render() {
  return (
    <>
      <div className="header">
        <h1>Top 100 Wines</h1>
        <h3>Below and to the left is a 2018 list of the top 100 wines, listed by ranking.
          Hovering over a wine in the list will display relevant tasting notes.</h3>
      </div>
      <div className="top-wines">
        <WineIndex wines={this.state.wines} selectWine={this.selectWine} />
        {this.state.selectedWineId &&
          <TastingNotes
            id={this.state.selectedWineId}
            loading={this.state.loading}
            notes={this.state.notes} />}
      </div>
    </>
  )
}
```

The `WineIndex` component simply iterates through the passed wine data and maps the data for each individual wine into a `WineIndexItem` component, continuing to pass the data and `selectWine` method as props:

```javascript
// /src/components/WineIndex.jsx
function WineIndex(props) {
  const wineList = props.wines.map(wine => {
    return <WineIndexItem key={wine.id} wine={wine} selectWine={props.selectWine} />
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
```

Each rendered `WineIndexItem` component is implemented with `onMouseEnter` and `onMouseLeave` event handlers, which call the `selectWine` method with a wine's id or `null`, respectively:

```javascript
// /src/components/WineIndexItem.jsx
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
```

Once invoked, the `selectWine` method from the `TopWines` component first stores the `selectedWineId` in the component's state, while also setting `loading` to `true`. If the method was invoked with a wine id, then an Axios request is sent to fetch the associated tasting notes, resulting in the tasting notes and updated loading status being asyncronously set to the component state:

```javascript
// /src/components/TopWines.jsx
selectWine(selectedWineId) {
    this.setState({
      loading: true,
      selectedWineId
    });

    if (selectedWineId) {
      axios({
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${selectedWineId}.json`
      }).then(response => {
        this.setState({
          loading: false,
          notes: response.data.note
        })
      });
    };
  }
```

With all aspects of the `TopWines` component's state now properly updated, the tasting notes can be conditionally rendered.

## Technologies Used
* React
* HTML
* CSS
* Webpack
* Hosted on GitHub Pages