 var SpeechRecognition = window.webkitSpeechRecognition;

var recognition= new SpeechRecognition;

function start()
{

document.getElementById("textbox").innerHTML="";
recognition.start();

}
recognition.onresult=function(event){
console.log(event)

 var content = event.results[0][0].transcript;
 console.log(content);

 document.getElementById("textbox").innerHTML=content;

 //speak();

 if(content=="Take my selfie.")
 {
  console.log("selfie is taken ");

  speak();
 }
}



function speak()
{
 var synth = window.speechSynthesis;

 var speak_data ="Taking your selfie in 8 seconds";


 var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach(camera);

setTimeout(function()
{
snapshot();
save();

},8000);
}


camera=document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach( '#my_camera' );

  function snapshot()
  {
    Webcam.snap(function (data_uri){
      document.getElementById("result").innerHTML='<img id="my_selfie" src="'+ data_uri +'"+></img>';
       
    });



  }

  function save()
  {
    link=document.getElementById("link");

    image=document.getElementById("my_selfie").src;

    link.href=image;
  
    link.click();

  }