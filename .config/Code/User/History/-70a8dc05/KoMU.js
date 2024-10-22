//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeCharacter(charName,charGender,charItem,charSpeed){
this.name=charName
this.gender = charGender
this.item = charItem
this.speed = charSpeed
this.taunt = function(){
    console.log('you suck')
}
this.jump = function(){
    console.log('jump')
    
}
this.dodge = function(){
    console.log('you missed')

}
}
let tony = new MakeCharacter('Tony', 'male','skateboard', 'fast')