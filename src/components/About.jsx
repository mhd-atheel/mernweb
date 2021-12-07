import React from 'react'

function About() {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                           <img src="/assets/i2.jpeg" alt="about" className="w-75 mt-5" /> 
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2"> Who <b>We</b> Are</h1>
                            <hr className="w-50" />
                            <p className="lead mb-4">
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Consectetur veritatis beatae magni quidem minima provident
                               , deserunt quod harum commodi odio consequuntur cumque a ne
                               sciunt porro nihil rem reiciendis illo blanditiis officiis 
                               quasi. Odio corporis aperiam consequuntur adipisci sapiente
                                nemo magni nulla porro hic. Dolores, praesentium deserunt!
                                 Id cum aspernatur hic?
                            </p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Get Start</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">contact Us</button>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
