function MakePerson(name, designation, city, age){
    this.pName = name;
    this.pDesignation = designation;
    this.pCity = city;
    this.pAge = age;
    this.fullName = function(){
       return this.pName + " " + "Adnan"
    }
}


const personOne = new MakePerson('Morshed', 'Software Engineer', 'Zurich', 33);
console.log(personOne.fullName());


// implement onclick 

const constructor = document.getElementById('constructor');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    constructor.innerHTML = `${personOne.pAge + " " + personOne.pName + " " + personOne.pCity}`;
})




