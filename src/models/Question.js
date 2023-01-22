class Question {
  constructor(id, question, quiz_id) {
    this.id = id;
    this.question = question;
    this.quiz_id = quiz_id;
  }

  static async find(id) {
    // Make the API request
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/questions/" +
        id +
        "?api_token=" +
        process.env.REACT_APP_API_TOKEN
    );
    let data = (await response.json()).data;

    
    // Create instances for each quiz

    const question = new Question(
      data.id,
      data.question,
      data.quiz_id
    );
    return question;
  }

  async answer(value){
    "http://api.kwiz.mycpnv.ch/api/answers?api_token=dhnZGWq1oOTMiquCSRZQ7y2McSgpec3p7t4v2vOHX1vMn4I51nthFIyQV8X6phMfYEW8AfFiOja49uzh&value=test&correct=1&question_id=1"
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/answers" +
        "?api_token=" +
        process.env.REACT_APP_API_TOKEN +
        "&value=" +
        value +
        "&correct=" +
        1 +
        "&question_id=" +
        this.id,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(response);
  }
}

export default Question;