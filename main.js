Webcam.set({
    width:403,
    height:300,
    image_format: "png",
    png_quality: 90,
    constraints:{
        facingMode:"environment"
    }
}); 

Webcam.attach("#webcam");

function capture(){
    Webcam.snap(function(data_uri) {
        document.getElementById("captured_image").innerHTML = "<img id='img' src='"+data_uri+"'>";
    });
}
console.log(ml5.version);
var classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function capture_button(){
    img = document.getElementById("img");
    classifier.classify(img, gotResult);
}
function gotResult(error,result) {
    if (error){
        console.error(error);
    } else{
        console.log(result);
        document.getElementById("object_result").innerHTML = result[0].label;
    }

}