import React from "react";
import "./SingleReview.css";

const SingleReview = (props) => {
    const { name, ratings, img, comment } = props.review;
    return (
        <div className="review">
            <div className="identity">
                <p>{name}</p>
                <img src={img} alt="" />
            </div>
            <p>Raings: {ratings} star</p>
            <p>{comment}</p>
        </div>
    );
};

export default SingleReview;
