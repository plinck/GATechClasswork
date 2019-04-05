import React from "react";
import axios from "axios";

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        image: "",
        thumbsUp: 0,
        thumbsDn: 0
    };
  }

  componentDidMount() {
      // Call node to scrape
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        const image = res.data.message;
        this.setState({ image: image });
      })
      .catch(err => {
          console.error(err); 
      });
  }

  thumbsDn = () => {
    let thumbsDn = this.state.thumbsDn + 1;
    this.setState({ thumbsDn: thumbsDn })
  }

  thumbsUp = () => {
    let thumbsUp = this.state.thumbsUp + 1;
    this.setState({ thumbsUp: thumbsUp })
  }


  render() {
    return (
      <div>
        <h1>Dog Page</h1>
        <img className="img-responsive" alt="dog" src={this.state.image}></img>
        <br></br>
        <button onClick={this.thumbsUp}>thumbs up</button>
        <button onClick={this.thumbsDn}>thumbs dn</button>
        <p>Thumbs Up: {this.state.thumbsUp}</p>
        <p>Thumbs Dn: {this.state.thumbsDn}</p>
      </div>
    );
  }
}

export default Discover;
