import React, { Component } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import CustomImage from "./components/Image";



class App extends Component {
  state = {
    phrase: "",
    images: null,
  };

  onFormSubmit = (e, searchterm) => {
    e.preventDefault();
    console.log(`search phrase: ${searchterm}`);
    this.setState({ phrase: searchterm });

    const options = {
      method: "GET",
      url: `https://meme-api.herokuapp.com/gimme/${searchterm}/25`,
    };
    
    axios
      .request(options)
      .then((response) => {
        this.setState({ images: null });
        this.setState({ images: response.data.memes });
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://meme-api.herokuapp.com/gimme/25",
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({ images: response.data.memes });
        console.log(response);
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

          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)' , 'repeat(3, 1fr)']} gap={7} mt='10px' p={2} justifyContent='center' alignItems='center'>
            {this.state.images &&
              this.state.images.map((img) => {
                return (
                  <CustomImage
                    thumbnail={img.url}
                    alt={`${img.author}'s image`}
                    src={img.postLink}
                  />
                );
              })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
