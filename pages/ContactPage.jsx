import ContactLine from "../assets/contact/babyblueline.png";
import BlueYellowCircles from "../assets/contact/blueorangecircle.png";

export default function ContactPage() {
    return(
        <section>
            <section className="Contact relative Flexbox" id="Contactpage">
                <div className="ContactDiv1">
                    <p className="uppercase headline1contact"> Say Hi</p>
                    <p className="uppercase headline2contact">Contact Me</p>
                    <p className="pcontact">
                        I'm always eager to collaborate with fellow creatives, 
                        clients, and potential partners. Whether you 
                        have a specific project in mind or want to discuss 
                        possibilities, don't hesitate to get in touch.
                        Your ideas and visions matter, and I'm here 
                        to help bring them to life. 
                        <br></br> 
                        <br></br> 
                        If you have any questions, opportunities for 
                        collaboration, or just want to say hi, I'd 
                        love to hear from you. 
                        <br></br> 
                         
                        Feel free to reach out 
                        through the contact information.
                    </p>
                </div>

                <div className="LongboxDiv">
                    <div className=" LongboxContact ScaleHover EmailContact"> <p> EMAIL: <a href="mailto:kj.lerche@gmail.com">Kj.lerche@gmail.com</a> </p> </div>
                    <div className=" LongboxContact ScaleHover LinedinContact"> <p> LINKEDIN: <a href="https://www.linkedin.com/in/karoline-lerche-538a37273/" target="_blank" >Karoline Lerche</a> </p> </div>
                    <div className=" LongboxContact ScaleHover PhoneContact"> <p> FACEBOOK: <a href="https://www.facebook.com/karoline.lerche.7/">Karoline Lerche </a> </p> </div>
                </div>

                <img id="ContactBackground" className="absolut z-index mobile_hidden" src={ContactLine} alt="image of blue lines" />
                <img id="ContactBackgroundCircles" className="absolut" src={BlueYellowCircles} alt="image of blue lines" />
            </section>
             
        </section>
    )
}