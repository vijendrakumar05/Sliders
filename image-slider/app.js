let flage = 0;

//images total = 5(0,1,2,3,4)

function controller(x) {
    flage = flage + x;
    //left -> flag=2 + (-1)=1
    //right -> flag=2 + 1=3
    slideShow(flage);
 }

slideShow(flage);


function slideShow(num) {
    let slides = document.getElementsByClassName('slide');


    if(num == slides.length) {
        flage = 0;
        num = 0;
    }

    if(num<0) {
        flage = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = 'none';
    }

    slides[num].style.display = 'block';
}

