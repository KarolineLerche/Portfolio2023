import parse from "html-react-parser";






export default function Experiencecontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;

return(
    <article id="WordpressExperience">
            <img id="RedDot" src={image} alt="image" />
            <p>{parse(post.content.rendered)}</p>
    </article>
    
);
}
