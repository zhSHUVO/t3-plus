import React from "react";
import useReview from "../../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";
import "./Review.css";

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h3>Let's see what our customer said</h3>
            <div className="review-container">
                {reviews.map((review) => (
                    <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>
                ))}
            </div>
        </div>
    );
};

export default Review;
