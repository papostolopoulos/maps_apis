let metadataRequest = new XMLHttpRequest();

metadataRequest.open('GET', 'https://api.tomtom.com/map/1/glyph/20.0.0-8/metadata.json?key=aF6RzykjXBBSEAaHf396gG3qq5YRGerX');

metadataRequest.onload = function() {
    let metadataResponse = metadataRequest.response;
	let metaParsedData = JSON.parse(metadataResponse).content;
    console.log(metaParsedData);

    //Create Header and unordered list elements
    let metaHeader = document.createElement("h1");
    metaHeader.innerHTML = "Metadata API";
    document.body.appendChild(metaHeader);
	let metaUL = document.createElement("ul");
	document.body.appendChild(metaUL);

    //Iterate through the JSON data to display the information
	for(item in metaParsedData){
		let metaElement = document.createElement('li');
		metaElement.innerHTML = `Name: ${metaParsedData[item].name} / Type: ${metaParsedData[item].type}`;
        metaUL.appendChild(metaElement);

    }
    
    let metaHR = document.createElement("hr");
    document.body.appendChild(metaHR);
};

metadataRequest.send();


setTimeout(function(){
    let resourceRequest = new XMLHttpRequest();

    resourceRequest.open('GET', 'https://api.tomtom.com/map/1/style/20.0.0-8/basic_main.json?key=aF6RzykjXBBSEAaHf396gG3qq5YRGerX');

    resourceRequest.onload = function() {
        let resourceResponse = resourceRequest.response;
        let responseData = JSON.parse(resourceResponse).layers;
        console.log(responseData);

        //Create Header and unordered list elements
        let resourceHeader = document.createElement("h1");
        resourceHeader.innerHTML = "Resource API";
        document.body.appendChild(resourceHeader);
        let responseUL = document.createElement("ul");
        document.body.appendChild(responseUL);

        //Iterate through the JSON data to display the information
        for(item in responseData){
            let resourceElement = document.createElement('li');
            resourceElement.innerHTML = `${item} ID: ${responseData[item].id} / Type: ${responseData[item].type}`;
            responseUL.appendChild(resourceElement);

        }
        
        let responseHR = document.createElement("hr");
        document.body.appendChild(responseHR);
    };

    resourceRequest.send();
}, 500);
