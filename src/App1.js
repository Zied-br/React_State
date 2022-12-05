import React, { Component } from "react";
import "./App.css";

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Zied Ben Rejeb",
      bio: `I am a computer technician passionate about the field of information technology, particularly web development, with a capacity for autonomy, a spirit of analysis and initiative, I am always ready to take up new challenges and especially to win !
        Do not hesitate to contact me, I would be delighted to share with you my experience as well as yours!`,
      imgSrc: `./imgZied.jpg`,
      profession: `Web Developer`,
      shows: true,
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  btnClc = () => {
    this.setState({ shows: !this.state.shows });
  };
  render() {
    return (
      <>
        {this.state.shows ? (
          <div className="App">
            <button className="buttonStyle" onClick={this.btnClc}>
              Hide
            </button>
            <div className="stylings">
              <img src={this.state.imgSrc} className="imgStyle" />
              <div>
                <h1 className="nameStyle">{this.state.fullName} </h1>
                <h3 className="professionStyle">{this.state.profession}</h3>
              </div>{" "}
            </div>
            <p className="bioStyle">{this.state.bio}</p>
            <h2 className="professionStyle" style={{ color: `red` }}>
              Counter : {this.state.count}
            </h2>
          </div>
        ) : (
          <div className="App">
            <button className="buttonStyle" onClick={this.btnClc}>
              Show
            </button>
          </div>
        )}
      </>
    );
  }
}

App1.propTypes = {};

export default App1;
