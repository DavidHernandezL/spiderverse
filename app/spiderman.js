class Spiderman {

    constructor(name, age, actor, numberOfMovies, filmStudio) {
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.numberOfMovies = numberOfMovies;
        this.filmStudio = filmStudio;
    }

    getInfo() {
        return `Hi, I'am ${this.actor} from ${this.filmStudio} Studio.`
    }
}

module.exports = Spiderman;