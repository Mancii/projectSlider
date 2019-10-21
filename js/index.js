var imglist = document.querySelectorAll('.img-item'); // semi array => NodeList

var lightBoxCon = document.querySelector('.lightBox-container')

var lightBox = document.querySelector('.lightBox');

var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var current = 0;
var body = document.getElementById('body');
var imgArray = [];

for(var i=0;i<imglist.length;i++){
    imgArray.push(imglist[i]);

    imglist[i].addEventListener("click",function(ev){
        current = imgArray.indexOf(ev.target);
        var imgPath = ev.target.src;
        lightBox.style.backgroundImage = "url("+imgPath +")"
        lightBoxCon.classList.add('show');
        
    })
}

close.addEventListener("click",function(){
    lightBoxCon.classList.remove('show');
})

// lightBox.addEventListener('click',function(){
//     lightBoxCon.classList.remove('show');
// })

next.addEventListener("click",function(){
    current = ++current;
    if(current>=imglist.length){
        current=0;
    }
    var ourCurrentImage = imglist[current].src;
    lightBox.style.backgroundImage = "url("+ ourCurrentImage +")";
})

prev.addEventListener("click",function(){
    current = --current;
    
    if(current<0){
        current=imglist.length-1
    }
    var ourCurrentImage = imglist[current].src;
    lightBox.style.backgroundImage = "url("+ ourCurrentImage +")";
})

document.addEventListener('keydown',function(ev){
    if(ev.keyCode == 39){
        current = ++current;
        if(current>=imglist.length){
        current=0;
        }
        var ourCurrentImage = imglist[current].src;
        lightBox.style.backgroundImage = "url("+ ourCurrentImage +")";
    }
    else if(ev.keyCode == 37){
        current = --current;
        if(current<0){
            current=imglist.length-1
        }
        var ourCurrentImage = imglist[current].src;
        lightBox.style.backgroundImage = "url("+ ourCurrentImage +")";
    }
    else if(ev.keyCode==27){
        lightBoxCon.classList.remove('show');
    }
})





