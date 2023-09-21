
/* Wordpress */
import { useEffect, useState } from "react";
import Aboutcontent from "../components/AboutContent";
import Mecontent from "../components/MeContent";
import RedDot from "../assets/reddot.png";
import Portrait from "../assets/frontpage/portraitofme.png";



export default function AboutPage() {
    const [aboutPosts, setAboutPosts] = useState([]);
    const [mePosts, setMePosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response1 = await fetch(
                "http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=11"
            );

            const response2 = await fetch(
                "http://karolinelerche.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=12"
            );

            const data1 = await response1.json();
            const data2 = await response2.json();

            setAboutPosts(data1);
            setMePosts(data2);
        }

        getPosts();
    }, []);

    return (
        <section className="Flexbox">
            <section id="AboutSection">
                <div >
                    {aboutPosts.map(post => (
                        <Aboutcontent key={post.id} post={post} />
                    ))}
                </div>
                <img className="absolut z-index laptop_hidden" id="RespPortraitAbout" src={Portrait} alt="image"/>

            </section>
            <section  id="MeSection">
                <div id="RespMe">
                    {mePosts.map(post => (
                        <Mecontent key={post.id} post={post} />
                    ))}                

                </div> 

            </section>  
            <img className="absolut z-index" id="AboutMeDot" src={RedDot} alt="image"/>
        </section>
    );
}
