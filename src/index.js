function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let userInstrtuctions = document.querySelector("#user-instructions");
  let apiKey = "40912tb49034f3e73f11616ed1a9396o";
  let prompt = `User instruction: Generate a short story about ${userInstrtuctions.value}`;
  let context =
    "You are a smart AI who knows many stories. your mission is to generate a 12 line short story. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
