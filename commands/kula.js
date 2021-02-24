const Discord = require("discord.js");
let answers = [
  "100% TAK",
  "Bez obaw, jest dobrze",
  "Mam pewne wątpliwości",
  "To powinno zaczekać",
  "Ha ha ha",
  "Za wcześnie żeby powiedzieć",
  "No... myślę, że tak",
  "Prawie jak tak",
  "Istnieje szansa na powodzenie",
  "Tak - w swoim czasie",
  "Możesz na to liczyć",
  "Nawet ja nie wiem",
  "No chyba... nie",
  "Absolutnie",
  "Może tak, może nie",
];
const answerEmbed = new Discord.MessageEmbed()
  .setColor("#282828")
  .setTitle("🎱 Magiczna kula przemówiła...")
  .setTimestamp();

module.exports = {
  name: "kula",
  description: "Sprawdźmy nasze szanse",
  cmd: "!kula",
  run(message, args, client) {
    if (!args.length) message.channel.send("❌ Ej! Musisz zadać pytanie!");
    else getAnswer(message, args);
  },
};

function getAnswer(message, args) {
  let index = Math.floor(Math.random() * answers.length);
  answerEmbed.spliceFields(0, 2);
  answerEmbed.addFields(
    { name: "❓ Pytanie...", value: args.toString().replace(",", " ") },
    { name: "🎱 Odpowiedź magicznej kuli...", value: answers[index] }
  );
  message.channel.send(answerEmbed);
}
