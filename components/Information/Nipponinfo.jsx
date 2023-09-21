import React from 'react';

const Nipponinfo = () => {
  return (
    <section className="InfoSection">
        <div className='InfoHead Flexbox'>
            <div >
                <h2 className='uppercase'> Project Information </h2>
            </div>
            <div>
                <p> PROJECT NAME: <span className='InfoP'> UX/UI project</span> </p>
            </div>
        </div>
        <div className="Flexbox">
            <div className="InfoDiv1">
                <p className='uppercase'> Task: <span className='InfoP'>
                    Develop a solution with focus on 
                    the user.Conceive
                    <br></br> 
                    a user experience with interactions 
                    on a digital user interface.               
                </span> </p>
                <p id="InforYear"> YEAR: <span className='InfoP'>2023</span> </p>
            </div>
            <div className="InfoDiv2">
                <p> CLIENT: <span className='InfoP'>Nippon</span> </p>
                <p className='GitLink'>GITHUB URL: <a href='https://github.com/KarolineLerche/Nippon.git' target="_blank">https://github.com/KarolineLerche/Nippon.git</a></p>
                <p> URL: <span className='InfoP'>XXX </span></p>
            </div>
        </div>
    </section>
  );
};

export default Nipponinfo;
