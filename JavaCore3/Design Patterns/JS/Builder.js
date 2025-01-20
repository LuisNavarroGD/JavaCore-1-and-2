class Person {
    constructor(name,lastname,age,country, city, hobbies) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName() {
        return this.name + " " + this.lastname;
    }
}

class PersonBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = "";
        this.lastname = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name) {
        this.name = name;
        return this;
    }
    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setCountry(country) {
        this.country = country;
        return this;
    }
    setCity(city) {
        this.city = city;
        return this;
    }
    
    addHobby(hobby) {
        this.hobbies.push(hobby);
        return this;
    }

    build() {
        const person = new Person(
            this.name,
            this.lastname,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }
}

const LuisBuilder = new PersonBuilder();
const luis = LuisBuilder.setName("Luis")
    .setLastname("Garcia")
    .addHobby("Comer")
    .addHobby("Dormir")
    .build();

console.log(luis);
    
const MariaBuilder = new PersonBuilder();
const maria = MariaBuilder.setName("Maria")
    .setLastname("Garcia")
    .setAge(30)
    .setCountry("Mexico")
    .setCity("CDMX")
    .addHobby("Comer")
    .addHobby("Dormir")
    .build();

console.log(maria);