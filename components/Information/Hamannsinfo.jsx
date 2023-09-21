import React from 'react';

const Hamannsinfo = () => {
  return (
    <section className="InfoSection">
        <div className='InfoHead Flexbox'>
            <div >
                <h2 className='uppercase'> Project Information </h2>
            </div>
            <div>
                <p> PROJECT NAME: <span className='InfoP'> Mobile first project </span> </p>
            </div>
        </div>
        <div className="Flexbox">
            <div className="InfoDiv1">
                <p className='uppercase'> Task: <span className='InfoP'> 
                    Develop and design a website that embraces the Mobile First 
                    <br></br>
                    approach. With focus on Responsive Web Design.              
                </span> </p>
                <p id="InforYear"> YEAR: <span className='InfoP'>2022</span> </p>
            </div>
            <div className="InfoDiv2">
                <p> CLIENT: <span className='InfoP'>Hamanns Aarhus</span> </p>
                <p className='GitLink'>GITHUB URL: <a href='https://github.com/sofiehyllen/hamanns.git' target="_blank">https://github.com/sofiehyllen/hamanns.git</a></p>
                <p> URL: <a href='https://github.com/sofiehyllen/hamanns.git' target="_blank"> <span className='InfoP'> http://hamanns.sofiehyllen.dk/ </span></a> </p>
            </div>
        </div>
    </section>
  );
};

export default Hamannsinfo;
