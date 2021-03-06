//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  var url = "http://colormind.io/api/";
  var data = {
    model : "default",
    input : ["N","N","N","N","N"]
  }

  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      console.log(palette)
      document.body.style.backgroundColor = "rgb("+palette[0][0]+","+palette[0][1]+","+palette[0][2]+")"
      document.querySelector("h1").style.color = "rgb("+palette[1][0]+","+palette[1][1]+","+palette[1][2]+")"
      document.querySelector("h2").style.color = "rgb("+palette[2][0]+","+palette[2][1]+","+palette[2][2]+")"
      document.querySelector("p").style.color = "rgb("+palette[3][0]+","+palette[3][1]+","+palette[3][2]+")"
      document.querySelector("a").style.color = "rgb("+palette[4][0]+","+palette[4][1]+","+palette[4][2]+")"
    }
  }


  http.open("POST", url, true);
  http.send(JSON.stringify(data));

}

