import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/review">Review</ActiveLink>
                <ActiveLink to="/chart">Chart</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;
