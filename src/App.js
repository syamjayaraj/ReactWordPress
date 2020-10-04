import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    return fetch(`https://techomoro.com/wp-json/wp/v2/posts/`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((item, index) => {
          return (
            <div>
              <div class="row">
                <div class="leftcolumn">
                  <div class="card">
                    <div className="title">
                      <h1>{item.title.rendered}</h1>
                    </div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: item.content.rendered,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
