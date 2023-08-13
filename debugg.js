let h;
let m;
let s;
let IntervalID;
window.addEventListener("DOMContentLoaded", () => {
  h = Number.parseInt(prompt("Enter hours: "));
  m = Number.parseInt(prompt("Enter minutes: "));
  s = Number.parseInt(prompt("Enter seconds: "));
  display.textContent = formattime();
});

const formattime = () => {
  let fh = h < 10 ? "0" + h : h;
  let fm = m < 10 ? "0" + m : m;
  let fs = s < 10 ? "0" + s : s;
  fh = isNaN(h) ? "00" : fh; //Check whether value is NaN (null) or not
  fm = isNaN(m) ? "00" : fm; //Check whether value is NaN (null) or not
  fs = isNaN(s) ? "00" : fs; //Check whether value is NaN (null) or not
  return `${fh}:${fm}:${fs}`;
};

btn1.addEventListener("click", () => {
  console.log("click");
  if (h == 0 && m == 0 && s == 0) {
    display.textContent = "00:00:00";
  } else {
    console.log("interval");
    IntervalID = setInterval(startcountdown, 1000);
  }
});
btn2.addEventListener("click", () => {
  clearInterval(IntervalID);
});

const startcountdown = () => {
  console.log("Inside countdown function");
  if (h > 0 || m > 0 || s > 0) {
    console.log("Inside h>0");
    s--;
    if (s == 0) {
        console.log("inside s == 0")
      s = 59;
      m--;
    }
    if (m == -1) {
      m = 59;
      h--;
    }
  }
  display.textContent = formattime();
};
