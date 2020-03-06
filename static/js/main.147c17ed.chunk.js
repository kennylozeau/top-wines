(this["webpackJsonptop-wines"]=this["webpackJsonptop-wines"]||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(13),s=n.n(i),r=(n(24),n(14)),o=n(15),c=n(17),u=n(16),m=n(2),d=n(18),h=n(3),f=n.n(h);n(42);var p=function(e){var t=e.wine,n=t.score,a=t.winery_full,i=t.wine_full,s=t.vintage,r=t.color,o=t.region;return l.a.createElement("tr",{onMouseEnter:function(){return e.selectWine(e.wine.id)},onMouseLeave:function(){return e.selectWine(null)}},l.a.createElement("td",null,n),l.a.createElement("td",null,a),l.a.createElement("td",null,i),l.a.createElement("td",null,s),l.a.createElement("td",null,r[0].toUpperCase()+r.slice(1)),l.a.createElement("td",null,o))};var E=function(e){var t=e.wines.map((function(t){return l.a.createElement(p,{key:t.id,wine:t,selectWine:e.selectWine})}));return l.a.createElement("table",{className:"wine-list"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"column-headers"},l.a.createElement("td",null,"Score"),l.a.createElement("td",null,"Winery"),l.a.createElement("td",null,"Wine"),l.a.createElement("td",null,"Vintage"),l.a.createElement("td",null,"Color"),l.a.createElement("td",null,"Region")),t))};var v=function(e){var t="Loading tasting notes...";return e.loading||(t=e.notes),l.a.createElement("div",{className:"tasting-notes"},l.a.createElement("h2",null,"Tasting Notes"),t)};var w=function(e,t){var n;return function(){for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];var s=function(){n=null,e.apply(void 0,l)};clearTimeout(n),n=setTimeout(s,t)}},g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={wines:[],selectedWineId:null,loading:!1,notes:""},n.selectWine=n.selectWine.bind(Object(m.a)(n)),n.fetchNotes=w(n.fetchNotes.bind(Object(m.a)(n)),500),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"fetchNotes",value:function(e){var t=this;f()({method:"get",url:"https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/".concat(e,".json")}).then((function(e){t.setState({loading:!1,notes:e.data.note})}))}},{key:"selectWine",value:function(e){this.setState({loading:!0,selectedWineId:e}),e&&this.fetchNotes(e)}},{key:"componentDidMount",value:function(){var e=this;f()({method:"get",url:"https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2018.json"}).then((function(t){e.setState({wines:t.data})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Top 100 Wines"),l.a.createElement("h3",null,"Below and to the left is a 2018 list of the top 100 wines, listed by ranking. Hovering over a wine in the list will display relevant tasting notes.")),l.a.createElement("div",{className:"top-wines"},l.a.createElement(E,{wines:this.state.wines,selectWine:this.selectWine}),this.state.selectedWineId&&l.a.createElement(v,{id:this.state.selectedWineId,loading:this.state.loading,notes:this.state.notes})))}}]),t}(l.a.Component);var W=function(){return l.a.createElement(g,null)};s.a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.147c17ed.chunk.js.map