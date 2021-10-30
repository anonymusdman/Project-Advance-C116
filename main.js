NoseX = 0;
NoseY = 0;

function preload(){
    filter = loadImage("star-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 325);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 325);
    image(filter, NoseX - 35, NoseY - 20, 70, 50);
}

function take_photo(){
    save('StarNose_Filter_Image.png');
}

function modelLoaded(){
    console.log("PoseNet initialized")
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("Nose X:" + result[0].pose.nose.x + "; Nose Y:" + result[0].pose.nose.y);
        NoseX = result[0].pose.nose.x;
        NoseY = result[0].pose.nose.y;
    }
}