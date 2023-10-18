import db from "../db.js";

const GET_ALL_CARS = async (req, res) => {
  try {
    const cars = await db.query("SELECT * from cars");
    return res.json({ cars: cars.rows });
    console.log(cars);
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const ADD_CAR = async (req, res) => {
  try {
    const car =
      await db.query(`INSERT INTO public.cars(title, image, price, number_plates)
    VALUES ('${req.body.title}', '${req.body.image}', '${req.body.price}', '${req.body.number_plates}')`);
    return res.status(201).json({ response: "Task was added", task });
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

const DELETE_CAR = async (req, res) => {
  try {
    const car = await db.query(`DELETE from cars WHERE id=${req.params.id} `);
    return res.json({ response: task, status: "Car was DELETED" });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ response: "something went wrong" });
  }
};

// const GET_CAR_BY_ID = async (req, res) =>{
//   try{
//     const
//   }
// }
export { GET_ALL_CARS, ADD_CAR, DELETE_CAR };
