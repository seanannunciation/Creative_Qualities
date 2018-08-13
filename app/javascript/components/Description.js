import React, { Component } from "react"

class Description extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isExpanded: false
      }
    }

    //truncate text to 120 chars

    truncate(text, limit) {
        return text.slice(0, limit)+"...";
    };

    toggleView(){
        const isExpanded = this.state.isExpanded;
        this.setState({
            isExpanded: !isExpanded
        });
    }

    render () {
        const { description } = this.props;
        const { isExpanded } = this.state;


        if(description == null) {
            return null;
        }

        //check description and truncate if isExpanded is false
        const descriptionBody = isExpanded ? <p>{description}</p> : <p>{this.truncate(description, 120)}</p>

        return <div>
            {descriptionBody}
            <a onClick={() => this.toggleView()}>View {isExpanded ? "less" : "more"}</a>
        </div>
    }
}

export default Description
