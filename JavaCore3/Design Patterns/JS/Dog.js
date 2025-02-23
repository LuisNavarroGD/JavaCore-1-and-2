const dog = () => {
    const sound = 'woof'
    return {
        talk: () => {
            console.log(sound)
        }
    }
}

const sniffles = dog()
sniffles.talk()

var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]


var names = animals.map(function (animal) {
    return animal.name + ' is a ' + animal.species
})


var names = animals.map((animal) => animal.name + ' is a ' + animal.species)

console.log(names)