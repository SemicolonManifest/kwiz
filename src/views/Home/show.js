import React, {useState,useEffect} from "react";

import QuizCard from "../components/QuizCard";

import Quiz from "../../models/Quiz";
import Boop from "../components/animations/Boop";

const Home = () => {

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    /* load all quizzes */
    Quiz.all().then((quizzes) => {
      let quizzesArray = Object.keys(quizzes).map((key) => 
        quizzes[key],
      );
      setLoading(false);
      setQuizzes(quizzesArray);
    });
  }
  
  return (
    <div className="container">
      <h2>Homepage</h2>
      <div className="cards">
        {quizzes.map((quiz) => (
          <Boop rotation={10}>
            <a href={`/quizzes/${quiz.id}/fulfill`}>
              <QuizCard
                id={quiz.id}
                title={quiz.title}
                image={quiz.image}
                text={quiz.description}
              />
            </a>
          </Boop>
        ))}
      </div>
    </div>
  );
};

export default Home;
