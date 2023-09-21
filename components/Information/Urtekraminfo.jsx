import React from 'react';

const Urtekraminfo = () => {
  return (
    <section className="InfoSection">
        <div className='InfoHead Flexbox'>
            <div >
                <h2 className='uppercase'> Project Information </h2>
            </div>
            <div>
                <p> PROJECT NAME: <span className='InfoP'> Final exam 1. semester </span> </p>
            </div>
        </div>
        <div className="Flexbox">
            <div className="InfoDiv1">
                <p className='uppercase'> Task: <span className='InfoP'> 
                    Rebrand and redesign an already existing brand. - Create a 
                    <br></br>
                    responsive website that functions 
                    as an information and experience site.               
                </span> </p>
                <p id="InforYear"> YEAR: <span className='InfoP'>2022</span> </p>
            </div>
            <div className="InfoDiv2">
                <p> CLIENT: <span className='InfoP'>Urtekram Fettuccine</span> </p>
                <p className='GitLink'>GITHUB URL: <a href='https://github.com/KarolineLerche/Urtekram.git' target="_blank">https://github.com/KarolineLerche/Urtekram.git</a></p>
                <p> URL: <a href='https://karolinelerche.dk/urtekram/' target="_blank"><span className='InfoP'>https://karolinelerche.dk/urtekram/ </span></a></p>
            </div>
        </div>
    </section>
  );
};

export default Urtekraminfo;
