const axios = require("axios");
const Discord = require("discord.js");
const { NASA_KEY } = require("../config.json");

const URL = "https://api.nasa.gov/planetary/apod?count=5&api_key=" + NASA_KEY;

const Mars_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=" +
  NASA_KEY;

module.exports = {
  name: "nasa",
  description: "Bo nawet student czasem musi się czegoś nauczyć...",
  cmd: "!NASA, !NASA Mars",
  async run(message, args, client) {
    if (args[0] === "Mars") {
      await getMarsPhoto(message, args);
    } else await getRandomPhoto(message, args);
  },
};

async function getRandomPhoto(message, args) {
  await axios
    .get(URL)
    .then((res) => {
      let index = Math.floor(Math.random() * res.data.length);
      console.log(res.data.length, res.data[index].url);
      const MarsEmbed = new Discord.MessageEmbed()
        .setColor("#6666ff")
        .setTitle("🚀 WOW! 🚀")
        .setImage(res.data[index].url)
        .setFooter(res.data[index].title)
        .setTimestamp(res.data[index].date);
      message.channel.send(MarsEmbed);
    })
    .catch((err) => {
      message.reply(":x: Oops, coś poszło nie tak...");
      console.error(err);
    });
}

async function getMarsPhoto(message, args) {
  await axios
    .get(Mars_URL)
    .then((res) => {
      let index = Math.floor(Math.random() * res.data.photos.length);
      const MarsEmbed = new Discord.MessageEmbed()
        .setColor("#ff9966")
        .setTitle("🪐 Wow, to Twoje losowe zdjęcie z Marsa!!!")
        .setImage(res.data.photos[index].img_src)
        .setFooter("Łazik " + res.data.photos[index].rover.name)
        .setTimestamp();
      message.channel.send(MarsEmbed);
    })
    .catch((err) => {
      message.reply(":x: Oops, coś poszło nie tak...");
      console.error(err);
    });
}
