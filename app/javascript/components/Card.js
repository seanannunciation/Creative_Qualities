import React, { Component } from "react"
import Score from "./Score";
import Description from "./Description";


class Card extends Component {
    render () {
        const { data } = this.props;
        const colorBackground = "color-"+data.color.substr(1)+"--background";
        const card = "card color-"+data.color.substr(1)+"--border";
        const imgSrc = "https://raw.githubusercontent.com/ideo/c-delta-challenge/master/app/assets/images/qualityIcons/"+data.name.toLowerCase()+".png";

        return (
            <div className="col-md-4">
                <div className={card}>
                    <h3 className={colorBackground}>{data.name}</h3>
                    <img src={imgSrc} />
                    <Score data={data} />
                    <Description description={data.description}/>
                </div>
            </div>
        )
    }
}

export default Card
