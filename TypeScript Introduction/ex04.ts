enum Countries {AR, DE, CH, ES, MX = "Mexico", PA= "Panama", SE= "Sweden"};

const person: {
    name: string;                   // string
    age: number;                    // number
    country: Countries;             // enum
    hobbies: string[];              // array of strings
    isMarried: boolean;             // boolean
    roles: [number, string][];      // array of tuples
} = {
    name: "Manasés Jesús",
    age: 28,
    hobbies: ["coding", "traveling", "playing"],
    country: Countries.MX,
    isMarried: false,
    roles: [[0, "Speaker"], [1, "Author"]]
};

console.log(person.name + " is from " + person.country);
console.log("His roles are:");
person.roles.forEach((role) => console.log(role[1]));
console.log("and his hobbies are:");
person.hobbies.forEach(hobby => console.log(hobby.toUpperCase()));
