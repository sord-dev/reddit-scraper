import React, { Component } from "react";
import { Container } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import axios from "axios";

// https://github.com/harvardartmuseums/api-docs

const Image = (props) => {
  return (
    <a href={props.src}>
      <img alt={props.alt} src={props.thumbnail} />
    </a>
  );
};

class App extends Component {
  state = {
    phrase: "",
    images: null,
  };

  onFormSubmit = (e, searchterm) => {
    e.preventDefault();
    console.log(`search phrase: ${searchterm}`);
    this.setState({ phrase: searchterm });
  };

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://meme-api.herokuapp.com/gimme/25",
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({images: response.data.memes});
        console.log(response)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Container maxW="container.lg" mt="10px">
          <Searchbar size="lg" onFormSubmit={this.onFormSubmit} />

          {this.state.images && this.state.images.map((img) => {
            return (
              <Image thumbnail={img.url} alt={`${img.author}'s image`} src={img.postLink} />
            )
          })}

          
        </Container>
      </div>
    );
  }
}

export default App;
