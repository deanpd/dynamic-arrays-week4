//create an array literal (best practice)
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];
/*
console.log(colorList);
//sort the colors
colorList.sort();//sorts the array alphabetically
colorList.reverse();//sorts the array reverse alphabetically
console.log(colorList);
*/

//Make a list of scores (numbers)
var scores = [12, 2, 300, 40, 23, 43, 53, 13, 25, 65, 90, 43, 23];

//colorList.pop();//Removes end element and returns the element.
//Assign the end element to a result variable.
//var endElement = colorList.pop();//Holds onto end element in an array.
//colorList.shift();//Removes the first element in an array.
//colorList.unshift("brown");//Adds to the beginning of an array.
//colorList.splice(0,2);//Takes out 1 or many elements. First argument is the STARTING position. Second argument is HOW MANY to take out.

var myThumbDiv = document.getElementById("thumbs");
//Variables IN functions (function scope), can see global varibles)

var imageListA = [];
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
    output += '<div class="thumbs_block">';
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	output += '</div>';
    
    output += '<div class="thumbs_block">';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
    output += '</div>';
    
    output += '<div class="thumbs_block">';
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
  	output += '</div>';
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}

window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//var myThumbDiv = document.getElementById("thumbs");

//Attach a click event to the DIV with id="thumbs"
myThumbDiv.addEventListener("click", onImageClick, false);

//The function handler
function onImageClick(evt)
{
//  console.log(evt.target);//Return just the element that gets clicked
//  evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg")
  //evt.target.setAttribute("style", "background-color: blue;")
  var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_5.jpg");
  console.log(imageIndex);
  
}