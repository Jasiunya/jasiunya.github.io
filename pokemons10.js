var nextOffset =0;
var loadMoreButton;
var obj;
var types;
// var offset = 0;

$( document ).ready(function() {
    loadMoreButton = $('#load_more');
    loadMoreButton.click(function(){
        nextOffset += 12;
        loadXMLDoc();
    });
    
    loadXMLDoc();

    function loadXMLDoc() {
    
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
                myCycle(); 
            }
        }
        
        var requestUrl = "http://pokeapi.co/api/v1/pokemon/?limit=12";
        if (nextOffset !== 0){
            var requestUrl = "http://pokeapi.co/api/v1/pokemon/?limit=12&offset=" + nextOffset;
            //document.getElementById("id05").innerHTML = requestUrl;
        }
        xmlhttp.open("GET", requestUrl, true);
        xmlhttp.send();
    }

    function myCycle() 
    {
        var out = "";
        var out2 = "";
        if(obj != undefined)
        {
            for(var i = 0; i < obj.objects.length; i++) {
                var pokeUrl = 'http://pokeapi.co' + obj.objects[i].resource_uri;
                pokeTypes();
                function pokeTypes() {
                    loadXMLDoc2();
                    function loadXMLDoc2() {
                        var xmlhttp;
                        if (window.XMLHttpRequest) {
                            xmlhttp = new XMLHttpRequest();
                            } else {// code for older browsers
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                            }
                            xmlhttp.onreadystatechange = function() {
                                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                    obj2 = JSON.parse(xmlhttp.responseText);
                                    myTypes(); 
                                    }
                            }
                            xmlhttp.open("GET", pokeUrl, true);
                            xmlhttp.send();
                    }
                    function myTypes() {
                        if(obj2 != undefined) {
                            var out3 = "";
                            var u;
                            for(u = 0; u < obj2.types.length; u++) {
                            out3 += '<p><a class="btn btn-default" href="" role="button">' + obj2.types[u].name + '</a></p>';
                            //document.getElementById("id05").innerHTML = out3;
                            }
                        }
                    }
                }
                var pokemonID = obj.objects[i].national_id;
                out += ' <div class="col-xs-6 col-lg-4"><img src="http://pokeapi.co/media/img/' + obj.objects[i].national_id  + '.png"><h2>' + obj.objects[i].name + '</h2><p>' + out3 + '</p><p><button type="button" onclick="loadDetails(' + pokemonID + ')">View details</button></p></div><!--/.col-xs-6.col-lg-4-->';
                out2 += '<div class="attr" id="attr' + pokemonID + '" style="display:none"><img src="http://pokeapi.co/media/img/' + obj.objects[i].national_id  + '.png"><h2>' + obj.objects[i].name + " #" + obj.objects[i].national_id + '</h2><p>Type ' + obj.objects[i].national_id + '</p><p>Attack ' + obj.objects[i].attack + '</p><p>Defense ' + obj.objects[i].defense + '</p><p>HP ' + obj.objects[i].hp + '</p><p>SP Attack ' + obj.objects[i].sp_atk + '</p><p>SP Defense ' + obj.objects[i].sp_def + '</p><p>Speed ' + obj.objects[i].speed + '</p><p>Weight ' + obj.objects[i].weight + '</p><p>Total moves ' + obj.objects[i].total + '</p></div>';

                
            // document.getElementById("id02").innerHTML = out;
            id02.insertAdjacentHTML('beforeend', out);
            
            //document.getElementById("id04").innerHTML = out2;
            id04.insertAdjacentHTML('beforeend', out2);
            }
        }
    }
});
