function change(){
    var color = ["aquamarine","antiquewhite","lightgreen","beige","lightblue","lightgray","lightyellow","darkslategrey","darkcyan","crimson",
                "darkolivegreen","darkred","violate","burlywood","chocolate","hotpick","darkorchid","lightcoral"]
    var x=Math.floor(Math.random() * 17)
    document.body.style.backgroundColor = color[x];
}
// Automatic color change after click a button one time
function auto(){
    window.setTimeout( "auto()", 1000);
    var color = ["aquamarine","antiquewhite","lightgreen","beige","lightblue","lightgray","lightyellow","darkslategrey","darkcyan","crimson",
    "darkolivegreen","darkred","violate","burlywood","chocolate","hotpick","darkorchid","lightcoral"]
var x=Math.floor(Math.random() * 17)
document.body.style.backgroundColor = color[x];
}
