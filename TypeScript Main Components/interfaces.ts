// interface automobile
interface Automobile {
  brand: string;
  year: number;
  isFast: boolean;
}

// interface greeting
interface Greeting {
  greet(name: string): void;
}

let M5: Automobile = {
  brand: "BMW",
  year: 2022,
  isFast: true,
};

console.log(M5);

// a class can implement multiple interfaces
class DasAuto implements Automobile, Greeting {
  brand: string;
  year: number;
  isFast: boolean;

  constructor(brand: string, year: number, isFast: boolean = false) {
    this.brand = brand;
    this.year = year;
    this.isFast = isFast;
  }

  public greet (name: string): void {
    console.log(`Hello, ${name}!`);
  }
}

// an interface can inherit from other interfaces
interface RaceDriver extends Automobile, Greeting {
  hasLicense: boolean;
}

// F1 racer class
class F1Racer implements RaceDriver {
  brand: string;
  year: number;
  isFast: boolean;
  hasLicense: boolean;

  constructor(brand: string, year: number, isFast: boolean = false, hasLicense: boolean = false) {
    this.brand = brand;
    this.year = year;
    this.isFast = isFast;
    this.hasLicense = hasLicense;
  }

  public greet (name: string): void {
    console.log(`Hello, ${name}!`);
  }
}
