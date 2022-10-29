import react, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        const { title, imgUrl, description, url } = this.props;
        return (
            <div className="my-2">
                <div className="card" >
                    <img src={!imgUrl ? "https://assets.reedpopcdn.com/mystic-leap.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/mystic-leap.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{`By ${!this.props.author ? "Unknown" : this.props.author} on ${this.props.time}`}</small></p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}
