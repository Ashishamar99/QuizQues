
            document.write('<nav><canvas width="200" height="100" class="logo_canvas" onclick="location.href=\'index.html\'" id="logo"></canvas>');

            var drawLogo = function(){
            var canvas = document.getElementById("logo");
            var context = canvas.getContext("2d");
            
            context.fillStyle = "#0000ff";
            context.strokeStyle = "#ffa500";
            
            context.font = "italic 40px 'Arial'";
            var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop("0"," magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "orange");
            context.fillStyle = gradient;
            context.fillText("QuizQues", 0, 36);
            
            context.save();
            context.closePath();
            context.restore();
            
            };
        
            var canvas = document.getElementById("logo");
        
            if (canvas.getContext){
            drawLogo();
            }

    document.write('</nav>');