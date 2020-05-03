import React from "react";

class News extends React.Components {
    render() {
        return <h1 > News, { this.props.name } < /h1>;
    }
}

export default News;