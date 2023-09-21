
// IMPORT IMG //
import albertfront from "../assets/albert/albertfront.png";
import AlbertFrontBackground from "../assets/albert/bluecircle.png";
import AlbertDot1 from "../assets/albert/bluecircle3.png";
import AlbertDot2 from "../assets/albert/bluecircle1.png";
import AlbertLine from "../assets/albert/line.png";

// IMPORT VIDEO //
import AlbertVideo from "../assets/albert/animatic.mp4";
import AlbertVideo1 from "../assets/albert/forlaget.mp4";


// IMPORT COMPONENT ZOOM //
import ZoomedImage from '../components/ZoomedImage';
import ZoomedImage2 from '../components/ZoomedImage2';
import ZoomedImage3 from '../components/ZoomedImage3';
import ZoomedImage4 from '../components/ZoomedImage4';
import Albertinfo from '../components/Information/Albertinfo';

// ALBERT PAGE //
export default function AlbertPage() {
    return(
        <section>

{/* 1. LANDINGPAGE */}
{/* NUMBER & HEADLINE */}
            <section className="Flexbox margin10">
                <div id="NumberAlbert">
                    <p className="absolut">04</p>
                </div>
                <div >
                    <h1 id="HeadlineAlbert">Forlaget Albert</h1>
                    <h1 id="Headline2Albert">Svane & Bilgrav</h1>
                </div>
            </section>

{/* LANDINGPAGE PICTURES */}
            <section className="Flexbox relative">
                <div id="FrontimgAlbert">
                    <img src={albertfront} alt="albert"/>
                </div>
                <div className="absolut" id="BackgroundAlbert">
                    <img src={AlbertFrontBackground} alt="albert"/>
                </div>
                <div className="absolut" id="VerticalNumbers">
                    <p>2<br></br>0<br></br>2<br></br>3</p>
                </div>
            </section>

{/* 2. PAGE */}
{/* INFORMATION COMPONENT */}
            <div>
                <Albertinfo />
            </div>

{/* 3. PAGE */}
{/* WEBSITE ZOOM SECTION 1 */}
            <section className="Flexbox relative" id="AlbertSite">
                <div id="ForlagetAlbert">
                    <h1>Forlaget Albert</h1>
                    <p>
                        Svane & Bilgrav is a book publisher, that
                        presents a dedicated webpage for their beloved 
                        publication 'Små mennesker, Store 
                        drømme'. <br></br><br></br>
                        This unique storytelling platform is designed 
                        with children and their parents in mind.
                        <br></br><br></br>
                        The website design draws inspiration from the 
                        original colors and graphics, of the cherished 
                        bookline. Through this design approach, I aim 
                        to create a digital space that captures the essence 
                        of the beloved series.<br></br><br></br>
                        The primary goals was to ignite the imaginations 
                        of young readers, and provide parents with a shared 
                        storytelling experience. This website blends tradition with 
                        innovation, bringing the tales of 'Små mennesker,
                        Store drømme' to life in a engaging digital format.                   
                    </p>
                    <img className="absolut z-index" id="AlbertDot1"src={AlbertDot1} alt="albert"/>
                </div>

                <div className="Flexbox ZoomedIMG">
                    <div className="relative">
                        <h2 className="absolut AlbertNumbers1 uppercase"> 01</h2>
                        <ZoomedImage />
                    </div>
                    <div className="relative">
                    <h2 className=" AlbertNumbers1 absolut uppercase"> 02</h2>
                        <ZoomedImage2 />
                    </div>            
                </div> 
            </section>

{/* 4. PAGE */}
{/* WEBSITE ZOOM SECTION 2 */}
            <section className="Flexbox relative" id="AlbertSite">
                <div className="Flexbox ZoomedIMG">
                    <div className="relative">
                    <h2 className=" AlbertNumbers2 absolut uppercase"> 03</h2>
                        <ZoomedImage3 />
                    </div>
                    <div className="relative">
                    <h2 className=" AlbertNumbers2 absolut uppercase"> 04</h2>
                        <ZoomedImage4 />
                    </div>            
                </div>
                <div id="Storytelling">
                    <h1>Storytelling</h1>
                    <p> 
                        The website is truly designed and dedicated to storytelling. 
                        It's a place where the enchanting tales of 
                        'Små mennesker, Store drømme' come to life 
                        through captivating illustrations and 
                        informations. <br></br><br></br>
                        Whether you're a child discovering the bookline
                        for the first time, or a parent sharing 
                        these cherished stories, the website is 
                        designed to enhance your storytelling 
                        experience, as I believe in the power of stories 
                        to inspire, educate, and entertain - just like the 
                        bookline.  
                    </p>
                    
                </div>
                <img className="absolut z-index" id="AlbertDot2" src={AlbertDot2} alt="albert"/>
            </section>

{/* 5. PAGE */}
{/* WEBSITE VIDEO SECTION */}
            <section className="Relative">
                <section className="Flexbox VideoSection">
                    <div className="AlbertTextVideos">
                        <h1> <span className="NumberSize">01</span> Animatic</h1>
                        <p>
                            The website features an animatic that perfectly 
                            complements the graphic theme. This captivating visual 
                            addition seamlessly blends with the overall 
                            aesthetic and storyline, enhancing the immersive 
                            experience. <br></br>
                            Created using Adobe Animate and Adobe Animate 
                            Character, this animatic encourages the idea of 
                            dreaming while reading the books                        
                        </p>
                        
                    </div>
                    <div>
                        <video id="AlbertVideo" controls width="600" height="350">
                            <source src={AlbertVideo} type="video/mp4" />
                        </video>
                    </div>
                </section>

                <section className="Flexbox VideoSection">
                    <div className="AlbertTextVideos">
                        <h1> <span className="NumberSize">02</span> Interview</h1>
                        <p>
                            The website also showcases two impactful 
                            video elements: interviews with one of the founders. 
                            These interviews add depth to the narrative, 
                            providing a personal and authentic touch, that fosters 
                            trust and connection with the audience. <br></br>
                            Through these candid conversations, I aim to offer 
                            insights, share their passion, and strengthen 
                            the bond between their visitors and the brand.                       
                        </p>
                        
                    </div>
                    <div>
                        <video
                            id="AlbertVideo"
                            controls
                            width="600"
                            height="350"
                        >
                            <source src={AlbertVideo1} type="video/mp4" />
                        </video>
                    </div>
                </section>

                <img 
                    className="absolut z-index mobile_hidden" 
                    id="AlbertLine" 
                    src={AlbertLine} 
                    alt="albert"
                />
            </section>
        </section>
    )
}