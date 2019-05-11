import React from 'react'
import time from './assets/time.png';
import question from './assets/question.png';
import image from './assets/image.png';
import reserved from './assets/reserved.png';
import tool from './assets/tool.png';
import elearning from './assets/elearning.png';
import Button from './Button.js';
import Status from './Status.js';
import './App.css';

const Home = () => {
    // changePage = () => {
    //     this.setState(prevState => ({ cover: !prevState.cover }));
    //     console.log(this.state.cover);
    //     //<div className={`body ${this.state.cover ? "" : "page-is-changing"}`}>
    //   }

    return(
        <div className="Home">
            <div className="home-row-medium hover-left">
              <div className="home-colm medium">
                <Status message="THE SPACE IS" ></Status>
              </div>
              <div className="home-colm small">
                <Button to="/construction" name="SHIFT HOURS" image={time}></Button>
                <Button to="/reservation" name="MAKE RESERVATION" image={reserved}> </Button>
              </div>              
            </div>

            <div className="home-row">
              <Button to="/borrow" name="I TOOK SOMETHING" image={tool}></Button>
            </div>
            <div className="home-row">
              <Button to="/usage" name="I USED THE MAKERSPACE" image={elearning}></Button>
            </div>

            <div className="home-row-medium">
              <div className="home-colm">
                <Button to="/construction" name="PHOTO GALLERY" image={image}></Button>
              </div>
              <div className="home-colm">
                <Button to="/construction" name="FAQ" image={question}></Button>
              </div>  
            </div>
          </div>
    )
}

export default Home;