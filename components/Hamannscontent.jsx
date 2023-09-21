import parse from "html-react-parser";






export default function Hamannscontent({post}){

    const image = post._embedded["wp:featuredmedia"][0].source_url;

return(
    <article className="Flexbox" id="WordpressHamanns">
    
            <img className="absolut z-index" id="Hamannsbackground" src={image} alt="image" />
        
            <div>
                {parse(post.content.rendered)}
            </div>
            <div>
                <h1 className="uppercase">{parse(post.title.rendered)}</h1>
            </div>
    </article>
    
);
}