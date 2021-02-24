module.exports = {
  name: "spina",
  description: "Sprawdźmy nasze szanse",
  cmd: "!spina, !spina <tekst>",
  run(message, args, client) {
    let chance = (Math.random() * 101).toFixed(2);
    if (args.length) {
      message.reply(`${args}...hm... myślę, że mamy ${chance}% na zdanie.`);
    } else
      message.reply(`ziomuś... spokojnie, mamy całe ${chance}% na zdanie.`);
  },
};
