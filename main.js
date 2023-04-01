var canvas = new fabric.Canvas('myCanvas');

document.getElementById("olyshit").style.display = "none";

function partyStart(){
    const audio = new Audio("bdayaudio.mp3");
    audio.loop = true;
    audio.play();
        document.getElementById("siu2").innerHTML = "Happy Birthday to you!"
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
        document.getElementById("oo").style.display = "none";
        setTimeout(LCA, 3000);

       
})}

function LCA(){
    document.body.style.backgroundImage = "url('hOye.gif')"
    document.getElementById("siu2").innerHTML = "Happy Birthday to YOU!"
    setTimeout(HBJ, 3000);
}

function HBJ(){
    document.getElementById("siu2").innerHTML = "Happy Birthday Happy Birthday!"
    setTimeout(VLUVU, 3000);
}

function VLUVU(){
    document.getElementById("siu2").innerHTML = "Happy birthday to YOU!";
    setTimeout(Warrado, 3000);
}

function Warrado(){
    fabric.Image.fromURL('gggggggggg.jpeg',function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:55
        });
        canvas.add(block_image_object);
    });
    document.getElementById("siu2").style.display = "none";
    document.getElementById("siu").innerHTML = "Happy Birthday Jodu Cheta! Unique starts with U!";
}