document.body.addEventListener('click', function () {
	var clientId = localStorage.getItem('clientId');
	var clientSecret = localStorage.getItem('clientSecret');
	
	var data = JSON.stringify({
	  "elements": {
	    "name": "Obi Wan",
	    "age": 3,
		"planet": "Smth else"
	  },
	  "name": "StarwarsCharacter 2",
	  "typeId": "f03eb20d-2096-4522-8631-978e636c176f"
	});
	 
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	 
	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
	    console.log(this.responseText);
	  }
	});
	 
	xhr.open("POST", "https://my2.digitalexperience.ibm.com/api/974fa42c-1a1a-4d4b-a364-030723bce58d/authoring/v1/content");
	xhr.setRequestHeader("x-ibm-dx-publish-priority", "string");
	xhr.setRequestHeader("x-ibm-client-id", clientId);
	xhr.setRequestHeader("x-ibm-client-secret", clientSecret);
	 
	xhr.send(data);

}, false);