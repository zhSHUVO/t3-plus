import React from "react";
import useReview from "../../hooks/useReview";
import SingleReview from "../SingleReview/SingleReview";
import "./Review.css";

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className="review-container">
            {reviews.map((review) => (
                <SingleReview key={review.id} review={review}></SingleReview>
            ))}
        </div>
    );
};

export default Review;
