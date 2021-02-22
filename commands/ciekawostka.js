const axios = require("axios");
const URL = "https://uselessfacts.jsph.pl//random.json?language=en";
const translate = require("@vitalets/google-translate-api");
module.exports = {
  name: "ciekawostka",
  description: "bezużyteczne ciekawostki",
  execute(message, args) {
    axios.get(URL).then((res) => {
      translate(res.data.text, { from: "en", to: "pl" })
        .then((response) => {
          console.log(response.text);
          message.reply("słuchaj tego! 😲 " + response.text);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  },
};
