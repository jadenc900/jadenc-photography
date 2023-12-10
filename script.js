document.onkeydown = function(KeyboardEvent){
    if (KeyboardEvent.keyCode == 39){
         let lists = document.querySelectorAll('.bgimg');
         document.getElementById('slide').appendChild(lists[0]);
    } else if (KeyboardEvent.keyCode == 37){
        let lists = document.querySelectorAll('.bgimg');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
}

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.bgimg');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.bgimg');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}