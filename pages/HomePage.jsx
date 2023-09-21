
/* LANDINGPAGE */
import kugler from "../assets/frontpage/kugler.png";
import BlueLinesBackground from "../assets/frontpage/FrontBackground.png";
import Portrait from "../assets/frontpage/portraitside.png";
import RedDot from "../assets/frontpage/reddot.png";

/* MY WORK SECTION */

import AlbertCard from "../assets/frontpage/AlbertResp.png";
import NipponCard from "../assets/frontpage/NipponResp.png";
import TankenCard from "../assets/frontpage/TankenResp.png";
import UrtekramCard from "../assets/frontpage/UrteResp.png";
import DesignCard from "../assets/frontpage/DesignResp.png";
import HamannsCard from "../assets/frontpage/HamannsResp.png";

/* Wordpress */
import { useEffect, useState } from "react";
import Homecontent from "../components/Homecontent";
import {Link} from "react-router-dom";

/* CONTACT SECTION */
import ContactLine from "../assets/frontpage/contactsectionlines.png";
import Sun from "../assets/frontpage/sun.png";

/* ---------------------------------------------------------------------- */

/* HOMEPAGE WORDPRESS */
export default function HomePage() {
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch("http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=7");
            const data = await response.json();
            setposts(data);
        }

        getPosts(); 
        
    }, []);

    return(
        <section>

{/* 1. LANDINGPAGE */}
                <section className="Flexbox relative" id="Frontpage"> 
                    <div id="Content">
                        <h1 id="Headline">KAROLINE <br></br>JUL LERCHE</h1>
                        <h2>PORTFOLIO 2023</h2>                   
                        <p>
                            Dive into my updated portfolio, and discover more about me
                            and my passion. On these pages I gather and share my deepest 
                            thoughts behind every project and design. <br></br><br></br>
                            I describe myself as an experimental designer and frontend creator,
                            with a strong interest within visual identity, digital design, graphics
                            and frontend development. <br></br><br></br>
                            Feel free to explore further about me and my qualifications. 
                        </p>
                        <img className="absolut z-index" id="FrontpageDot" src={RedDot} alt="image of balls" />
                    </div>
                    <div className="mobile_hidden" id="FrontBackground">
                        <div>
                            <img id="Portrait" src={Portrait} alt="image of Karoline Lerche"/>
                        </div>
                        <div className="ScaleHover">
                            <a className="Button" href="#"> More about me </a>
                        </div>
                    </div>
                    <div className="laptop_hidden">
                        <img id="RespPortrait" src={Portrait} alt="image of balls" />
                    </div>
                    <img className="absolut z-index mobile_hidden" id="CirclesBackgroundFront" src={kugler} alt="image of balls" />
                    <img className="absolut z-index" id="BluelineBackgroundFront" src={BlueLinesBackground} alt="image of blue lines" />
                </section>

{/* 2. MY WORK SECTION */}
{/* Wordpress */}
            <section className="Flexbox relative" id="MyWorkSection">
                <div>
                    {posts.map(post => (
                    <Homecontent key={post.id} post={post} />    
                    ))}
                    <h3 className="absolut HalyardFont mobile_hidden">01-06</h3>
                </div>

 {/* Longbox div */} 
                <div id="MyWorkScroll">
                <h1 id="ScrollInfo" className="absolut HalyardFont mobile_hidden">Scroll Left</h1>

                    <div className="scrollhome mobile_hidden">
                        <Link to={"/NipponPage"} > <img className="ScaleHover" src={NipponCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }} /></Link>
                        <Link to={"/UrtekramPage"}> <img className="ScaleHover" src={UrtekramCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                        <Link to={"/HamannsPage"}> <img className="ScaleHover" src={HamannsCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                    </div>

                    <div className="scrollhome mobile_hidden">
                        <Link to={"/TankenPage"}> <img className="ScaleHover" src={TankenCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }} /></Link>
                        <Link to={"/AlbertPage"}> <img className="ScaleHover" src={AlbertCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                        <Link to={"/DesignPage"}> <img className="ScaleHover" src={DesignCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                    </div>
                </div>
                <div id="RespcardHome" className="laptop_hidden respcard1 responsiveCard">
                        <Link to={"/NipponPage"} > <img className="ScaleHover RespCard" src={NipponCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }} /></Link>
                        <Link to={"/UrtekramPage"}> <img className="ScaleHover RespCard" src={UrtekramCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                        <Link to={"/HamannsPage"}> <img className="ScaleHover RespCard" src={HamannsCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                    </div>
            </section>

{/* 3. CONTACT SECTION */}          
            <section className="Contact relative Flexbox" id="ContactSection">
                <div className="ContactDiv1">
                    <p className="uppercase headline1contact"> Say Hi</p>
                    <p className="uppercase headline2contact">Contact Me</p>
                    <p className="pcontact">
                        I'm always eager to collaborate with fellow creatives, 
                        clients, and potential partners. Whether you 
                        have a specific project in mind or want to discuss 
                        possibilities, don't hesitate to get in touch.
                        Your ideas and visions matter, and I'm here 
                        to help bring them to life. 
                        <br></br> 
                        <br></br> 
                        If you have any questions, opportunities for 
                        collaboration, or just want to say hi, I'd 
                        love to hear from you. 
                    </p>
                </div>

                <div className="LongboxDiv">
                    <div className=" LongboxContact ScaleHover EmailContact"> <p> EMAIL: <a href="mailto:kj.lerche@gmail.com">Kj.lerche@gmail.com</a> </p> </div>
                    <div className=" LongboxContact ScaleHover LinedinContact"> <p> LINKEDIN: <a href="https://www.linkedin.com/in/karoline-lerche-538a37273/" target="_blank" >Karoline Lerche</a> </p> </div>
                    <div className=" LongboxContact ScaleHover PhoneContact"> <p> FACEBOOK: <a href="https://www.facebook.com/karoline.lerche.7/">Karoline Lerche </a> </p> </div>
                </div>

                <img id="BlueLineContact" className="absolut z-index mobile_hidden" src={ContactLine} alt="image of blue lines" />
                <img id="Sun" className="absolut z-index" src={Sun} alt="image of blue lines" />

            </section>







        </section>     
         
    )
}

