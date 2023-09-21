
import { useEffect, useState } from "react";
import Tankencontent from "../components/Tankencontent";
import TankenFront from "../assets/tanken/tankenforside.png";
import ImageCarousel from "../components/Imagecarousel";
import Halfcircle from "../assets/tanken/sunright.png";
import TankenLine from "../assets/tanken/TankenLine.png";
import TankenPOV from "../assets/tanken/tankenvideo.mp4";

/* IMPORT RESPONSIVE */ 
import TankenResp1 from "../assets/tanken/tankenresp1.png";
import TankenResp2 from "../assets/tanken/tankenresp2.png";
import TankenResp3 from "../assets/tanken/tankenresp3.png";
import TankenResp4 from "../assets/tanken/tankenresp4.png";
import TankenResp5 from "../assets/tanken/tankenresp5.png";
import Tankeninfo from "../components/Information/Tankeninfo";

export default function TankenPage() {
        const [posts, setposts] = useState([]);
    
        useEffect(()=>{
            async function getPosts(){
                const response = await fetch("http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=9");
                const data = await response.json();
                setposts(data);
            }
    
            getPosts(); 
            
        }, []);


    return(
        <section>

{/* 1. PAGE */}           
{/* LANDINGPAGE */}
            <section className="Flexbox width100" id="TankenFront">
                <div><p>01</p></div>
                <div><h1>Tanken <br></br> Aarhus </h1></div>
            </section>

{/* WORDPRESS */}
            <section className="Flexbox">
                {posts.map(post => (
                <Tankencontent key={post.id} post={post} />    
                ))}
            </section>

{/* 2. PAGE */}
{/* INFORMATION COMPONENT */}
            <div>
                <Tankeninfo />
            </div>

{/* 3. PAGE */}
{/* WEBSITE FRONTPAGE DISPLAY */}
            <section>
                <div>
                    <img className="LayoutIMG" src={TankenFront} alt="image of Tanken" />
                </div>
                <div>
                    <img className="RespIMG laptop_hidden" src={TankenResp1} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={TankenResp2} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={TankenResp3} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={TankenResp4} alt="image of Tanken" />
                    <img className="RespIMG laptop_hidden" src={TankenResp5} alt="image of Tanken" />

                </div>
            </section>

{/* 4. PAGE */}
{/* MENU IMAGE CAROUSEL */}
            <section className="Flexbox relative" id="ImageCarouselSection">
                <div id="carouseldiv">
                    <ImageCarousel />
                </div>
                <div id="textdivcarousel">
                    <p className="mobile_hidden" id="numbers"> 01-05 </p>
                    <p className="uppercase" id="menukortheader">Menu <br></br></p>
                    <p id="menukortinfo">
                        On 'Tanken's menu card, I have designed and developed a 
                        user-friendly and easy-to-navigate experience.
                        <br></br> <br></br>
                        The menu card is designed to delight and inform, with 
                        intuitive category icons, informative infographics, and 
                        a streamlined layout that enhances usability. Exploring 
                        the diverse flavors and choices that await 'Tanken's customers 
                        is effortless, as it is fully presented in this design.
                    </p>
                    <img src={Halfcircle} alt="image of Half circle" className="absolut z-index"/>
                </div>
            </section>

{/* 5. PAGE */}
{/* VIDEO SECTION */}
            <section className="Flexbox relative" id="TankenVideo">
                <div>
                <h1 className="HalyardFont uppercase"> <span className="NumberSize">01</span> POV Video</h1>
                        <p>
                        To showcase 'Tanken' kiosk, and create a personal 
                        website, I made a Point of View video for the website. 
                        This immersive video guides visitors through 'Tanken' 
                        effortlessly, providing an authentic, transparent, and 
                        engaging experience. With intuitive navigation, effective 
                        product showcases, and compelling storytelling.
                        </p>
                        
                </div>
                <div id="videosectionTanken">
                <h1  id="TankenAdress" className="HalyardFont absolut uppercase"> GRAVEN 16, 8000 AARHUS C</h1>
                    <video
                        id="TankenPOV"
                        controls
                        width="900"
                        height="550"
                    >
                        <source src={TankenPOV} type="video/mp4" />
                    </video>
                </div>
                <img 
                    className="absolut z-index" 
                    id="TankenLine" 
                    src={TankenLine} 
                    alt="albert"
                />
            </section>
             
        </section>
    )
}