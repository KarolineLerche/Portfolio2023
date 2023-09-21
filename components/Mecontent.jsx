import parse from "html-react-parser";

export default function Mecontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;

return(
    <article id="WordpressMe">
        <img className="absolut" src={image} alt="image" />
        <h2 className="uppercase">{parse(post.title.rendered)}</h2>
        {parse(post.content.rendered)}
    </article>
    
);
}