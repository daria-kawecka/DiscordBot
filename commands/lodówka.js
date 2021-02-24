const axios = require("axios");
const Discord = require("discord.js");
let URL = "http://www.recipepuppy.com/api/";
const translate = require("@vitalets/google-translate-api");

const recipeEmbed = new Discord.MessageEmbed()
  .setColor("#99ff33")
  .setTitle("🍴 Co powiesz na...");

module.exports = {
  name: "lodówka",
  description: "Kuchenne inspiracje dla studenta :)",
  cmd: "!lodówka, !lodówka <składnik, składnik, ...>",
  async run(message, args, client) {
    if (args.length) {
      await getRecipeWithIngredients(message, args);
    } else getRecipe(message);
  },
};

async function getRecipe(message) {
  let index = Math.floor(Math.random() * 5);
  await axios.get(URL).then((res) => {
    const recipeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("🍴 Co powiesz na...")
      .setDescription("**👉 " + res.data.results[index].title + " 👈**")
      .setThumbnail(res.data.results[index].thumbnail);
    translate(res.data.results[index].ingredients, { from: "en", to: "pl" })
      .then((response) => {
        recipeEmbed.addFields(
          {
            name: "Będziesz potrzebować 👇",
            value: response.text,
          },
          {
            name: "Pełen przepis znajdziesz tutaj 👇",
            value: res.data.results[index].href,
          }
        );
        message.channel.send(recipeEmbed);
      })
      .catch((err) => {
        message.reply(":x: Oops, coś poszło nie tak...");
        console.error(err);
      });
  });
}

async function getIngredients(message, args) {
  URL = "http://www.recipepuppy.com/api/?i=";
  args = args.toString().replace(/,/g, " ");
  console.log(args);
  await translate(args, { from: "pl", to: "en" }).then((response) => {
    let ingredient = response.text.replace(" ", ",");
    URL += ingredient + ","; //remove white spaces between ingredients
  });
}
async function getRecipeWithIngredients(message, args) {
  await getIngredients(message, args);
  axios
    .get(URL)
    .then((res) => {
      const recipeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("🍴 Co powiesz na...")
        .setDescription("**👉 " + res.data.results[0].title + " 👈**")
        .setThumbnail(res.data.results[0].thumbnail);
      translate(res.data.results[0].ingredients, { from: "en", to: "pl" })
        .then((response) => {
          recipeEmbed.addFields(
            {
              name: "Będziesz potrzebować 👇",
              value: response.text,
            },
            {
              name: "Pełen przepis znajdziesz tutaj 👇",
              value: res.data.results[0].href,
            }
          );
          message.channel.send(recipeEmbed);
        })
        .catch((err) => {
          message.reply(":x: Oops, coś poszło nie tak...");
          console.error(err);
        });
    })
    .catch((err) => {
      message.reply(":x: Oops, coś poszło nie tak...");
      console.error(err);
    });
}
