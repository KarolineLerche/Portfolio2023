import parse from "html-react-parser";

export default function Urtekramcontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;

return(
    <article className="relative" id="WordpressUrtekram">
        <div>
            <img id="UrtekramLines1" src={image} alt="image" />
        </div>
        <div>
            <h2>{parse(post.title.rendered)}</h2>
            <p>{parse(post.content.rendered)}</p>
        </div>
    </article>
    
);
}