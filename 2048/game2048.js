let boxN = document.getElementsByClassName('box')
const box = []
let box2 = []


document.onkeydown = blockTypeMovie;

for (var i = 0; i < boxN.length; i++) {
  box[i] = 0

}
function nshanaku() {
  let hh=0
  for (var i = 0; i < boxN.length; i++) {

    boxN[i].innerHTML = box[i]
    if (box[i]==0) {
      boxN[i].style.color = "white"
      boxN[i].style.backgroundColor  = "white"
    }
    if (box[i]!=0) {
      boxN[i].style.backgroundColor  = "#31334d"
    }

    if (box[i]==2048) {
      boxN[i].style.backgroundColor  = "#f35912"
    }
    if (box[i]==1024) {
      boxN[i].style.backgroundColor  = "#752424"
    }
    if (box[i]==512) {
      boxN[i].style.backgroundColor  = "#ad0e0e"
    }
    if (box[i]==256) {
      boxN[i].style.backgroundColor  = "#530707"
    }
    if (box[i]==128) {
      boxN[i].style.backgroundColor  = "#646848"
    }
    if (box[i]==64) {
      boxN[i].style.backgroundColor  = "#909668"
    }
    if (box[i]==32) {
      boxN[i].style.backgroundColor  = "#3e6347"
    }
    if (box[i]==16) {
      boxN[i].style.backgroundColor  = "#597961"
    }
    if (box[i]==8) {
      boxN[i].style.backgroundColor  = "#719361"
    }
    if (box[i]==4) {
      boxN[i].style.backgroundColor  = "#646b61"
    }

  }
  let hashiv =box.map((f)=>{
    hh+=f
  })
  document.getElementById('hashiv').innerHTML=hh

}




nshanaku();

random = (min, max) => {

  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (Math.round(rand) == -0) {
    return 0
  }
  if (max == 3 && min == 1) {
    if (Math.round(rand) == 3) {
      return 4
    } else {
      return 2
    }
  }
  return Math.round(rand);

}

freeBox = () => {
  free = 0
  for (var i = 0; i < boxN.length; i++) {
    if (box[i] == 0) {
      free++
    }
  }
  return free
}

//nshanakum tvi nshanakman boxsi @ntrum
function nshanakum(k, t) {
  let a = 0

  for (var i = 0; i < boxN.length; i++) {
    if (box[i] == 0) {
      if (a == k) {
        box[i] = t
        nshanaku()
        return
      } else {
        a++
      }
    }
  }
}


function randomNambe(k) {
  let adr = random(0, freeBox() - 1)
  if (freeBox() <= 1) {


  }

  nshanakum(adr, k)

}

function swap(arr, a, b) {
  arr[a] = arr.splice(b, 1, arr[a])[0];
}

function daxmove() {
  for (var t = 0; t < 4; t++) {

    for (var j = 0; j < 17; j += 4) {


      for (var i = 0 + j; i < 3 + j; i++) {

        if (box[i] == 0) {
          box[i] = box.splice(i + 1, 1, box[i])[0]
        }

      }

    }
  }

  for (var j = 0; j < 13; j += 4) {


    for (var i = 0 + j; i < 3 + j; i++) {

      if (box[i] == box[i + 1] && box[i] != 0) {

        box[i] = box[i] * 2
        box[i + 1] = 0;
      }

    }

  }
  for (var t = 0; t < 4; t++) {

    for (var j = 0; j < 17; j += 4) {


      for (var i = 0 + j; i < 3 + j; i++) {

        if (box[i] == 0) {
          box[i] = box.splice(i + 1, 1, box[i])[0]
        }

      }

    }
  }
  nshanaku()


}

function ajmove() {
  for (var t = 0; t < 4; t++) {

    for (var j = 0; j < 17; j += 4) {


      for (var i = 3 + j; i > j; i--) {

        if (box[i] == 0) {
          box[i] = box.splice(i - 1, 1, box[i])[0]
        }

      }

    }
  }

  for (var j = 0; j < 13; j += 4) {


    for (var i = 3 + j; i > j; i--) {

      if (box[i] == box[i - 1] && box[i] != 0) {

        box[i] = box[i] * 2
        box[i - 1] = 0;
      }

    }

  }
  for (var t = 0; t < 4; t++) {

    for (var j = 0; j < 17; j += 4) {


      for (var i = 3 + j; i > j; i--) {

        if (box[i] == 0) {
          box[i] = box.splice(i - 1, 1, box[i])[0]
        }

      }

    }
  }
  nshanaku()


}
function vermove() {
  for (var p = 0; p < 3; p++) {

    for (var t = 0; t < 4; t++) {

      for (var i = t; i < 12; i+=4) {

        if (box[i] == 0) {
          box[i] = box.splice(i+4, 1, box[i])[0]
        }

      }


    }
  }

  for (var j = 0; j < 4; j++) {


    for (var i = j; i < 16; i+=4) {

      if (box[i] == box[i + 4] && box[i] != 0) {

        box[i] = box[i] * 2
        box[i + 4] = 0;
      }

    }

  }
  for (var p = 0; p < 3; p++) {

    for (var t = 0; t < 4; t++) {

      for (var i = t; i < 12; i+=4) {

        if (box[i] == 0) {
          box[i] = box.splice(i+4, 1, box[i])[0]
        }

      }
    }
  }

  nshanaku()


}

function nermove() {
  for (var p = 0; p < 3; p++) {

    for (var t = 15; t > 11; t--) {

      for (var i = t; i > 3; i-=4) {

        if (box[i] == 0) {
          box[i] = box.splice(i-4, 1, box[i])[0]
        }
      }
    }
  }

  for (var j = 15; j > 11; j--) {


    for (var i = j; i > -1; i-=4) {

      if (box[i] == box[i - 4] && box[i] != 0) {

        box[i] = box[i] * 2
        box[i - 4] = 0;
      }

    }

  }
  for (var p = 0; p < 3; p++) {

    for (var t = 15; t > 11; t--) {

      for (var i = t; i > 3; i-=4) {

        if (box[i] == 0) {
          box[i] = box.splice(i-4, 1, box[i])[0]
        }
      }
    }
  }
  nshanaku()
}




function blockTypeMovie(e) {
  e = e || window.event;
  if (e.keyCode == "37") {
    box2 = box.slice()
    daxmove()
    for (var i = 0; i < 16; i++) {
      if(box2[i]!=box[i]){
        setTimeout(function(){ randomNambe(random(1, 3)) }, 0);

        return
      }
    }


  } else if (e.keyCode == "39") {
    box2 = box.slice()
    ajmove()
    for (var i = 0; i < 16; i++) {
      if(box2[i]!=box[i]){

        setTimeout(function(){ randomNambe(random(1, 3)) }, 0);
        return
      }
    }
  } else if (e.keyCode == "40") {
    box2 = box.slice()
    nermove()
    for (var i = 0; i < 16; i++) {
      if(box2[i]!=box[i]){

        setTimeout(function(){ randomNambe(random(1, 3)) }, 0);
        return
      }
    }

  } else if (e.keyCode == "38") {
    box2 = box.slice()
    vermove()
    for (var i = 0; i < 16; i++) {
      if(box2[i]!=box[i]){

        setTimeout(function(){ randomNambe(random(1, 3)) }, 0);
        return
      }
    }

  }
}
randomNambe(random(1, 3))
randomNambe(random(1, 3))
