//use this function to generate a path d from an array of dxy points and commands
function draw(x=0, y=0, dxy=[], appendZ=true) {
  let originX = x
  let originY = y
  let d = `M ${x},${y}`

  dxy.forEach(p => {
    if(Array.isArray(p)) { //if this element is an array
      x += p[0]
      y += p[1]
      d += ` ${x},${y}`
    }
    else if(typeof p === "string") { //else if it is a string
      d += ` ${p}`
    }
  })

  if(appendZ) {
    d += " Z"
  }

  console.log(x-originX, y-originY, d)
  return d
}

//use this function to mirror a set of dxy points
function mirror(dxy=[]) {
  const mirror = []
  for(let i=dxy.length-1; i>=0; --i) {
    const p = dxy[i]
    if(Array.isArray(p)) {
      mirror.push([p[0],-p[1]])
    }
    else if(typeof p === "string") {
      mirror.push("X") //you'll have to manually replace the command strings
    }
  }
  console.log(JSON.stringify(mirror))
}

//use this function if you don't need decimal digits in your path d
function roundPathD(d) {
  return d.split(" ").map(s => { //split by spaces
    if(isNaN(s)) { //if the full string is not a number
      return s //return the string as is
    }
    return parseInt(s).toString() //else int parse it

  }).join(" ") //rejoin the string
}

//use this function to translate your points
function translatePath(d, translateX=0, translateY=0) {
  let odd = false
  return d.split(" ").map(s => { //split by spaces
    if(isNaN(s)) { //if the full string is not a number
      return s //return the string as is
    }
    odd = !odd
    if(odd) {
      return (parseFloat(s) + translateX).toString()
    }
    return (parseFloat(s) + translateY).toString()

  }).join(" ") //rejoin the string
}


const skytree = [
  [20,0],[0,-40],[5,0],[0,-5],[7,0],[0,-8],[1,0],[0,8],[2,0],[0,5],[5,0],[0,40],
  [50,0],[0,-30],[20,0],[0,-20],[30,0],[0,10],[20,0],[0,-10],[10,0],[0,-5],[1,0],[0,5],[19,0],[0,40],[20,0],[0,10],
  [05,0],[0,-75],[10,0],[0,-2],[5,0],[0,2],[5,0],[0,95],
  [65,0],[4,-50],[3,-60],[-3,-10],[0,-3],[4,-1],[1,-18],[-1.5,-1],[1.5,-1.5],[-1,-1.5],[1.5,-1],[0.5,-11],[1.5,-0.5],[1,-41.5],//left side of skytree
  [2,0],[1,41.5],[1.5,0.5],[0.5,11],[1.5,1],[-1,1.5],[1.5,1.5],[-1.5,1],[1,18],[4,1],[0,3],[-3,10],[3,60],[4,50], //right side of skytree
  [73,0],[0,180],[-400,0],[0,-200]
]

document.getElementById("skytree").childNodes[1].childNodes[1]
.setAttribute("d",draw(0,200,skytree))



const city3 = [
  [40,0],[0,40],[10,0],
  [0,-150],[5,0],[4,-7],[3.5,3],[3.5,-3],[4,7],[5,0],[0,95],[20,0],[0,40],[30,0],
  [0,-110],[30,0],[0,80],
  [20,0],[0,20],[40,0],[0,-30],
  [30,0],[0,-80],[20,0],[0,100],[10,0],
  [0,-100],[11,0],[0,-5],[1,0],[0,5],[4,0],[0,-10],[1,0],[0,10],[3,0],[0,80],
  [40,0],[0,-60],[10,0],[0,-5],[4,0],[0,-5],[1,0],[0,5],[2,0],[0,-4],[1,0],[0,4],[2,0],[0,5],[5,0],[0,40],
  [20,0],[0,25],[20,0],
  [0,100],[-400,0],[0,-90],
]

document.getElementById("city3").childNodes[1].childNodes[1]
.setAttribute("d",draw(0,210,city3))



const tokyo_tower = [
  [10,0],[0,-60],[15,-5],[0,85],
  [20,0],[0,-100],[3,0],[0,-10],[1,0],[0,10],[16,0],[0,110],
  [10,0],"Q",[20,-10],[5,-50],"L",[-2,0],[-1,-8],[3.5,0],"Q",[1.5,-20],[1,-40],"L",[1,0],[1,-40], //left side of tokyo tower
  [1,40],[1,0],"Q",[1,40],[1.5,20],"L",[3.5,0],[-1,8],[-2,0],"Q",[5,50],[20,10],"L", //right side of tokyo tower
  [20,0],[0,-80],[7,0],[0,-7],[1,0],[0,7],[12,0],[0,80],
  [50,0],[0,-20],"Q",[-4,-60],[9,-40],[1,-8],[5,-1],[3,-1],[3,1], //left side of curved tower
  [5,1],[1,8],[9,40],[-4,60],
  "L",[20,0],[0,10],[20,0],[0,-60],[15,0],[0,-10],[10,0],[0,30],[20,0],[0,40],[10,0],[0,-80],[30,0],[0,-30],[22,0],
  [0,190],[-400,0],[0,-100]
]

document.getElementById("tokyo_tower").childNodes[1].childNodes[1]
.setAttribute("d",draw(0,200,tokyo_tower))



const sensoji = [
  [142,0],
  [0,-50],[-4,0],[4,-4],[-5,-5],[-20,-1],[-2,-5],[-5,-2],[0,-1],"Q",[8,-1],[2,-2],"L",[0,-2],"Q",[15,-5],[5,-20],"L",[60,0],
  [0,85],[-5,0],[0,-3],"Q",[-10,-3],[0,-15],[0,-15],[10,-3],"L",[-20,0],[0,52],[25,0],
  [25,0],[0,-52],[-20,0],"Q",[10,3],[0,15],[0,15],[-10,3],"L",[0,3],[-5,0],[0,-85],
  [60,0],"Q",[5,20],[15,5],"L",[0,2],"Q",[2,2],[8,1],"L",[0,1],[-5,2],[-2,5],[-20,1],[-5,5],[4,4],[-4,0],[0,50]
]

document.getElementById("sensoji").childNodes[1].childNodes[1]
.setAttribute("d",draw(0,300,sensoji))
