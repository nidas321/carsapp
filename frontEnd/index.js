const displayCars = async () => {
  try {
    const response = await fetch("http://localhost:3000/cars");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const cars = data.cars;

    const carContainer = document.getElementById("carContainer");
    carContainer.innerHTML = "";

    if (cars.length === 0) {
      carContainer.innerHTML = "<p>No cars available.</p>";
      return;
    }

    cars.forEach((car) => {
      const carItem = document.createElement("div");
      carItem.classList.add("car-item");

      const carHeader = document.createElement("h1");
      carHeader.innerText = `${car.title} - $${car.price}`;

      const carImage = document.createElement("img");
      carImage.src = car.image;

      const carPlates = document.createElement("h3");
      carPlates.innerText = `Number Plates: ${car.number_plates}`;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteCar(car.id);
      });

      carItem.appendChild(carHeader);
      carItem.appendChild(carImage);
      carItem.appendChild(carPlates);
      carItem.appendChild(deleteButton);

      carContainer.appendChild(carItem);
    });
  } catch (error) {
    console.error("Error fetching car data:", error);
  }
};

window.addEventListener("load", displayCars);

const deleteCar = async (carId) => {
  try {
    const response = await fetch(`http://localhost:3000/cars/${carId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the car.");
    }

    // Reload the page after successful deletion
    location.reload();
  } catch (error) {
    console.error("Error deleting car:", error);
    console.log("Failed to delete car with ID:", carId);
  }
};

window.addEventListener("load", displayCars);
