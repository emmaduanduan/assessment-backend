module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    let arr = [
      "Beauty in its various forms appeals to you.",
      "Believe in yourself and others will too.",
      "Believe it can be done.",
      "Better ask twice than lose yourself once.",
      "Bide your time, for success is near.",
      "Carve your name on your heart and not on marble.",
      "Chance favors those in motion.",
      "Competence like yours is underrated.",
    ];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomFortune = arr[randomIndex];
    res.send(randomFortune);
  },

  postColor: (req, res) => {
    res.send(req.body);
  },
};
