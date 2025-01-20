class Persona {
    private name: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies: string[];

    constructor(
        name: string,
        age: number,
        country: string,
        city: string,
        hobbies: string[]
    ) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(): string {
        return this.name + " " + this.age;
    }
 }

 interface PersonBuilder{
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilder;
    setLastName(lastName: string): PersonBuilder;
    setAge(age: number): PersonBuilder;
    setCountry(country: string): PersonBuilder;
    addHobby(hobby: string): PersonBuilder;
    build(): Persona;
 }

 class NormalPersonBuilder implements PersonBuilder{
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor(){
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }

    reset(): void{
        this.name = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }

    setName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }

    setLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }

    setCountry(country: string): PersonBuilder {
        this.country = country;
        return this;
    }

    addHobby(hobby: string): PersonBuilder {
        this.hobbies.push(hobby);
        return this;
    }

    build(): Persona {
        const person = new Persona(
            this.name + " " + this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }
 }

 class PersonDirector{
    private personBuilder: PersonBuilder;

    constructor(personBuilder: PersonBuilder){
        this.personBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: PersonBuilder){
        this.personBuilder = personBuilder;
    }

    createSimplePerson(name: string, lastName: string){
        this.personBuilder
            .setName(name)
            .setLastName(lastName);
    }
 }

 //creacion 1
 const personBuilder = new NormalPersonBuilder();
 const juan = personBuilder
    .setName('Juan')
    .setLastName('Perez')
    .addHobby('Comer')
    .addHobby('Dormir')
    .build();

 console.log(juan);
 //creacion 2
 const director = new PersonDirector(personBuilder);
 director.createSimplePerson('john', 'cena');
 const johnCena = personBuilder.build();
 console.log(johnCena);

