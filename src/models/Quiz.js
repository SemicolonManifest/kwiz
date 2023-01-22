import objectMap from "../helpers/objectMap";
import Question from "./Question";

class Quiz {


  constructor(id, title, description, image, active, user_id) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.active = active;
    this.user_id = user_id;
  }

  /* will get all quizz from the api and return an array of Quizz */
  static async all() {
    // Make the API request
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/quizzes?api_token=" +
        process.env.REACT_APP_API_TOKEN
    );
    let data = (await response.json()).data;

    // Create instances for each quiz

    const quizzes = objectMap(
      data,
      (quiz) =>
        new Quiz(
          quiz.id,
          quiz.title,
          quiz.description,
          quiz.image,
          quiz.active,
          quiz.user_id
        )
    );
    return quizzes;
  }

  /* will get a quizz from the api and return a Quizz */
  static async find(id) {
    // Make the API request
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/quizzes/" +
        id +
        "?api_token=" +
        process.env.REACT_APP_API_TOKEN
    );
    let data = (await response.json()).data;

    // Create instances for each quiz

    const quiz = new Quiz(
      data.id,
      data.title,
      data.description,
      data.image,
      data.active,
      data.user_id
    );
    return quiz;
  }

  async questions(){
    // Make the API request
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/quizzes/"+this.id+"/questions?api_token=" +
        process.env.REACT_APP_API_TOKEN
    );
    let data = (await response.json()).data;
    if (data === undefined) {
      data = [];
    }
    data = data.map((question) => {
      return new Question(question.id,question.question, this.id)
        });

    
    return data;
  }

}

export default Quiz;
