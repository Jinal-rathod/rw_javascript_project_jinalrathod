// Abstraction + Encapsulation

class Vehicle {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.entryTime = Date.now(); // for sorting
  }

  getFee() {
    return 0;
  }
}

// Inheritance

class Car extends Vehicle {
  constructor(number) {
    super(number, "car");
  }
  getFee() {
    return 30;
  }
}

class Bike extends Vehicle {
  constructor(number) {
    super(number, "bike");
  }
  getFee() {
    return 15;
  }
}

class Truck extends Vehicle {
  constructor(number) {
    super(number, "truck");
  }
  getFee() {
    return 50;
  }
}

// Encapsulation

class ParkingManager {
  constructor(limit = 9) {
    this.limit = limit;

    this.slots =
      JSON.parse(localStorage.getItem("slots")) || Array(limit).fill(null);
    this.revenue = Number(localStorage.getItem("revenue")) || 0;
  }

  save() {
    localStorage.setItem("slots", JSON.stringify(this.slots));
    localStorage.setItem("revenue", this.revenue);
  }

  addVehicle(vehicle) {
    const emptyIndex = this.slots.findIndex((slot) => slot === null);
    if (emptyIndex === -1) return false;

    this.slots[emptyIndex] = vehicle;
    this.save();
    return emptyIndex;
  }

  removeVehicle(index) {
    const vehicle = this.slots[index];
    if (!vehicle) return null;

    const fee = vehicle.getFee();
    this.revenue += fee;

    this.slots[index] = null;
    this.save();

    return { vehicle, fee };
  }

  getSlots() {
    return this.slots;
  }
}

const parking = new ParkingManager();

// Rendering UI

const ui = {
  renderSlots() {
    const container = document.getElementById("parkingSlots");
    let slots = [...parking.getSlots()];

    const search = document.getElementById("searchInput").value.toLowerCase();
    const filter = document.getElementById("filterType").value;
    const sort = document.getElementById("sortBy").value;

    // SEARCH
    slots = slots.filter(
      (v) => v === null || v.number?.toLowerCase().includes(search)
    );

    // FILTER
    if (filter !== "all") {
      slots = slots.filter((v) => v === null || v.type === filter);
    }

    // SORT
    slots.sort((a, b) => {
      if (!a || !b) return 0;
      return sort === "latest"
        ? b.entryTime - a.entryTime
        : a.entryTime - b.entryTime;
    });

    // USING forEach() INSTEAD OF map()
    let html = "";
    slots.forEach((v, i) => {
      html += `
      <div class="col-md-4">
        <div class="slot-box ${v ? "occupied" : "free"}">
          <h5>Slot ${i + 1}</h5>
          ${
            v
              ? `
                <p><strong>${v.number}</strong></p>
                <p>${v.type.toUpperCase()}</p>
                <button class="btn btn-danger btn-sm" onclick="removeV(${i})">Remove</button>
              `
              : "<p>Empty</p>"
          }
        </div>
      </div>
    `;
    });

    container.innerHTML = html;
  },
};

function addV() {
  const number = document.getElementById("vehicleNumber").value.trim();
  const type = document.getElementById("vehicleType").value;

  if (!number) return alert("Enter vehicle number");

  const classMap = { car: Car, bike: Bike, truck: Truck };
  const VehicleClass = classMap[type];

  const vehicle = new VehicleClass(number);
  const slotNum = parking.addVehicle(vehicle);

  if (slotNum === false) {
    alert("Parking Full!");
  }

  document.getElementById("vehicleNumber").value = "";
  ui.renderSlots();
}

function removeV(index) {
  const result = parking.removeVehicle(index);
  if (!result) return;

  alert(
    `Receipt\n\nVehicle: ${result.vehicle.number}\nType: ${result.vehicle.type}\nFee: ₹${result.fee}`
  );

  ui.renderSlots();
}

/* Attach event */
document.getElementById("addBtn").addEventListener("click", addV);

/* Initial Render */
ui.renderSlots();
