import React from "react";
import Answers from "../Answers/Answers";
import "./Blogs.css";

const Blogs = () => {
  const blogsData = [
    {
      name: "What is Context Api ?",
      id: 1,
      details:
        "React context api allows data to share information to any component, by storing it in a central place and allowing access to any component. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so others. Usually react is one way binding , it means it can not send data directly , To avoid this problems we use Context Api",
    },
    {
      name: "What is semantic tag ?",
      id: 2,
      details:
        "Semantic tags define the purpose of the element. By using semantic markup, We help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster. And it Also help us to devides code structure for Understand",
    },
    {
      name: "Difference between block and inline block elements",
      id: 3,
      details:
        "A block element always starts on a new line, and fills up the horizontal space left and right on the web page. We can add margins and padding on all four sides of any block element top, right, left, and bottom. On the other hand inlinr block elements are acting like block element but it allow other elements in it's same line lile in line element",
    },
  ];
  return (
    <div className="blogs-container">
      {blogsData.map((data) => (
        <Answers data={data} key={data.id}></Answers>
      ))}
    </div>
  );
};

export default Blogs;
