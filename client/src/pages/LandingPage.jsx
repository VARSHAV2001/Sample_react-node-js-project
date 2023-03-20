import React from "react";
import LandingNavBar from "../components/navbar";

const LandingPage = () => {
    return (
        <div>
            <LandingNavBar/>
            <div className="main">
                <div className="land-content">
                    <h1 className="land-head">Cab booking system</h1>
                    <p className="land-paragraph">
                        MyCab offers the best cab operators and drivers for 
                        every prime location across <br/>India to make your journey hassle-free. 
                        We assure you an unforgettable experience while traveling with us.<br/> 
                        We have tied up with 4000+ cab operators to offer the best online cab booking facility.<br/>
                        Customers can choose a cab from the different categories of cabs including <br/> Hatchback, sedans, SUVs, and many more. 
                        This online taxi booking facility of MyCab also offers taxi<br/> services at discounted rates.
                        So, what are you waiting for? Book your cab with MyCab and travel comfortably.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
