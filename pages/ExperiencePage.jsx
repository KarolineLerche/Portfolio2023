

import background from "../assets/mywork/albertbanner.png";
import backgroundnippon from "../assets/mywork/nipponbanner.png";
import backgroundtanken from "../assets/mywork/tankenbanner2.png";
import backgroundurtekram from "../assets/mywork/urtekrambanner.png";
import backgroundhamanns from "../assets/mywork/hamannsbanner.png";
import backgrounddesign from "../assets/mywork/designbanner.png";
import LongboxLine from "../assets/mywork/blueline5.png";

import {Link} from "react-router-dom";

/* IMPORT RESPONSIVE */
import AlbertCard from "../assets/frontpage/AlbertResp.png";
import NipponCard from "../assets/frontpage/NipponResp.png";
import TankenCard from "../assets/frontpage/TankenResp.png";
import UrtekramCard from "../assets/frontpage/UrteResp.png";
import DesignCard from "../assets/frontpage/DesignResp.png";
import HamannsCard from "../assets/frontpage/HamannsResp.png";


/* IMPORT WORDPRESS */
import { useEffect, useState } from "react";
import Experiencecontent from "../components/Experiencecontent";

/* ---------------------------------------------------------------------- */

/* ------- HOMEPAGE WORDPRESS ------- */
export default function HomePage() {
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch("http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=8");
            const data = await response.json();
            setposts(data);
        }

        getPosts(); 
        
    }, []);

    return(
        
            <section>
                <section>
                    <h1 id="ExperienceHeadline">MY WORK</h1>
                    {posts.map(post => (
                    <Experiencecontent key={post.id} post={post} />    
                    ))}
                </section>
  

               
                <section className="Flexbox width100 relative" id="Mywork">

                    <p id="MyWorkNumber" className="absolut mobile_hidden">01-06</p>

                    <div className="row" id="row1">
                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                            <img src={backgroundtanken} alt="image of balls" />
                            <Link to={"/TankenPage"} style={{ textDecoration: 'none' }} > <p ><span className="LongboxOrangeHover uppercase">Tanken Aarhus</span></p></Link>

                            </div>

                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                            <img  src={backgroundnippon} alt="image of balls" />
                            <Link to={"/NipponPage"} style={{ textDecoration: 'none' }}> <p className="LongboxRedHover uppercase">Nippon</p></Link>

                            </div>
                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                            <img  src={backgroundhamanns} alt="image of balls" />
                            <Link to={"/HamannsPage"} style={{ textDecoration: 'none' }}> <p className="LongboxWhiteHover uppercase">Hamanns</p></Link>

                            </div>
                        </div>

                        
                        <div className="row" id="row2">
                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                                <img src={backgroundurtekram} alt="image of balls" />
                                <Link to={"/UrtekramPage"} style={{ textDecoration: 'none' }}> <p className="LongboxOrangeHover uppercase">Urtekram Fettuccine</p></Link>
                            </div>

                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                                <img src={background} alt="image of balls" />
                                <Link to={"/AlbertPage"} style={{ textDecoration: 'none' }}> <p className="LongboxWhiteHover uppercase">Forlaget Albert</p></Link>
                            </div>
                            <div className="LongBox ScaleHover mobile_hidden" id="albertbanner">
                                <img src={backgrounddesign} alt="image of balls" />
                                <Link to={"/DesignPage"} style={{ textDecoration: 'none' }}> <p className="LongboxRedHover uppercase">Design & UI</p></Link>
                            </div>
                    </div>

                    <div className="laptop_hidden respcard1 responsiveCard">
                        <Link to={"/NipponPage"} > <img className="ScaleHover RespCard" src={NipponCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }} /></Link>
                        <Link to={"/UrtekramPage"}> <img className="ScaleHover RespCard" src={UrtekramCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                        <Link to={"/HamannsPage"}> <img className="ScaleHover RespCard" src={HamannsCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                    </div>
                    <div className="laptop_hidden responsiveCard">
                        <Link to={"/TankenPage"}> <img className="ScaleHover RespCard" src={TankenCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }} /></Link>
                        <Link to={"/AlbertPage"}> <img className="ScaleHover RespCard" src={AlbertCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                        <Link to={"/DesignPage"}> <img className="ScaleHover RespCard" src={DesignCard} alt="image of balls" width="330" height="270" style={{ borderRadius: '70px' }}/></Link>
                    </div>

                        <img 
                            className="absolut z-index mobile_hidden" 
                            id="LongboxLine" 
                            src={LongboxLine} 
                            alt="albert"
                        />
                    </section>   
            </section>
            
    )
}