import React, {Component} from 'react';
import './styles/slider.css';
import 'react-alice-carousel/lib/alice-carousel.css';
// import image1 from './img/stockmarket1.jpg';
// import image2 from './img/stockmarket2.jpg';
// import image3 from './img/sp500.jpg';
// import image4 from './img/inflation.png';

class Slider extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 1
        }
        this.sliderRun = this.sliderRun.bind(this);
        this.sliderBackDefault = this.sliderBackDefault.bind(this);
        this.rightArrowClicked = this.rightArrowClicked.bind(this);
        this.leftArrowClicked = this.leftArrowClicked.bind(this);
        this.autoSlider = this.autoSlider.bind(this);
    }

    componentDidMount() {
        this.autoSlider();
     }

    //  componentDidUpdate () { 
    //     this.autoSlider(); 
    //   }

    slide1 = document.getElementById("slide-1");

    autoSlider() {
        if(this.state.slideIndex === 1) {
            for(let i=1; i<6; i++){
                if("s-btn-"+i === "s-btn-1"){
                    document.getElementById("s-btn-1").style.backgroundColor = "red";
                    document.getElementById("slide-1").style.display = "";
                } else {
                    document.getElementById("s-btn-"+i).style.backgroundColor = "#ececec";
                    document.getElementById("slide-"+i).style.display = "none";
                }
            }
            this.setState({
                slideIndex: 2
            })
        } else {
            console.log("inside autoslider...")
            const newSlideIndex = this.state.slideIndex;
            const currSlideId = "s-btn-"+newSlideIndex;
            const currSlide = document.getElementById(currSlideId);

            for(let i=1; i<6; i++){
                if(currSlideId === "s-btn-"+i){
                    currSlide.style.backgroundColor = "red";
                    document.getElementById("slide-"+i).style.display = "";
                } else {
                    document.getElementById("s-btn-"+i).style.backgroundColor = "#ececec";
                    document.getElementById("slide-"+i).style.display = "none";
                }
            }
            if(newSlideIndex === 5){
                this.setState({
                    slideIndex: 1
                })
    
            } else {
                this.setState({
                    slideIndex: newSlideIndex + 1
                })
            }
        }

        //auto run the slide every 7sec
        setTimeout(this.autoSlider, 7000);
    }

    leftArrowClicked(e) {
        console.log("first state id: " + this.state.slideIndex)
        console.log("arrow left clicked!!");
        const newSlideIndex = this.state.slideIndex - 1;
        const currSlideId = "s-btn-"+newSlideIndex;
        const currSlide = document.getElementById(currSlideId);

        document.getElementById("right-arrow").style.pointerEvents = ""; 

        if(this.state.slideIndex === 1){
            document.getElementById(e.target.id).style.pointerEvents = "none";    
        } else {
            for(let i=1; i<6; i++){
                if(currSlideId === "s-btn-"+i){
                    currSlide.style.backgroundColor = "red";
                    document.getElementById("slide-"+i).style.display = "";
                    //document.getElementById("slide-"+i).style.display = "inline-block";
                } else {
                    document.getElementById("s-btn-"+i).style.backgroundColor = "#ececec";
                    document.getElementById("slide-"+i).style.display = "none";
                }
            }
    
            this.setState({
                slideIndex: newSlideIndex
            })
            console.log("current id: " + newSlideIndex)
            console.log("state id: " + this.state.slideIndex)
    
            if(this.state.slideIndex === 2 || this.state.slideIndex === 1){
                document.getElementById(e.target.id).style.pointerEvents = "none";    
            }
        }
    }

    rightArrowClicked(e) {
        console.log("first state id: " + this.state.slideIndex)
        console.log("arrow right clicked!!");
        const newSlideIndex = this.state.slideIndex + 1;
        const currSlideId = "s-btn-"+newSlideIndex;
        const currSlide = document.getElementById(currSlideId);

        document.getElementById("left-arrow").style.pointerEvents = ""; 

        for(let i=1; i<6; i++){
            if(currSlideId === "s-btn-"+i){
                currSlide.style.backgroundColor = "red";
                document.getElementById("slide-"+i).style.display = "";
                //document.getElementById("slide-"+i).style.display = "inline-block";
            } else {
                document.getElementById("s-btn-"+i).style.backgroundColor = "#ececec";
                document.getElementById("slide-"+i).style.display = "none";
            }
        }

        this.setState({
            slideIndex: newSlideIndex
        })
        console.log("current id: " + newSlideIndex)
        console.log("state id: " + this.state.slideIndex)

        if(this.state.slideIndex === 4){
            document.getElementById(e.target.id).style.pointerEvents = "none";    
        }
    }

    sliderBackDefault() {
        console.log("mouse moved!!");
        for(let i=1; i<6; i++){
            document.getElementById("slide-"+i).style.display = "";
        }
    }

    sliderRun(e) {
        const currSlideId = e.target.id;
        const currSlide = document.getElementById(currSlideId);
        console.log("the id name 1: " + currSlideId)

        for(let i=1; i<6; i++){
            if(currSlideId === "s-btn-"+i){
                currSlide.style.backgroundColor = "red";
                document.getElementById("slide-"+i).style.display = "";
                this.setState({
                    slideIndex: i
                })
            } else {
                document.getElementById("s-btn-"+i).style.backgroundColor = "#ececec";
                document.getElementById("slide-"+i).style.display = "none";
            }
        }
    }

    render() {
        
        return(
            <div className='slider-body'>
                <div className='slider-left'>
                    <div className='slider-btn-id'>
                        <button className="slider-button" id="s-btn-1" onClick={this.sliderRun}></button>
                        <button className="slider-button" id="s-btn-2" onClick={this.sliderRun}></button>
                        <button className="slider-button" id="s-btn-3" onClick={this.sliderRun}></button>
                        <button className="slider-button" id="s-btn-4" onClick={this.sliderRun}></button>
                        <button className="slider-button" id="s-btn-5" onClick={this.sliderRun}></button>
                    </div>
                    <div className='slider'>
                        <div className="slide" id="slide-1">1</div>
                        <div className="slide" id="slide-2">2</div>
                        <div className="slide" id="slide-3">3</div>
                        <div className="slide" id="slide-4">4</div>
                        <div className="slide" id="slide-5">5</div>
                    </div>
                    <div>
                        <i id="left-arrow" onClick={this.leftArrowClicked}></i>
                        <i id="right-arrow" onClick={this.rightArrowClicked}></i>
                    </div>
                </div>
                <div className='slider-right'>
                    ajfksjflajflajf;l
                </div>
            </div>
        );
    }

}

export default Slider;
