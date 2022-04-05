import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blogs">
            <details className="question">
                <summary>Describe "Context Api".</summary>
                <p>
                    When we want to send some data via props in a multi layer
                    component, we have to drill those data through multiple
                    components. Which isn't good and props drilling isn't a good
                    habil. That's where context api comes to help. When we creat
                    a context api, the api will export those datas and we can
                    use those data anywhere. So, this will pass those data
                    without passing them manually every level. We can pass
                    direct value or dynamic value. We'll use useContext to
                    import those values where we need it.
                </p>
            </details>
            <details className="question">
                <summary>What is "Semantic Tag"?</summary>
                <p>
                    In HTMl:5 we've been introduced to semantic tag. This tags
                    clearly describe what they do and where they should be.
                    Like, &lt;form&gt; tag will contain form section. Also we've
                    &lt;section&gt;, which will contain the main section of a
                    website. &lt;nav&gt; will be in the header and contain
                    navigations. &lt;footer&gt; stays in the bottom and so on.
                    Non-semantic tags like &lt;div&gt; can't tell much about
                    what it contains. So, devs are suggest to use this semantic
                    tags in different parts of the web page to organize things.
                </p>
            </details>
            <details className="question">
                <summary>
                    Difference between "Inline" and "Inline Block" element.
                </summary>
                <p>
                    Inline and Inline Block are two of the display properties of
                    css. Inline element stays in line and stays with other
                    element in same line, they take least amount of spaces. They
                    can't have width or height. &lt;span&gt; is a good example
                    of inline element. If we want to assign width/height in an
                    element, we've to use Inline Block. Inline Block element
                    acts like inline element and they accept width/height. Like
                    an &lt;img&gt; tag. We can define how high and wide the
                    image will be in a line with inline block element. So,
                    according to our need, we'll use what we need carefully.
                </p>
            </details>
        </div>
    );
};

export default Blog;
