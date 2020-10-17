/* document.querySelector("button").addEventListener('click',function (){
    var au = new Audio('./sounds/crash.mp3');
    au.play();
});

function handleClick(){
  alert("I got clicked");
}

*/

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',function (){
    sound(this.innerHTML);
  });
}
document.addEventListener('keydown',function(event){
  sound(event.key);
});

    function sound(key){
      var n;
      switch(key){
        case "w":
          n = new Audio('./sounds/crash.mp3');
          n.play();
          break;
        case "a":
          n = new Audio('./sounds/kick-bass.mp3');
          n.play();
          break;
        case "s":
          n = new Audio('./sounds/snare.mp3');
          n.play();
          break;
        case "d":
          n = new Audio('./sounds/tom-1.mp3');
          n.play();
          break;
        case "j":
          n = new Audio('./sounds/tom-2.mp3');
          n.play();
          break;
        case "k":
          n = new Audio('./sounds/tom-3.mp3');
          n.play();
          break;
        case "l":
          n = new Audio('./sounds/tom-4.mp3');
          n.play();
          break;
      }
    }
