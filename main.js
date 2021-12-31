function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cUfRq4cFy/model.json',modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("soundlabel").innerHTML="I can hear"+results[0].label
        document.getElementById("accuracy").innerHTML="accuracy"+(results[0].confidence*100).toFixed(2)+"%"
        img1=document.getElementById("img1")
        img2=document.getElementById("img2")
        img3=document.getElementById("img3")
        img4=document.getElementById("img4")
        img5=document.getElementById("img5")
        
        if(results[0].label=="Background Noise")
        {
            img1.src="cat1.gif"
        } 
        else if(results[1].label=="Me talking")
        {
            img2.src="cat2.gif"
        }             
        else if(results[2].label=="clap")
        {
            img3.src="cat3.gif"
        }             
        else if(results[3].label=="guiter")
        {
            img4.src="cat4.gif"
        }             
        else if(results[4].label=="laugh")
        {
            img5.src="cat5.gif"
        }       





    }
}