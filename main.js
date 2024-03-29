noseX=0;
noseY=0;

function preload() {
    clownnose = loadImage('https://i.postimg.cc/6Qv7prm5/Png.png');
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(clownnose, noseX-30, noseY-30, 65, 65);

}

function take_snapshot() {
    save('blepmlem.png')

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}