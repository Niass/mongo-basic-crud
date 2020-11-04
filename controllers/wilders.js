const WilderModel = require("../models/Wilder");

module.exports = {
  getAllWilders: async (req, res) => {
    console.log("getAllWilders called");
    try {
      const wilders = await WilderModel.find({});
      res.send(wilders);
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  create: async (req, res) => {
    try {
      await WilderModel.init();
      const wilder = new WilderModel(req.body);
      await wilder.save();
      res.send(wilder);
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  delete: async (req, res) => {
    try {
      const wilder = await WilderModel.findOneAndDelete({ _id: req.params.id });

      if (!wilder) {
        res.status(404).send();
      }

      res.send({ wilder, message: "wilder deleted" });
    } catch (e) {
      res.status(500).send();
    }
  },
};
