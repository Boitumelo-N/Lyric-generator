function displayLyrics(response) {
  new Typewriter("#lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateLyrics(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2b5oe2d82944a30ca14a100tfe32ce6e";
  let context = ` User instructions: You are music expert of all genres and love to write lyrics. Make sure to follow the user instructions`;
  let prompt = `Generate lyrics about ${instructionsInput.value}. Your mission is to generate a verse and chorus for a song. Create a title, verse 1 and chorus headings and seperate each line with a <br />. In HTML format but don't state that its in HTML for the user`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let lyricsElement = document.querySelector("#lyrics");
  lyricsElement.classList.remove("hidden");
  lyricsElement.innerHTML = `<div class="generating">Generating your lyrics for you about ${instructionsInput.value}</div>`;

  console.log("Generating lyrics");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayLyrics);
}

let lyricFormElement = document.querySelector("#lyric-generator-form");
lyricFormElement.addEventListener("submit", generateLyrics);
