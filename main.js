noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/9FrCMkQj/nose.jpg');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_poses);
}

function draw(){
    image(video,0,0,300,300);

    image(clown_nose,noseX,noseY,30,30);

}

function takeSnapshot(){
    save('image.png');
}

function model_loaded(){
    console.log("Posenet is initialized");
}

function got_poses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("noseX=  "+noseX);
        console.log("noseY=  "+noseY);
    }
}
