function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nQAYsWJvo/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy - "+(results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");

        if(results[0].label=="barking"){
            img1.src='barking dog.gif';
            img2.src='cat.jpg';
            img3.src='cow.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="meowing"){
            img1.src='dog.jpg';
            img2.src='meowing.gif';
            img3.src='cow.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="mooing"){
            img1.src='dog.jpg';
            img2.src='cat.jpg';
            img3.src='cow.gif';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="roaring"){
            img1.src='dog.jpg';
            img2.src='cat.jpg';
            img3.src='cow.jpg';
            img4.src='lion.gif';
        }
    }
}