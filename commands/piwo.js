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
  description: "Bo piwo... w życiu studenta ważne jest",
  cmd: "!piwo, !piwo info, !piwo dzisiaj, !piwo jutro",
  run(message, args, client) {
    if (args == "dzisiaj") {
      message.reply("no! Jedno, dwa... czy pięć!");
    } else if (args == "jutro") {
      message.reply("co masz zrobić jutro, lepiej zrób dzisiaj :)");
    } else if (args == "info") {
      message.reply(
        "``!piwo - bo piwo... w życiu studenta ważne jest. Możliwe argumenty 'dzisiaj','jutro'.``"
      );
    } else {
      let index = Math.floor(Math.random() * beer.length);
      message.reply(beer[index]);
    }
  },
};
