 function loadDetails(pokemonID) {

//var x = document.getElementsByClassName("attr").length;
//document.getElementById("id03").innerHTML = x;
var x = document.getElementsByClassName("attr");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
var divid = "attr" + pokemonID;
var y = document.getElementById(divid);
y.style.display = "block";
}  