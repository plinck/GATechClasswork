import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        images: [],
        breed: ""
    };
  }

  componentDidMount() {
      // Call node to scrape
  }

  searchDogs = (e) => {
    e.preventDefault();

    axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
    .then(res => {
      const images = [...res.data.message];
      this.setState({ images: images });
    })
    .catch(err => {
        console.error(err); 
    });

    this.setState({breed: ""});
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }


  render() {
    let images = this.state.images.map(image => {
      return  <img className="img-responsive" alt="dog" src={image}>
      </img>
    })
    return (
      <div>
        <h1>Search Page</h1>
        <form>
          <div className="row">
                <input onChange={this.handleChange} id="breed" name="breed" type="text" value={this.state.breed} />
          </div>
          <button onClick={this.searchDogs}>Search</button>

        </form>
        <br></br>
        {images}
      </div>
    );
  }
}

export default Search;
