import './about.css';
import {useEffect,useState} from "react";
function About(){
    useEffect(function(){
        adjust_svg();
        // window.addEventListener('resize', function(){window.location.reload();},true);
        function adjust_svg(){

            let svg = document.getElementById("svg");
            let g = document.getElementById("g");
            let animate = document.getElementById("animate");
            
            let width = window.innerWidth;
            let height = '234';
            let animation = `M0 0L 0 195.52628014453333Q 130.66666666666666 122.31775418146182  261.3333333333333 99.6502711871602T 522.6666666666666 125.67041471486647T 784 119.8633577947395T 1045.3333333333333 120.64209429583343T 1306.6666666666667 85.04867361867417T ${width} 92.6754327551073L ${width} 0 Z;M0 0L 0 165.56846675483078Q 130.66666666666666 137.85488018647928 261.3333333333333 111.76614296531608T 522.6666666666666 134.9266638720766T 784 100.79456246848358T 1045.3333333333333 78.14636735093404T 1306.6666666666667 61.87966951883509T ${width} 71.991976726441L ${width} 0 Z;M0 0L 0 121.60063142659291Q 130.66666666666666 146.76583896244532 261.3333333333333 108.04540614042324T 522.6666666666666 101.02919260435773T 784 159.10879701797293T 1045.3333333333333 66.32826419553368T 1306.6666666666667 136.79273679533705T ${width} 61.5155064190965L ${width} 0 Z;M0 0L 0 195.52628014453333Q 130.66666666666666 122.31775418146182 261.3333333333333 99.6502711871602T 522.6666666666666 125.67041471486647T 784 119.8633577947395T 1045.3333333333333 120.64209429583343T 1306.6666666666667 85.04867361867417T ${width} 92.6754327551073L ${width} 0 Z`;
            svg.style.width = width;
            svg.setAttribute("viewBox", `0 0 ${width} ${height}`); 
            g.setAttribute("transform", `translate(${width/2},${height/2}) scale(1,1) translate(-${width/2},-${height/2})`); 
            animate.setAttribute("values", animation); 
        };
    },[]);
    return(
        <div className="about page">
            <div className="title-text">
                <h3>IoT Market</h3>
                <i>Best components, at the best price</i>
            </div>
            <div className="svg-container">
                <svg
                    id = "svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        margin: "auto",
                        background: "lightgreen",
                        display: "block",
                        zIndex: 1,
                        position: "relative",
                        shapeRendering: "auto"
                    }}
                    width={1714}
                    height={234}
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 1714 234"
                    >
                    <g id="g" transform="translate(784,117) scale(1,0.4) translate(-784,-117)" >
                        <linearGradient id="lg-0.493134531538699" x1={0} x2={1} y1={0} y2={0}>
                        <stop stopColor="#ffffe0" offset={0} />
                        <stop stopColor="#ffffe0" offset={1} />
                        </linearGradient>
                        <path d="" fill="url(#lg-0.493134531538699)" opacity="1">
                        <animate
                            id="animate"
                            attributeName="d"
                            dur="4s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcMode="spline"
                            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                            begin="0s"
                            values="M0 0L 0 195.52628014453333Q 130.66666666666666 122.31775418146182  261.3333333333333 99.6502711871602T 522.6666666666666 125.67041471486647T 784 119.8633577947395T 1045.3333333333333 120.64209429583343T 1306.6666666666667 85.04867361867417T 1714 92.6754327551073L 1714 0 Z;M0 0L 0 165.56846675483078Q 130.66666666666666 137.85488018647928  261.3333333333333 111.76614296531608T 522.6666666666666 174.9266638720766T 784 100.79456246848358T 1045.3333333333333 78.14636735093404T 1306.6666666666667 61.87966951883509T 1714 71.991976726441L 1714 0 Z;M0 0L 0 121.60063142659291Q 130.66666666666666 146.76583896244532  261.3333333333333 108.04540614042324T 522.6666666666666 101.02919260435773T 784 159.10879701797293T 1045.3333333333333 66.32826419553368T 1306.6666666666667 136.79273679533705T 1714 61.5155064190965L 1714 0 Z;M0 0L 0 195.52628014453333Q 130.66666666666666 122.31775418146182  261.3333333333333 99.6502711871602T 522.6666666666666 125.67041471486647T 784 119.8633577947395T 1045.3333333333333 120.64209429583343T 1306.6666666666667 85.04867361867417T 1714 92.6754327551073L 1714 0 Z"
                        />
                        </path>
                    </g>
                </svg>

            </div>
            <div className="about-container">
                <div className="about-element">
                    <h2>About us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo enim nam iure tenetur est, doloribus debitis incidunt consectetur rerum ipsum quidem mollitia exercitationem iusto? Nesciunt dolores dolorum quod aperiam.</p>
                    <img src="/images/about.png" alt="about us" />
                </div>
                <div className="about-element">
                    <h2>Our story</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo enim nam iure tenetur est, doloribus debitis incidunt consectetur rerum ipsum quidem mollitia exercitationem iusto? Nesciunt dolores dolorum quod aperiam.</p>
                    <img src="/images/story.png" alt="our story" />
                </div>
                <div className="about-element">
                    <h2>Our purpose</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo enim nam iure tenetur est, doloribus debitis incidunt consectetur rerum ipsum quidem mollitia exercitationem iusto? Nesciunt dolores dolorum quod aperiam.</p>
                    <img src="/images/purpose.png" alt="our purpose" />
                </div>
            </div>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13454.85543723802!2d-116.97084009372172!3d32.533788419014705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947c091d07945%3A0x65c5734b77863451!2sUABC%2C%2022424%20Tijuana%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1696125763234!5m2!1ses-419!2smx"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="gud map"
            />

        </div>
        
    );
}

export default About;