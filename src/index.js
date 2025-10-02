function generateLyrics(event) {
  event.preventDefault();

  new Typewriter("#lyrics", {
    strings: ["All my life, I've been searching for you boy"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let lyricFormElement = document.querySelector("#lyric-generator-form");
lyricFormElement.addEventListener("submit", generateLyrics);
