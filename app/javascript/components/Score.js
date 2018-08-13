import React, { Component } from "react"

class Score extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { data } = this.props;
    this.updateCanvas(data);
  }

  updateCanvas(scoreData) {
      const { score, color } = scoreData;
      if(this.refs.canvas != null){
          const ctx = this.refs.canvas.getContext('2d');
          ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

          ctx.fillStyle=color;
          if(score > 0){
              ctx.fillRect(100, 10, score, 10);
          } else {
              ctx.fillRect(100+score, 10, -score, 10);
          }

          ctx.fillStyle="#555";
          ctx.fillRect(100, 0, 2, 30);
      }
  }

  render () {
      const { data } = this.props;
      this.updateCanvas(data);
      return (
          <div>
              <div>your score:</div>
              <h2>{data.score}</h2>
              <canvas ref="canvas" width={200} height={30}/>
          </div>
      );
  }
}

export default Score
