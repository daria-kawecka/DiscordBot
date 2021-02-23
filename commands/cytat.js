module.exports = {
  name: "cytat",
  description: "Wysyła losowy cytat z pobranych wiadomości",
  cmd: "!cytat",
  async run(message, args, client) {
    await getMessages(message, client);
  },
};

async function getMessages(message, client) {
  let channel = client.channels.cache.find((ch) => ch.name === "cytaty");
  let quotes = [];
  await channel.messages.fetch().then((messages) =>
    messages.map((message) => {
      quotes.push(message.content);
    })
  );
  randomNum(message, quotes);
  return quotes;
}

async function randomNum(message, quotes) {
  let number = Math.floor(Math.random() * quotes.length);
  message.reply("kiedyś ktoś powiedział " + "*" + quotes[number] + "*");
}
