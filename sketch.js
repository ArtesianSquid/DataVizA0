var min_buffer = -1;

// setup() is called once at page-load
function setup() {
    createCanvas(600,600); // make an HTML canvas element width x height pixels
    noStroke()
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    // print to console every minute
    if (min_buffer != min){
        console.log(min);
        min_buffer = min;
    }
  
    // I decided to create a 12 hour clock
    let hr_clean = hr % 12;
  
    // minute circle vars
    let min_radius = 60;
    let min_m = map(min, 0, 60, min_radius/2, height-min_radius/2) 
  
    // second circle vars
    let sec_radius = 40;
    let sec_m = map(sec, 0, 60, sec_radius/2, width-sec_radius/2)

    background("#F9F7F7");
      
    // hour hand
    fill("#DBE2EF");  
    if (hr_clean < 7) {
      let x2 = hr_clean * 100;
      let y2 = 0;
      let x3 = (hr_clean+1) * 100;
      let y3 = 0;
      triangle(0, height, x2, y2, x3, y3);
    } else {
      let x2 = width;
      let y2 = (hr_clean % 6) * 100;
      let x3 = width;
      let y3 = (hr_clean % 6 + 1) * 100;
      triangle(0, height, x2, y2, x3, y3);
    }

    // minute hand
    fill("#3F72AF");
    ellipse(100, height - min_m, min_radius);

    //console.log("hello");
  
    // second hand
    fill("#112D4E");
    ellipse(sec_m, 500, sec_radius);
  
    //subtle markers to help with hour readability
    fill("#112D4E");
    rect(500, 0, 1, 3);
    rect(400, 0, 1, 3);
    rect(300, 0, 1, 3);
    rect(200, 0, 1, 3);
    rect(100, 0, 1, 3);
    rect(597, 100, 3, 1);
    rect(597, 200, 3, 1);
    rect(597, 300, 3, 1);
    rect(597, 400, 3, 1);
    rect(597, 500, 3, 1);
    
    //am-pm signifier
    textSize(20);
    if (hr>11) {
      text('pm', 560, 30);
    } else {
      text('am', 560, 30);
    }
}