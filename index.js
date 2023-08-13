btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;
let IntervalID;
let h;
let m;
let s;
// Set Timer Button
btn4.addEventListener("click", () => {
  s = Number.parseInt(prompt("Enter Seconds: "));
  m = Number.parseInt(prompt("Enter Minutes: "));
  h = Number.parseInt(prompt("Enter Hours: "));
  while (values()) {
    alert("Provide Valid Time!");
    s = Number.parseInt(prompt("Enter Seconds: "));
    m = Number.parseInt(prompt("Enter Minutes: "));
    h = Number.parseInt(prompt("Enter Hours: "));
  }
  display.textContent = formattime();
  btn1.disabled = false;
  btn3.disabled = false;
});
// Check Values
const values = () => {
  console.log("Inside values");
  const invalidsec = isNaN(s);
  const invalidmin = isNaN(m);
  const invalidhour = isNaN(h);
  return invalidsec || invalidmin || invalidhour;
};
// Format Time
const formattime = () => {
  fs = s < 10 ? "0" + s : s;
  fm = m < 10 ? "0" + m : m;
  fh = h < 10 ? "0" + h : h;
  return `${fh}:${fm}:${fs}`;
};

// Reset Button
btn3.addEventListener("click", () => {
  clearInterval(IntervalID);
  s = m = h = 0;
  display.textContent = "00:00:00";
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
});
// Stop Button
btn2.addEventListener("click", () => {
  clearInterval(IntervalID);
  btn1.disabled = false;
  btn2.disabled = true;
});

// Start Button
btn1.addEventListener("click", () => {
  console.log("Click");
  btn2.disabled = false;
  btn1.disabled = true;
  IntervalID = setInterval(timer, 1000);
});

const timer = () => {
  console.log("inside interval");
  if (s > 0 || m > 0 || h > 0) {
    console.log("Inside");
    s--;
    if (s == -1) {
      s = 59;
      m--;
    }
    if (m == -1) {
      m = 59;
      h--;
    }
  }
  if (h == 0 && m == 0 && s == 0) {
    console.log("Stop Timer");
    clearInterval(IntervalID);
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    playaudio();
  }
  display.textContent = formattime();
};
let a;
const playaudio = () => {
  audioplayer.play();
   a = setInterval(pauseaudio, 4500);
};
const pauseaudio = () => {
  audioplayer.pause();
  audioplayer.currentTime = 0;
  clearInterval(a)
};
