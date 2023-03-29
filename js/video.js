let video = document.querySelector ('#player1');

//Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay =false;
	video.loop = false;
});


//Play the video and update the volume information. 

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
  });


  document.querySelector("#play").addEventListener("click", function() {
	console.log("return volume");
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%";
	
 });

  //"#volume"


  //Pause the video.
 document.querySelector("#pause").addEventListener("click", function() {
 	console.log("pause Video");
	video.pause();
  });


  //Speed Up
  //Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function(){
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate * .90 ;
})

//Speed Up
document.querySelector("#faster").addEventListener("click", function(){
	console.log(video.playblackRate);
	video.playbackRate = video.playbackRate / .90 ;
})

//Skip Ahead
//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function(){
	console.log(video.currentTime);
	video.currentTime = video.currentTime + 10 ;
})


//Mute
//Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function(){
	
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log(video.muted)
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log(video.muted);
	}})
	

	//Volume Slider
	//Change the volume based on the slider and update the volume information.



	let volume =document.querySelector("#slider")
	volume.addEventListener("change", function(booty){
		video.volume = booty.currentTarget.value / 100;
		console.log("current vol value is " + video.volume);
		document.querySelector("#volume").innerHTML= video.volume * 100 + "%";
		console.log("volume changed")
		
	})


//Old School
	document.querySelector("#vintage").addEventListener("click", function(){
		console.log("old school activated");
		video.classList.add("oldSchool");
		console.log(video.classList)
		
	})


//Original
	document.querySelector("#orig").addEventListener("click", function(){
	console.log("back to original");
	video.classList.remove("oldSchool");
	console.log(video.classList);
	
	})
	

	
	




















 	//var playButton = document.getElementById("play");
	//Event listener for the play/pause button
 	//playButton.addEventListener("click", function playvid() {
  
	//    vid.play();
	//});

	//var pauseButton = document.getElementById("pause");
	//Event listener for the play/pause button
 	//playButton.addEventListener("click", function pausevid() {
  
	//    vid.pause();
	//});


	





//  function playVid() { 
// 	vid.play(); 
//   } 
  
//   function pauseVid() { 
// 	vid.pause(); 
//   } 




 //* var vid = document.getElementsByClassName("video");
 //vid.onloadstart = function() {
 //   console.log("Starting to load video");
//}; 
//document.getElementById("video").addEventListener("load", function vidPlay(){
//	vid.load
//})


//vid.addEventListener("loadstart", function(){
//	alert("starting to load video");
//});

//document.getElementById("play").onlick=function(){playVid()};

//function playVid() { 
//  vid.play(); 
//} 

//document.getElementById("pause").onlick=function(){pauseVid()};
//function pauseVid() { 
//  vid.pause(); 
//} //




//var playButton = document.getElementById("play");
	//Event listener for the play/pause button
//playButton.addEventListener("click", function playvid() {
  
//    vid.play();
//});






//var vid = document.getElementsByClassName("video");
// if (typeof video.loop == 'boolean') { // loop supported
//    vid.loop = true;
//  } else { // loop property not supported
//    vid.addEventListener('ended', function () {
// 	 this.currentTime = 0;
// 	 this.play();
//    }, false);
//  }
























 //meeee//
//var vid = document.querySelector('.video');
//console.log(parent);

//const kid1 = video.querySelector()

//vid.addEventListener("loadstart", function(){
//	alert("starting to load video");
//});


//var playButton = document.getElementById("play");
// Event listener for the play/pause button
//playButton.addEventListener("click", function() {
//  if (video.paused == true) {
    // Play the video
//    video.play();
 // }
//}



//const playButton = document.querySelector('#play');
//const pauseButton = document.querySelector('#pause');

//pauseButton.disabled = true;


//playButton.addEventListener('click', () => {
//  pauseButton.disabled = false;
//  playButton.disabled = true;
//});


//pauseButton.addEventListener('click', () => {
//  playButton.disabled = false;
////  pauseButton.disabled = true;
//});

