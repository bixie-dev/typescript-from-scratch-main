// a class device with a brand and a year
class Device {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}

// a class iphone can inherit from device
class IPhone extends Device {
  serialNumber: string;

  constructor(brand: string, year: number, serialNumber: string) {
    super(brand, year);
    this.serialNumber = serialNumber;
  }
}

// create and print an instance of IPhone
let iphone = new IPhone("Apple", 2020, "123-456-789");
console.log(iphone);
