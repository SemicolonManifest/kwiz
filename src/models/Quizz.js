class Quizz {

  #id = null;
  #title = null;
  #description = null;
  #image = null;
  #active = null;
  #user_id = null;

  constructor(id, title, description, image, active, user_id) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#image = image;
    this.#active = active;
    this.#user_id = user_id;
  }


  static async all(){
    // will get all quizz from the api and return an array of Quizz
   
    // Make the API request
    const response = await fetch("https://api.example.com/quizzes");
    const data = await response.json();

    // Create instances for each quiz
    const quizzes = data.map((quizData) => {
      return new Quiz(quizData);
    });

    return quizzes;
    

  }

  id() {
    return this.#id;
  }

  title() {
    return this.#title;
  }

  description() {
    return this.#description;
  }

  image() {
    return this.#image;
  }

  active() {
    return this.#active;
  }

  user() {
    throw new Error("Not implemented yet");
  }
}

module.exports.Quizz = Quizz;