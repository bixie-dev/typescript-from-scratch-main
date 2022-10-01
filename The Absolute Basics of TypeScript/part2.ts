// a class animal with a name
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

let fido: Animal = new Animal("Fido");

console.log(fido);
console.log(fido.getName());
