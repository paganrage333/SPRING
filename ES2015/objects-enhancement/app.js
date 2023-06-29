function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

// const favNum = 42;

// const instructor = {
//     firstName: 'colt',
//     [favNum]: 'That is my favorite!'
// }

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

const d = createAnimal("dog", "bark", "woof!")

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}