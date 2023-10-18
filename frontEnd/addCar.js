const addCar = () => {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const numberPlates = document.getElementById("numberPlates").value;

  const carData = {
    title: title,
    image: image,
    price: price,
    number_plates: numberPlates,
  };

  fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Display a message indicating successful car addition
      const message = document.createElement("h4");
      message.innerText = "Car was Added";
      document.body.appendChild(message);

      // Clear input fields after successful addition
      document.getElementById("title").value = "";
      document.getElementById("image").value = "";
      document.getElementById("price").value = "";
      document.getElementById("numberPlates").value = "";
    })
    .catch((error) => {
      // Display an error message if something goes wrong
      const errorMessage = document.createElement("h4");
      errorMessage.innerText =
        "Something went wrong with adding a car: " + error;
      document.body.appendChild(errorMessage);
    });
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", addCar);
