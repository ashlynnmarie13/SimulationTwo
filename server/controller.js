const getHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ getHousesError: err }));
};

const addHouse = (req, res, next) => {
  const {
    house_name,
    address,
    city,
    state,
    zipcode,
    monthly_mortgage,
    rent,
    image
  } = req.body;
  const db = req.app.get("db");

  db.addHouse([
    house_name,
    address,
    city,
    state,
    zipcode,
    monthly_mortgage,
    rent,
    image
  ])
    .then(house => res.status(200).send(house))
    .catch(err => res.status(500).send({ addHouseError: "Bad Request" }));
};

const deleteHouse = (req, res, next) => {
  const { params } = req;
  const db = req.app.get("db");

  //looking at node 2
  db.deleteHouse()
    .delete_product(params.id)
    .then(() => res.status(200))
    .catch(err => res.status(500).send({ deleteHouseError: "Bad Request" }));
};
module.exports = {
  getHouses,
  addHouse,
  deleteHouse
};
