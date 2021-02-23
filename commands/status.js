module.exports = {
  name: "status",
  description: "Bot status",
  cmd: "!status",
  run(message, args, client) {
    getStatus(args, client);
  },
};

function getStatus(args, client) {
  const content = args.toString().replace(",", " ");
  client.user.setPresence({
    activity: {
      name: content,
      type: 0,
    },
  });
}
