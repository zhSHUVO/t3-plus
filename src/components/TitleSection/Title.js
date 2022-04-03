import React from "react";
import mainImage from "../../images/main-image.png";
import "./Title.css";

const Title = () => {
    return (
        <div className="title">
            <div className="half-width">
                <h1>
                    TINHIFI <span>T3</span> PLUS
                </h1>
                <p>
                    TINHIFI T3 PLUS, a brand-new product of the T series,
                    combines delicate sound quality, exquisite workmanship,
                    high-end accessories, gorgeous appearance, delicate
                    packaging, and appropriate prices.
                </p>
                <button>Buy Now</button>
            </div>
            <div className="half-width">
                <img src={mainImage} alt="" />
            </div>
        </div>
    );
};

export default Title;
