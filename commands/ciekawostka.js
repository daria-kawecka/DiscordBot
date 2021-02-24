const axios = require("axios");
const URL = "https://uselessfacts.jsph.pl//random.json?language=en";
const translate = require("@vitalets/google-translate-api");
module.exports = {
  name: "ciekawostka",
  description: "bezużyteczne ciekawostki",
  cmd: "!ciekawostka",
  run(message, args, client) {
    console.log("jestem");
    axios.get(URL).then((res) => {
      translate(res.data.text, { from: "en", to: "pl" })
        .then((response) => {
          message.reply(" słuchaj tego! 😲 " + response.text);
        })
        .catch((err) => {
          message.reply(":x: Oops, coś poszło nie tak...");
          console.error(err);
        });
    });
  },
};
