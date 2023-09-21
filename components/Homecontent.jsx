import parse from "html-react-parser";

export default function Homecontent({post}){

    

return(
    <article id="WordpressHome">
            <h2>{parse(post.title.rendered)}</h2>
                {parse(post.content.rendered)}
    </article>
    
);
}