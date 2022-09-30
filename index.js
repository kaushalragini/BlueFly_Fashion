function topSliderImg() {
  const arr = [
    "./slid/1.png",
    "./slid/2.png",
    "./slid/3.png",
    "./slid/4.png",
    "./slid/5.png",
    "./slid/6.png",
    "./slid/7.png",
  ];

  let i = 0;

  let div = document.getElementById("slider1");

  let img = document.createElement("img");
  img.src = arr[0];

  div.append(img);
  i++;

  setInterval(function () {
    if (i == 7) {
      i = 0;
    }
    img.src = arr[i];
    i++;

    div.append(img);
  }, 3000);
}
topSliderImg();

// bottom slider

function bottomSliderImg() {
  const arr = [
    "./slid2/1.png",
    "./slid2/2.png",
    "./slid2/3.png",
    "./slid2/4.png",
  ];

  let i = 0;

  let div = document.getElementById("slider2");

  let img = document.createElement("img");
  img.src = arr[0];

  div.append(img);
  i++;

  setInterval(function () {
    if (i == 4) {
      i = 0;
    }
    img.src = arr[i];
    i++;

    div.append(img);
  }, 3000);
}
bottomSliderImg();

function show() {
  for (i = 1; i <= 4; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
  }
}
