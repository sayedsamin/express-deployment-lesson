function getProgram(req, res) {
  res.status(200).json({
    message: "Hello from the program route",
    data: {
      name: "Sample Program",
      status: "active",
    },
  });
}

module.exports = {
  getProgram,
};
