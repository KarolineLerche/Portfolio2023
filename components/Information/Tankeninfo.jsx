import React from 'react';

const Tankeninfo = () => {
  return (
    <section className="InfoSection">
        <div className='InfoHead Flexbox'>
            <div >
                <h2 className='uppercase'> Project Information </h2>
            </div>
            <div>
                <p> PROJECT NAME: <span className='InfoP'>2. semester // Final Exam</span> </p>
            </div>
        </div>
        <div className="Flexbox">
            <div className="InfoDiv1">
                <p className='uppercase'> Task: <span className='InfoP'>
                    Design and develop an interactive digital prototype 
                    for a company, <br></br>aiming to provide meaningful value to both customers and users </span> </p>
                <p id="InforYear"> YEAR: <span className='InfoP'>2023 </span></p>
            </div>
            <div className="InfoDiv2">
                <p> CLIENT:  <span className='InfoP'>Tanken, Aarhus </span></p>
                <p className='GitLink'>GITHUB URL: <a href='https://github.com/KarolineLerche/TANKENAARHUS.git' target="_blank">https://github.com/KarolineLerche/TANKENAARHUS.git</a></p>
                <p> URL: <a href='http://tanken.sofiehyllen.dk/' target="_blank"><span className='InfoP'>http://tanken.sofiehyllen.dk/ </span></a></p>
            </div>
        </div>
    </section>
  );
};

export default Tankeninfo;
