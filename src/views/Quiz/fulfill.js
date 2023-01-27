import "../../styles/quiz.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CForm,
  CFormInput
} from "@coreui/react";

import Quiz from "../../models/Quiz";
import Question from "../../models/Question";

const FulfillQuiz = () => {
  const [quiz, setQuiz] = useState();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  const { id } = useParams();

  if (loading) {
    Quiz.find(id).then(async(quiz) => {
      setLoading(false);
      setQuiz(quiz);
      setLoadingQuestions(true);
    });
  }

  if (loadingQuestions) {
    quiz.questions().then((questions) => {
      setLoadingQuestions(false);
      setQuestions(questions);
    });
  }

  useEffect(() => {
  }, [questions]);

  /* function called when submiting form*/
  let submitForm = async (e) => {
    e.preventDefault();

    let answers = document.querySelectorAll(".fulfillFormInput");
    let answersCount = answers.length;
    let answersSent = 0;

    /* submit answers */
    answers.forEach( async (answer) => {
      let question = await Question.find(answer.name);
      question.answer(answer.value).then(() => {
        confirmSent();
      });
    });

    /* function called when each answer is sent and use a counting system to confirm when they are all sent */
    let confirmSent = () => {
      answersSent++;
      if(answersSent == answersCount){
        window.location.href = "/";
      }
    }
  }

  let questionshtml;

  /* if loading questions show loading message and render them when finished */
  if(loadingQuestions){
    questionshtml = (<div>loading...</div>)
  }else{
    if(questions.length > 0){
    questionshtml = (
      <div className="fulfillForm">
        <CForm method="POST" onSubmit={submitForm}>
          {questions.map((question) => {
            return (
              <div className="fulfillFormInputContainer">
                <CFormInput
                  type="text"
                  className="fulfillFormInput"
                  id={"fulfillFormInput[" + question.id + "]"}
                  label={question.question}
                  name={question.id}
                  required
                />
              </div>
            );
          })}
          <CFormInput type="submit" value="Submit" />
        </CForm>
      </div>
    );}
  }

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CCard
            className="mb-3"
            style={{ Width: "90%", maxHeight: "200px", overflow: "hidden" }}
            key={quiz.id}
          >
            <CRow className="g-0">
              <CCol md={5}>
                <CCardBody>
                  <CCardTitle>{quiz.title}</CCardTitle>
                  <CCardText>{quiz.description}</CCardText>
                  <CCardText>
                    <small className="text-medium-emphasis">John Doe</small>
                  </CCardText>
                </CCardBody>
              </CCol>
              <CCol md={2}>
                <CCardImage
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  style={{
                    maxHeight: "200px",
                    width: "auto",
                    height: "100%",
                    position: "absolute",
                    right: "0",
                  }}
                />
              </CCol>
            </CRow>
          </CCard>
          {questionshtml}
        </div>
      )}
    </div>
  );
};

export default FulfillQuiz;
