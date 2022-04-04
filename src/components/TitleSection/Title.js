import React from "react";
import useReview from "../../hooks/useReview";
import mainImage from "../../images/main-image.png";
import "./Title.css";

const Title = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
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
            <div className="review">
                <p>total review: {reviews.length}</p>
            </div>
        </div>
    );
};

export default Title;
