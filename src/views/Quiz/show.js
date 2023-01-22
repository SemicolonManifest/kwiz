import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Quiz from "../../models/Quiz";

import QuizCard from "../components/QuizCard";

const ShowQuiz = () => {
  const [quiz, setQuiz] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();


  if (loading) {
    Quiz.find(id).then((quiz) => {
      setLoading(false);
      setQuiz(quiz);
    });
  }


  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        
          <QuizCard
            id={quiz.id}
            title={quiz.title}
            image={quiz.image}
            text={quiz.description}
            maxWidth={"100%"}
          />
        
      )}
    </div>
  );
};

export default ShowQuiz;