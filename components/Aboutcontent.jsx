import parse from "html-react-parser";

export default function Aboutcontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;

return(
    <article id="WordpressAbout">
            <h2 className="uppercase">{parse(post.title.rendered)}</h2>
            
            {parse(post.content.rendered)}
            
            <img className="absolut z-index" id="AboutMeBackground" src={image} alt="image"/>
    </article>
    
);
}
