//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShows{
    constructor (title, length, genre, rating ){
        this.title = title
        this.length = length 
        this.genre = genre
        this.rating = rating
    }
    play(){
        console.log('playing the movie')
    }
    end(){
        console.log('the show is over')
    }
    suggestNext(){
        console.log('would you like to watch this next')
    }
}

