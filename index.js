

function topSliderTxt(){

    const arr=[
        "FREE SHIPPING On Order Over $99",
        "WELCOME TO BLUEFLY: Luxury brands of discounted price",
        "HAVE A QUESTION: Get Help Form FlyRep@Bluefly.com",
    ];

    let i=0;

    let div=document.getElementById("slider");

    let txt=document.createElement("h4");
    txt.innerText=arr[0];

    div.append(txt);
    i++;

    setInterval(function (){
        if(i==3){
            i=0;
        }
        txt.innerText=arr[i];
        i++;

        div.append(txt);
    }, 2500);
}
topSliderTxt();



function topSliderImg(){

    const arr=[
        "./slid/1.png",
        "./slid/2.png",
        "./slid/3.png",
        "./slid/4.png",
        "./slid/5.png",
        "./slid/6.png",
        "./slid/7.png",
    ];

    let i=0;

    let div=document.getElementById("slider1");

    let img=document.createElement("img");
    img.src=arr[0];

    div.append(img);
    i++;

    setInterval(function (){
        if(i==7){
            i=0;
        }
        img.src=arr[i];
        i++;

        div.append(img);
    }, 3000);
}
topSliderImg();

// bottom slider

function bottomSliderImg(){

    const arr=[
        "./slid2/1.png",
        "./slid2/2.png",
        "./slid2/3.png",
        "./slid2/4.png",
    ];

    let i=0;

    let div=document.getElementById("slider2");

    let img=document.createElement("img");
    img.src=arr[0];

    div.append(img);
    i++;

    setInterval(function (){
        if(i==4){
            i=0;
        }
        img.src=arr[i];
        i++;

        div.append(img);
    }, 3000);
}
bottomSliderImg();


