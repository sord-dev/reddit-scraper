import { nanoid } from "nanoid";
import React, { Component } from "react";
import { CircularProgress, Container, Grid } from "@chakra-ui/react";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import CustomImage from "./components/Image";

class App extends Component {
  state = {
    phrase: "",
    images: null,
    loading: true,
  };

  onFormSubmit = (e, searchterm) => {
    e.preventDefault();
    console.log(`search phrase: ${searchterm}`);
    this.setState({ phrase: searchterm, loading: true });

    const options = {
      method: "GET",
      url: `https://meme-api.herokuapp.com/gimme/${searchterm}/25`,
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({ images: null });
        this.setState({ images: response.data.memes, loading: false });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
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
        this.setState({ images: response.data.memes, loading: false });
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="App">
        <Container maxW="container.lg" mt="10px">
          <Searchbar
            size="lg"
            onFormSubmit={this.onFormSubmit}
            placeholder={"Search any subreddit!"}
          />

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={7}
            mt="10px"
            p={2}
            justifyContent="center"
            alignItems="center"
          >
            {this.state.loading && (
              <CircularProgress
                sx={{ position: "absolute", top: "3em", right: "50%" }}
                isIndeterminate
              />
            )}

            {this.state.images &&
              this.state.images
                .filter((img) => img.nsfw !== true)
                .map((img) => {
                  return (
                    <CustomImage
                      key={nanoid()}
                      title={img.title}
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
