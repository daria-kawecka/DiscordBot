let beer = [
  "Rozmroziłem lodówkę. Zmroziłem browar. Wszystko gra i śpiewa.",
  "Gdzie jest piwo, tam jest życie.",
  "Ten, kto wymyślił piwo, był mędrcem.",
  "Piana jest wesołością piwa.",
  "Tylko piwo sprawia, że pragnienie ma sens.",
  "Dzień ma 24 godziny, skrzynka piwa 24 butelki. Zbieg okoliczności?",
  "Gdzie się piwo pije, tam się dobrze żyje.",
  "Widocznie między kotem a piwem zachodzi zbyt wielka niezgodność charakterów.",
  "Daj mi skończyć piwo. Koniec świata może poczekać.",
  "W całym moim życiu przeszedłem wiele, ale pewien jestem tylko jednego. Na kaca najlepsze jest piwo.",
  "Piwa za żywa, a po śmierci wody.",
];

module.exports = {
  name: "piwo",
  description: "Piwo!",
  execute(message, args) {
    if (args == "dzisiaj") {
      message.reply("no! Jedno, dwa... czy pięć!");
    } else if (args == "jutro") {
      message.reply("co masz zrobić jutro, lepiej zrób dzisiaj :)");
    } else {
      let index = Math.floor(Math.random() * beer.length + 1);
      message.reply(beer[index]);
    }
  },
};
