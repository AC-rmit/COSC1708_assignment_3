
function initMap(){

    var options = {
        center: {lat:-37.8136 , lng:144.9631 },
        zoom: 14
    }

    map = new google.maps.Map(document.getElementById("map"),options)


    
    //Load markers from json

    function loadMarkersFromJson(jsonFile){
        fetch(jsonFile)
  .then(response => response.json())
  .then(data => markerLoop(data));
    }
    
    function markerLoop (markerArray){
        for (let i = 0; i < markerArray.length; i++){
            addMarker(markerArray[i]);
            console.log(markerArray[i])
        }
    }



    loadMarkersFromJson("/output.json")
    //Add marker
    function addMarker(property){

        const marker = new google.maps.Marker({
            position: {lat:parseFloat(property.lat),lng:parseFloat(property.lon)},
            map:map
            
            
        });
            if(property.status){

            const detailWindow = new google.maps.InfoWindow({
                content: '<h2>' + property.status + '</h2>'
            });

            marker.addListener("mouseover",() =>{
                detailWindow.open(map,marker);
            })

            marker.addListener("mouseout",() =>{
                detailWindow.close(map,marker);
            })
            
            }
    }

   
} 

