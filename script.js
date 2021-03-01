//METADATA API CALL
let metadataRequest = new XMLHttpRequest();

metadataRequest.open('GET', 'https://api.tomtom.com/map/1/glyph/20.0.0-8/metadata.json?key=606INsRxIwynAL0RuQXRS0Iy5tvlT30CTcO1-lerTtY');

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


//RESOURCE METHOD API CALL
setTimeout(function(){
    let resourceRequest = new XMLHttpRequest();

    resourceRequest.open('GET', 'https://api.tomtom.com/map/1/style/20.0.0-8/basic_main.json?key=606INsRxIwynAL0RuQXRS0Iy5tvlT30CTcO1-lerTtY');

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


//MERGED STYLE METHOD API CALL
setTimeout(function(){
    let mergedRequest = new XMLHttpRequest();

    mergedRequest.open('GET', 'https://api.tomtom.com/map/1/style/20.0.0-8/basic_main.json?key=606INsRxIwynAL0RuQXRS0Iy5tvlT30CTcO1-lerTtY');

    mergedRequest.onload = function() {
        let mergedResponse = mergedRequest.response;
        let mergedData = JSON.parse(mergedResponse).layers;
        console.log(mergedData);

        //Create Header and unordered list elements
        let mergedHeader = document.createElement("h1");
        mergedHeader.innerHTML = "Merged Style API";
        document.body.appendChild(mergedHeader);
        let mergedUL = document.createElement("ul");
        document.body.appendChild(mergedUL);

        //Iterate through the JSON data to display the information
        for(item in mergedData){
            let mergedElement = document.createElement('li');
            mergedElement.innerHTML = `${item} ID: ${mergedData[item].id} / Type: ${mergedData[item].type}`;
            mergedUL.appendChild(mergedElement);

        }
        
        let responseHR = document.createElement("hr");
        document.body.appendChild(responseHR);
    };

    mergedRequest.send();
}, 1000);

