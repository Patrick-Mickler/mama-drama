  //Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
  function MakeCar(charHeight,charGender,charStrength,charXp){
    this.height = charHeight
    this.gender = charGender
    this.strength= charStrength
    this.xp = charXp
    this.win = function(){
      alert('you win')
    }
    this.loss= function(){
      alert(`you lose`)
    }
    this.taunt=function(){
      alert('you cant hurt me ')
    }
  }