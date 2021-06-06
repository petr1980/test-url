export class deviceInfo {
  static save(data) {
    return fetch(
      "https://testurl-2cccb-default-rtdb.europe-west1.firebasedatabase.app/device.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then((response) => response.json());
  }

  static getDeviceList() {
    return fetch(
      "https://testurl-2cccb-default-rtdb.europe-west1.firebasedatabase.app/device.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then((response) => response.json());
  }
}

// function addToLocalStorage() {}
