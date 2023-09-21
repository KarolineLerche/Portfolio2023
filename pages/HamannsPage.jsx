

/* IMPORT WORDPRESS */
import { useEffect, useState } from "react";
import Hamannscontent from "../components/Hamannscontent";
import Events from "../assets/hamanns/emmaevents.png";
import GreenDot from "../assets/hamanns/greendot.png";
import HamannsSite from "../assets/hamanns/hamannssite.png";
import HamannsLine from "../assets/hamanns/hamannslastbackground.png";
import Hamannsinfo from "../components/Information/Hamannsinfo";

/* ---------------------------------------------------------------------- */


/* ------- HOMEPAGE WORDPRESS ------- */
export default function HamannsPage() {
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch("http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=14");
            const data = await response.json();
            setposts(data);
        }

        getPosts(); 
        
    }, []);

    return(
        <section>


{/* 2. PAGE */}
{/* WORDPRESS FRONTPAGE */}
            <section>
                    {posts.map(post => (
                    <Hamannscontent key={post.id} post={post} />    
                    ))}
            </section>

{/* 2. PAGE */}
{/* INFORMATION COMPONENT */}
            <div>
                <Hamannsinfo />
            </div>

{/* 3. PAGE */}
{/* EVENT & NEWS SECTION */}
        <section className="Flexbox relative" id="EventSection">
            <div id="eventdiv">
                <img id="Hamannsevents"  src={Events} alt="albert"/>
            </div>

            <div id="EventText">
                <h1 className="uppercase HalyardFont"> <span className="NumberSize">01</span> Events & news</h1>
                <p>
                    This websitefeatures two sections:
                    Events and News. <br></br>The Event section keeps 
                    visitors informed about upcoming activities 
                    and workshops, while the News section provides 
                    regular updates on our latest developments and 
                    insights. <br></br><br></br>
                    These additions are designed to ensure users to stay 
                    engaged and informed, but also making their return to the 
                    website.                
                </p>
            </div>
            <img className="absolut z-index" id="GreenDot"  src={GreenDot} alt="albert"/>
        </section>

{/* 4. PAGE */}
{/* WEBSITE FRONTPAGE DISPLAY */}
        <section id="HamannsDisplay" className="relative">
                <div>
                    <img className="LayoutIMG" src={HamannsSite} alt="image of Tanken" />
                    <img className="laptop_hidden" src={HamannsSite} alt="image of Tanken" />
                </div>
                <img className="absolut z-index" id="HamannsLines"  src={HamannsLine} alt="albert"/>
        </section>
    </section>
    )
}
