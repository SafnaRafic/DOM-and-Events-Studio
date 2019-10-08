// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {    
    let takeOffButton=document.getElementById("takeoff");
    takeOffButton.addEventListener("click",takeOff);
    let landButton=document.getElementById("landing");
    landButton.addEventListener("click",land);
    let abortButton=document.getElementById("missionAbort");
    abortButton.addEventListener("click",abort);
    let response=false;
    let xPos = 0;
    let yPos = 252;

    function takeOff(){    
        var response=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response==true){
            document.getElementById("flightStatus").innerHTML ="The shuttle is on the ground";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML="10,000"; 
            rocket.style.top =  yPos - 10 + "px"; 
        }
    }   
    function land(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML="0";
        rocket.style.top = "252px"; 
        rocket.style.left = "0px";
        xPos = 0;
        yPos = 252;
        height = 0;
    }
    function abort(){    
        var response=window.confirm("Confirm that you want to abort the mission.");
        if(response==true){
            document.getElementById("flightStatus").innerHTML ="Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML="0";  
            rocket.style.top = "252px"; 
            rocket.style.left = "0px";
            xPos = 0;
            yPos = 252;
            height = 0;
        }  
    }
    
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = parseInt(shuttleHeight.innerHTML);
    let upBtn = document.getElementById("upButton");
    let dwnBtn = document.getElementById("downButton");
    let rtBtn = document.getElementById("rightButton");
    let lftBtn = document.getElementById("leftButton");
    let rocket = document.getElementById("rocket");
    upBtn.addEventListener("click", function() {
        if (yPos >= 0) { 
            yPos -= 10;
            rocket.style.top =  yPos + "px";
            height += 10000;
            shuttleHeight.innerHTML = height;
        }
    });
    dwnBtn.addEventListener("click", function() {
        if (yPos <= 248) { 
            yPos += 10;
            rocket.style.top =  yPos + "px";
            height -= 10000;
            shuttleHeight.innerHTML = height;
        }
    });    
    lftBtn.addEventListener("click", function() {
        let style = getComputedStyle(document.getElementById("shuttleBackground"));
        let width = parseInt(style.getPropertyValue("width"));
        if (xPos > 20 - width / 2 ) { 
            xPos -= 10;
            rocket.style.left =  xPos + "px";
        }
    });
    rtBtn.addEventListener("click", function() {
        let style = getComputedStyle(document.getElementById("shuttleBackground"));
        let width = parseInt(style.getPropertyValue("width"));
        if (xPos < width / 2 - 20) { 
            xPos += 10;
            rocket.style.left =  xPos + "px";
        }    
    }); 
    document.onkeydown = function(e) 
    
        {  
        
        if(e.keyCode===37){
            let style = getComputedStyle(document.getElementById("shuttleBackground"));
            let width = parseInt(style.getPropertyValue("width"));
            if (xPos > 20 - width / 2 ) { 
                xPos -= 10;
                rocket.style.left =  xPos + "px";
            }
            
        } else if(e.keyCode===38){
            if (yPos >= 0) { 
                yPos -= 10;
                rocket.style.top =  yPos + "px";
                height += 10000;
                shuttleHeight.innerHTML = height;
            }

        }  else if(e.keyCode===39){
            let style = getComputedStyle(document.getElementById("shuttleBackground"));
            let width = parseInt(style.getPropertyValue("width"));
            if (xPos < width / 2 - 20) { 
            xPos += 10;
            rocket.style.left =  xPos + "px";
        }   
            
        }  else if(e.keyCode===40){
            if (yPos <= 248) { 
                yPos += 10;
                rocket.style.top =  yPos + "px";
                height -= 10000;
                shuttleHeight.innerHTML = height;
            }
        }  
    }
});