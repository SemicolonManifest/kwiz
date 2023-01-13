import env from "react-dotenv";
import objectMap from "../helpers/objectMap";

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
      env.API_URL + "/quizzes?api_token=" + env.API_TOKEN
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

}

export default Quiz;
