var nextOffset = 0;
var loadMoreButton;
var offset = 0;

//document.onLoad = function (){
//  var loadMoreButton = document.getElementById("load_more");
//};

loadXMLDoc();

function loadXMLDoc(offset) {
  
var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      obj = JSON.parse(xmlhttp.responseText);

    }
      myCycle();
      nextOffset += 12;
      document.getElementById("load_more").innerHTML = '<button type="button" onclick="loadXMLDoc(' + nextOffset + ')" class="load_more">Load more</button>';
      //loadMoreButton.onclick = function() {loadXMLDoc(nextOffset)};
  }
  var requestUrl = "http://pokeapi.co/api/v1/pokemon/?limit=12";
  if (nextOffset !== 0){
    var requestUrl = "http://pokeapi.co/api/v1/pokemon/?limit=12&offset=" + nextOffset;
    //document.getElementById("id05").innerHTML = requestUrl;
  }
  xmlhttp.open("GET", requestUrl, true);
  xmlhttp.send();

}

function myCycle() {
var out = "";
var out2 = "";
    var i;
    for(i = 0; i < obj.objects.length; i++) {


        var pokemonID = obj.objects[i].national_id;
        out += ' <div class="col-xs-6 col-lg-4"><img src="http://pokeapi.co/media/img/' + obj.objects[i].national_id  + '.png"><h2>' + obj.objects[i].name + '</h2><p>Description. </p><p><button type="button" onclick="loadDetails(' + pokemonID + ')">View details</button></p></div><!--/.col-xs-6.col-lg-4-->';
        out2 += '<div class="attr" id="attr' + pokemonID + '" style="display:none"><img src="http://pokeapi.co/media/img/' + obj.objects[i].national_id  + '.png"><h2>' + obj.objects[i].name + " #" + obj.objects[i].national_id + '</h2><p>Type ' + obj.objects[i].national_id + '</p><p>Attack ' + obj.objects[i].attack + '</p><p>Defense ' + obj.objects[i].defense + '</p><p>HP ' + obj.objects[i].hp + '</p><p>SP Attack ' + obj.objects[i].sp_atk + '</p><p>SP Defense ' + obj.objects[i].sp_def + '</p><p>Speed ' + obj.objects[i].speed + '</p><p>Weight ' + obj.objects[i].weight + '</p><p>Total moves ' + obj.objects[i].total + '</p></div>';

}
    document.getElementById("id02").innerHTML = out;
    //id02.insertAdjacentHTML('beforeend', out);
    
    document.getElementById("id04").innerHTML = out2;
    //id04.insertAdjacentHTML('beforeend', out2);
    
}
