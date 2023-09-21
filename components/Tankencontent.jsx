
import parse from "html-react-parser";

export default function Tankencontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;
    

return(
    <article className="Flexbox" id="WordpressTanken">
        <div id="TankenFrontImg">
            <img  src={image} alt="image" />
        </div>
        <div>
            <h2>{parse(post.title.rendered)}</h2>
                {parse(post.content.rendered)}
        </div>
    </article>
    
);
}