var number = 0;

document.addEventListener("click", function(){
    number ++;
    var thing = document.createElement('div');
    document.body.appendChild(thing);
    thing.classList.add('thing')

    var x = event.clientX
    var y = event.clientY
    thing.style.left = x - 25 + 'px';
    thing.style.top = y - 25 + 'px';
    thing.style.position = 'absolute';



})

function Main(){
    things = document.getElementsByClassName('thing');
    if (number >= 3){
        things.style.animation = 'move 1s';
    }
}

setInterval(Main, 100)