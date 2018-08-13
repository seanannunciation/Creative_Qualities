import React, { Component } from "react"
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      qualData: window.qualsJSON,
      sortCriteria: ''
    }
  }

  sortBy = (criteria) => {
      const { qualData, sortCriteria } = this.state;

      if(sortCriteria === criteria) {
          this.setState({
            qualData: qualData.reverse()
          });
      } else {
          qualData.sort((a,b) => (a[criteria] > b[criteria]));
          this.setState({
              sortCriteria: criteria
          });
      }
  };

  render () {
    const { qualData } = this.state;
    const cardsHolder = qualData.map((data, index) => {
      return <Card key={index} data={data} />
    });

    return (
      <div className="row">
        <div className="row">
            <div className="col-md-12">
                <div className="sort-buttons pull-right">
                    Sort:
                    <input onClick={() => this.sortBy("name")} type="button" value="Name"/>
                    <input onClick={() => this.sortBy("score")} type="button" value="Score"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {cardsHolder}
            </div>
        </div>
      </div>
    )
  }
}

export default App
