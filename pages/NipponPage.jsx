// IMPORT IMG //
import NipponFront from "../assets/nippon/redcircles.png";
import Infographic1 from "../assets/nippon/ramen.png";
import Infographic2 from "../assets/nippon/sushi.png";
import Infographic3 from "../assets/nippon/yakitori.png";
import NipponLines1 from "../assets/nippon/redline1.png";
import NipponLine2 from "../assets/nippon/redlines.png";
import NipponDisplay from "../assets/nippon/NipponLayout.png";

// IMPORT RESPONSIVE IMG //
import NipponResp1 from "../assets/nippon/nipponresp1.png";
import NipponResp2 from "../assets/nippon/nipponresp2.png";
import NipponResp3 from "../assets/nippon/nipponresp3.png";
import NipponResp4 from "../assets/nippon/nipponresp5.png";
import NipponResp5 from "../assets/nippon/nipponresp4.png";

// IMPORT VIDEO //
import NipponVideo from "../assets/nippon/anime.mp4";
import Nipponinfo from "../components/Information/Nipponinfo";

export default function NipponPage() {
    return(
        <section>

{/* 1. LANDINGPAGE */}
            <section className="absolut">
                <p id="NipponNumber">03</p>
                <p className="uppercase" id="NipponVertical">n<br></br>i<br></br>p<br></br>p<br></br>o<br></br>n</p>
            </section>
        
            <section className="Flexbox" id="NipponLanding">
                <div>
                    <p className="NumberSize">2023</p>
                    <p>
                        Welcome to the captivating world of Nippon <br></br>– a playful, 
                        fictitious Japanese company that specializes in 
                        delivering delectable meal boxes to your doorstep!
                        <br></br><br></br>
                        This project is an exploration of all things Nippon, 
                        immersing you in a uniquely themed Japanese experience. 
                        This website is an imaginative journey that celebrates 
                        the rich culture, flavors, and traditions of Japan. 
                        With every detail carefully designed to fit the theme, 
                        this project has become a unique anime universe.                    
                    </p>
                </div>
                <div>
                <img 
                    className="z-index" 
                    id="NipponFrontCircles" 
                    src={NipponFront} 
                    alt="nippon"
                />
                </div>
            </section>

{/* 2. PAGE */}
{/* INFORMATION COMPONENT */}
<div>
                <Nipponinfo />
            </div>

{/* 3. PAGE */}
{/* INFOGRAPHICS */}

            <section className="Flexbox relative" id="InfographicSection">
                <div id="Infographictext">
                    <p className="uppercase" id="InfographicHeadline">Infographics</p>
                    <p>
                        These Nippon infographics serve as visual aids, 
                        simplifying complex information, such as a sushi 
                        recipe, and making it easily digestible for visitors. 
                        Their colorful and concise presentation not only adds 
                        aesthetic appeal to the website but also improves 
                        overall comprehension, making the recipes more 
                        accessible and engaging. 
                    </p>
                </div>
                <div className="Flexbox">
                <img 
                    className="infographic" 
                    id="#" 
                    src={Infographic1} 
                    alt="nippon"
                />
                <img 
                    className="infographic"
                    id="#" 
                    src={Infographic2} 
                    alt="nippon"
                />
                <img 
                    className="infographic"
                    id="#" 
                    src={Infographic3} 
                    alt="nippon"
                />
                </div>

                <img 
                    className="absolut z-index mobile_hidden" 
                    id="NipponLines1" 
                    src={NipponLines1} 
                    alt="nippon"
                />
            </section>

{/* 4. PAGE */}
{/* LAYOUT DISPLAY */}
            <section>
                <img 
                    className="LayoutIMG" 
                    id="NipponDisplay" 
                    src={NipponDisplay} 
                    alt="nippon"
                />
                <div>
                    <img className="RespIMG laptop_hidden" src={NipponResp1} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={NipponResp2} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={NipponResp3} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={NipponResp4} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={NipponResp5} alt="image of Tanken" />
                </div>    
            </section>

{/* 5. PAGE */}
{/* ANIMATIC */}
            <section className="Flexbox relative">

                <div id="NipponVideo">
                    <video
                        id="NipponAnimatic"
                        controls
                        width="750"
                        height="550"
                    >
                        <source src={NipponVideo} type="video/mp4" />
                    </video>
                </div>
                <div id="NipponVideoText">
                    <h1 className="HalyardFont uppercase"> <span className="NumberSize">01</span> Animatic </h1>
                    <p>
                        The Nippon website is included an animatic 
                        because it perfectly fits the theme. 
                        <br></br> This animatic also 
                        serves as a captivating visual accompaniment, seamlessly 
                        blending with the overall aesthetic and storyline. Its 
                        artistry and animation contribute to the immersive experience, 
                        and making the content more enjoyable. 
                        <br></br>  <br></br>
                        The video is created in Adobe Animate & Adobe After Effects.                
                    </p>
                    <img className="absolut z-index laptop_hidden" id="NipponLinesResp" src={NipponLines1} alt="nippon"/>
                </div>

                <img className="absolut z-index mobile_hidden" id="NipponLines2" src={NipponLine2} alt="albert"/>
            </section>
                

















             
        </section>
    )
}