module.exports = {
  name: "status",
  description: "Bot status",
  cmd: "!status",
  run(message, args, client) {
    getStatus(args, client);
  },
};

function getStatus(args, client) {
  const newStr = args.toString().replace("/,/g", "-");
  const content = args.toString().replace(/,/g, " ");
  client.user.setPresence({
    activity: {
      name: content,
      type: 0,
    },
  });
}
