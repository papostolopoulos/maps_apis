let metadataRequest = new XMLHttpRequest();

metadataRequest.open('GET', 'http://api.tomtom.com/map/1/glyph/20.0.0-8/metadata.json?key=aF6RzykjXBBSEAaHf396gG3qq5YRGerX');

metadataRequest.onload = function() {
    let response = metadataRequest.response;
	let parsedData = JSON.parse(response).content;
    console.log(parsedData);

    //Create Header and unordered list elements
    let metaHeader = document.createElement("h1");
    metaHeader.innerHTML = "Metadata API";
    document.body.appendChild(metaHeader);
	let unorderedList = document.createElement("ul");
	document.body.appendChild(unorderedList);

    //Iterate through the JSON data to display the information
	for(item in parsedData){
		let metaElement = document.createElement('li');
		metaElement.innerHTML = `Name: ${parsedData[item].name} / Type: ${parsedData[item].type}`;
        unorderedList.appendChild(metaElement);

    }
    
    let metaHR = document.createElement("hr");
    document.body.appendChild(metaHR);
};

metadataRequest.send();