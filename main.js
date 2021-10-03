function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nQAYsWJvo/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(cerror,results){
    console.log('gotResult')
}