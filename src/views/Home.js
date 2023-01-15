import React, {useState,useEffect} from "react";

import QuizzCard from "./components/QuizzCard";

import Quiz from "../models/Quiz";

const Home = () => {

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    Quiz.all().then((quizzes) => {
      let quizzesArray = Object.keys(quizzes).map((key) => 
        quizzes[key],
      );
      setLoading(false);
      setQuizzes(quizzesArray);

    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-img").forEach((card)=> {
      console.log(card);
      card.addEventListener("error", function (card) {
        card.src = "../no-image.png";
        console.log("changed image");
        console.log (card);
      });
    });
  });
  
  return (
    <div className="container">
      <h2>Homepage</h2>
      <div className="cards">
        {quizzes.map((quiz) => (
          <QuizzCard
            id={quiz.id}
            title={quiz.title}
            image={quiz.image}
            text={quiz.description}
          />
        ))}
        <QuizzCard />
      </div>
    </div>
  );
};

export default Home;
