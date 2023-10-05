import './home.css';


function Home(){


    return(
        <div className="home page">


            <div className="home-banner">
                <section className="skewed-bg">
                    <div className="box">
                        <div className="left">
                            <div className="typewrite">
                                <h3>IoT Market™</h3>
                            </div>
                            <h4>Best components, at the best price</h4>
                        </div>
                        <div className="right">
                            <div className="icon">
                                &#60; / &#62;
                            </div>
                        </div>

                    </div>
                </section>
            </div>


            <div className="award">
                <img src="/images/award.png" alt="award"/>
                <h3><b><i>2nd place</i></b> in <b><i>Top 10</i></b> online stores in 2023</h3>
            </div>

            <div className="popular">
                <div>
                    <h4>
                        Microcontrollers
                    </h4>
                </div>
                <div>
                    <h4>
                        SoC
                    </h4>
                </div>
                <div>
                    <h4>
                        Electronics
                    </h4>
                </div>
                <div>
                    <h4>
                        IoT Modules
                    </h4>
                </div>
            </div>
        </div>
        
    );
}

export default Home;