import React from 'react';

const Albertinfo = () => {
  return (
    <section className="InfoSection">
        <div className='InfoHead Flexbox'>
            <div >
                <h2 className='uppercase'> Project Information </h2>
            </div>
            <div>
                <p> PROJECT NAME:<span className='InfoP'> Webdoc </span></p>
            </div>
        </div>
        <div className="Flexbox">
            <div className="InfoDiv1">
                <p className='uppercase'> Task: <span className='InfoP'>
                    Tell a relevant and personal story.
                    <br></br>
                    Focus on the personal aspects and 
                    your main character.</span> </p>
                <p id="InforYear"> YEAR: <span className='InfoP'>2023 </span></p>
            </div>
            <div className="InfoDiv2">
                <p> CLIENT: <span className='InfoP'> Svane & Bilgrav </span></p>
                <p className='GitLink'>GITHUB URL: <a href='https://github.com/KarolineLerche/ForlagetAlbert.git' target="_blank">https://github.com/KarolineLerche/ForlagetAlbert.git</a></p>
                <p> URL: <span className='InfoP'> XXX </span></p>
            </div>
        </div>
    </section>
  );
};

export default Albertinfo;
