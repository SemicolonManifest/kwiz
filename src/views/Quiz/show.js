import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Quiz from "../../models/Quiz";

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
      <h2>showQuiz {id}</h2>
      {loading ? <p>Loading...</p> : <div>{quiz.title}</div>}
    </div>
  );
};

export default ShowQuiz;