
// IMPORT IMAGES // 
import urtekram1 from "../assets/urtekram/urtekram1.png";
import urtekram2 from "../assets/urtekram/urtekram2.png";
import urtekram3 from "../assets/urtekram/urtekram3.png";
import urtekram4 from "../assets/urtekram/urtekram4.png";
import urtekram5 from "../assets/urtekram/urtekram5.png";
import urtekram6 from "../assets/urtekram/urtekram6.png";
import urtekram7 from "../assets/urtekram/urtekram7.png";


import UrteFrontDot from "../assets/frontpage/reddot.png";
import UrteYellowDot from "../assets/urtekram/yellowdot.png";

import DrawingElement1 from "../assets/urtekram/Drawing1.png";
import DrawingElement2 from "../assets/urtekram/Drawing2.png";

import ProductPasta from "../assets/urtekram/product.png";
import Sun from "../assets/frontpage/sun.png";


// IMPORT WORDPRESS // 
import { useEffect, useState } from "react";
import Urtekramcontent from "../components/Urtekramcontent";
import Urtekraminfo from "../components/Information/Urtekraminfo";

export default function UrtekramPage(){
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch("http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=10");
            const data = await response.json();
            setposts(data);
        }

        getPosts(); 

    }, []);
        

    return(
        <section>

{/* 1. PAGE */}
{/* LANDINGPAGE / WORDPRESS */}
            <section className="relative" id="WordpressUrtekram ">
                <div>
                    {posts.map(post => (
                    <Urtekramcontent key={post.id} post={post} />    
                    ))}
                </div>
                <div className="absolut" id="UrtekramNumber">
                    <p>02</p>
                </div>
                <img id="UrteFrontDot"
                    className="absolut z-index"  
                    src={UrteFrontDot} 
                    alt="albert"
                />
            </section>

{/* 2. PAGE */}
{/* INFORMATION COMPONENT */}
            <div>
                <Urtekraminfo />
            </div>

 {/* 3. PAGE */}          
{/* IMAGE SCROLL DISPLAY */}
        <section className="Flexbox relative">
            
            <p className="uppercase absolut" id="ScrollText">scroll left</p>
            <div className="scroll-container">
                <img  src={urtekram1} alt="image of balls" width="900" height="600" />
                <img  src={urtekram2} alt="image of balls" width="900" height="600" />
                <img  src={urtekram3} alt="image of balls" width="900" height="600" />
                <img  src={urtekram4} alt="image of balls" width="900" height="600" />
                <img  src={urtekram5} alt="image of balls" width="900" height="600" />
                <img  src={urtekram6} alt="image of balls" width="900" height="600" />
                <img  src={urtekram7} alt="image of balls" width="900" height="600" />
            </div>
        </section>

{/* 4. PAGE */}
{/* DRAWING DISPLAY SECTION */}
        <section className="Flexbox relative" id="DrawingSection">

            <div>
                <img 
                    className="DrawingElements"  
                    src={DrawingElement1} 
                    alt="albert"
                />
                <img 
                    className="DrawingElements"  
                    src={DrawingElement2} 
                    alt="albert"
                />
            </div>
            <div id="DrawingText">
                <h1 className="uppercase HalyardFont"> <span className="NumberSize">01</span> Drawing elements</h1>
                <p>
                Creating the visuals for this project was fun, as   
                I decided to hand-draw every design element. I 
                then carefully scanned them, to make them digital. 
                This artistic process allowed me to infuse a unique, vintage 
                charm into the project's aesthetics, to match the product. 
                <br></br><br></br>
                The decision to embrace hand-drawn illustrations was inspired 
                by the project's italic, vintage theme. It was a deliberate 
                choice to evoke a sense of nostalgia and timeless allure. 
                After capturing the essence of Urtekram Fettuccine with 
                hand-drawn elements, I used Illustrator to refine and 
                enhance the visuals, achieving a harmonious blend of 
                tradition and innovation.                
                </p>
            </div>
            <img
                className="absolut z-index" 
                id="DrawingDot"  
                src={UrteFrontDot} 
                alt="albert"
                />

        </section>

{/* 5. PAGE */}
{/* PRODUCT EMBALLAGE SECTION */}
        <section className="Flexbox relative" id="ProductSection">

            <div id="productdiv">
                <img id="UrtekramProduct" src={ProductPasta} alt="albert"/>
            </div>
             <div id="ProductText">
            <h1 className="uppercase HalyardFont"> <span className="NumberSize">02</span> Packaging</h1>
                <p>
                    The process of reimagining product packaging revolves 
                    around two fundamental objectives: enhancing its visual 
                    allure and embracing sustainability. 
                    <br></br><br></br>
                    The endeavor to elevate 
                    packaging's aesthetic appeal entails the creation of 
                    visually captivating designs, while the new packaging 
                    involves eco-conscious materials. This seamless fusion of 
                    aesthetics and environmental stewardship forms the 
                    essence of packaging design, with the overarching goal 
                    of captivating consumer attention, and significantly 
                    reducing our ecological footprint.                
                </p>
            </div>
            <img id="SunUrtekram" className="absolut z-index" src={Sun} alt="image of blue lines" />
        </section>








        </section>
    )
}
