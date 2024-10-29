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
    "You are a smart AI who knows many stories. your mission is to generate a 12 line short story with a title in basic HTML. Please do not mention html in your answer. Make sure to follow the user instructions. Sign the story with 'Maddy's AI' inside a <strong> element at the END of the story and separate it with a </br>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElemnt = document.querySelector("#story");
  storyElemnt.classList.remove("hidden");

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
