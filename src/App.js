import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Title from "./components/TitleSection/Title";
import Review from "./components/UserReview/Review";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Title></Title>}></Route>
                <Route path="/home" element={<Title></Title>}></Route>
                <Route path="/review" element={<Review></Review>}></Route>
                <Route path="/chart" element={<Chart></Chart>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route path="/review" element={<Review></Review>}></Route>
            </Routes>
        </div>
    );
}

export default App;
