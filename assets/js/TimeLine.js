const sadem1 = "assets/img/timeline/sadem1.jpg";
const yahya1 = "assets/img/timeline/yahya1.jpg";
const yahya2 = "assets/img/timeline/yahya2.jpg";
const arkam1 = "assets/img/timeline/numbers1.jpg";

const arr1 = "assets/img/icons/arrowF1.png";
const arr2 = "assets/img/icons/arrowF2.png";

let canclose = true;
let img_pos = 0;
let images = [];

const you_cant_close_this_window = () => {
  canclose = false;
};

const you_can_close_this_window = () => {
  canclose = true;
};

const you_can_close_this_window_mu = () => {
  canclose = false;
  setInterval(() => {
    canclose = true;
  }, 1000);
};

const closeTimeLineImg = () => {
  if (canclose) {
    parent.innerHTML = erase;
  }
};

let erase = ``;
let parent = document.getElementById("timeline_images_container");

const showTimeLineImg = (year) => {
  if (year) {
    images = TimeLine[year].images;
    img_pos = 0;
    parent.innerHTML = content();
  } else {
    parent.innerHTML = erase;
  }
};

const nextImg = () => {
  if (img_pos < images.length - 1) {
    img_pos++;
  } else {
    img_pos = 0;
  }
  var img = document.getElementById("img_container");
  img.innerHTML = image();

  var puce = document.getElementById("puces_container");
  puce.innerHTML = puces();
};

const prevImg = () => {
  if (img_pos > 0) {
    img_pos--;
  } else {
    img_pos = images.length - 1;
  }
  var img = document.getElementById("img_container");
  img.innerHTML = image();

  var puce = document.getElementById("puces_container");
  puce.innerHTML = puces();
};

const setImg = (pos) => {
  img_pos = pos;

  var img = document.getElementById("img_container");
  img.innerHTML = image();

  var puce = document.getElementById("puces_container");
  puce.innerHTML = puces();
};

const close = `  
onmouseenter="you_cant_close_this_window()" 
onmouseleave="you_can_close_this_window()"
onmouseup="you_can_close_this_window_mu()"
`;

const next = `onclick="nextImg()"`;
const prev = `onclick="prevImg()"`;

const content = () => {
  return `
<div class="timeline-images" onclick="closeTimeLineImg()"  >
  <div class="animate-popup" >
    <div class="container-imgs" >
      <div id="img_container" >
        <img class="main" id="timeline-img" src='${images[img_pos]}' ${close} /> 
      </div>
    </div>
  </div>
</div>`;
};

// const content2 = () => {
//   return `
// <div class="timeline-images" onclick="closeTimeLineImg()"  >
//   <div class="animate-popup" >
//   ${
//     "" /*<h1 class="title" >First screening in<strong style="color: #00C2FF"  > Morocco</strong></h1>*/
//   }
//     <div class="container-imgs" >
//       <img class="prev-img xs-no" src='${arr1}' ${close} ${prev} />
//       <div id="img_container" >
//         <img class="main" id="timeline-img" src='${
//           images[img_pos]
//         }' ${close} />
//       </div>
//       <img class="next-img xs-no" src='${arr2}' ${close} ${next} />
//     </div>
//     <div id="puces_container" >${puces()}<div>
//   </div>
// </div>`;
// };

const image = () => {
  return `<img class="main image-animate" id="timeline-img" src='${images[img_pos]}' ${close} />`;
};

const puces = () => {
  let pcs = `<img class="prev-img xs-yes " src='${arr1}' ${close} ${prev} />`;
  images.map((ps, id) => {
    pcs =
      pcs +
      ` <span
      onclick="setImg(${id})"
      ${close}
      class="puce ${id == img_pos ? "active-puce" : ""}" ></span>`;
  });
  pcs = pcs + `<img class="next-img xs-yes " src='${arr2}' ${close} ${next} />`;
  return pcs;
};

const TimeLine = {
  2022: {
    images: [yahya1],
  },
  2021: {
    images: [arkam1],
  },
  2020: {
    images: [sadem1],
  },
};
