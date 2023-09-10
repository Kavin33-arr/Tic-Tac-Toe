
$(document).on('playboard',function(){

    
    setup();});

    var xpoints=0;
    var opoints=0;
    
    $('#Xname').text(window.Xname+" : "+xpoints);
    $('#Oname').text(window.Oname+" : "+opoints);
console.log(window.Xname,window.Oname);  

function setup(){
             
var grid=$('.second .grid-container').children();
console.log(grid);
var clicks=0;
var check=0;
grid.off('click');
grid.on('click', function () {
    clicks++;

    if (clicks % 2 === 0) {
        char = "O";
    } else {
        char = "X";
    }
    
    $(this).text(char);
    $(this).prop('disabled', true);
    var result=$(".second .result");
    var winResult = win(); // Check for a win condition

    if (winResult === 1) {
        xpoints++;
        grid.fadeOut(2000);
        
    $('#Xname').text(window.Xname+" : "+xpoints);
    $('#Oname').text(window.Oname+" : "+opoints);

        setTimeout(function(){
        var existing=result.html();
        var newline="<p><h1><strong>Game Over!</strong></h1><br/><span>"+window.Xname+" Wins"+"</span></h1><br/></p>";
        result.append(existing+newline);
        $('.second .result span').css({
            "font-size": "60px",
            "margin-left" : "300px",
        });},2000);
        setTimeout(function() {
            var regame = $("<button>").text("Regame").addClass("regame-button");
            var endgame = $("<button>").text("End"); 

            result.append(regame, endgame);
            $('button').hover(function(){
                var currbutton=$(this);
                currbutton.css({
                    "scale": 1.1,
                    "transition": ".5s",
                    "cursor": "pointer",
                    "border" : "2px solid white"

                })
            });
        
           
            $(".regame-button").on("click",function() {
                    $('.second').load("board.html",function(){
                        grid.text('').prop('disabled', false);

                        $(document).trigger('playboard');
                        setup();
                    });
            });

            endgame.on("click", function() {
                $('.second .result').hide(1000);
                $('#firstheading').hide(100);
                $('#Xname').hide(100);
                $('#Oname').hide(100);
                var end=$('.second .final');
                if(opoints>xpoints){
                    end.text(window.Oname+" Wins");}
                else if(opoints<xpoints){
                    end.text(window.Xname+" Wins")
                }
                else{
                    end.text("Match Drawn");
                }
                var restart=$('<button>').text("Restart");
                end.append(restart);
                restart.click(function(){
                    window.location.href = "index.html";
                });

            });

            // Apply CSS styles to both buttons
            $('.second .result button').css({
                "font-size": "40px",
                "margin-left": "400px",
                "border-radius": "20px",
                "margin-bottom" : "30px",
                "width": "170px",
            });
        }, 2000);






            

    }
    else if(winResult==2){
        opoints++;
        grid.fadeOut(2000);
        
    $('#Xname').text(window.Xname+" : "+xpoints);
    $('#Oname').text(window.Oname+" : "+opoints);

        setTimeout(function(){
        var existing=result.html();
        var newline="<p><h1><strong>Game Over!</strong></h1><br/><span>"+window.Oname+" Wins</span></h1><br/></p>";
        result.append(existing+newline);
        $('.second .result span').css({
            "font-size": "60px",
            "margin-left" : "300px",
        });},2000);
        setTimeout(function() {
            var regame = $("<button>").text("Regame").addClass("regame-button");
            var endgame = $("<button>").text("End"); 

            result.append(regame, endgame);
            $('button').hover(function(){
                var currbutton=$(this);
                currbutton.css({
                    "scale": 1.1,
                    "transition": ".5s",
                    "cursor": "pointer",
                    "border" : "2px solid white"

                })
            });
        
           
            $(".regame-button").on("click",function() {
                    $('.second').load("board.html",function(){
                        grid.text('').prop('disabled', false);

                        $(document).trigger('playboard');
                        setup();
                    });
            });

            endgame.on("click", function() {
                $('.second .result').hide(1000);
                $('#firstheading').hide(100);
                $('#Xname').hide(100);
                $('#Oname').hide(100);
                
                var end=$('.second .final');
                if(opoints>xpoints){
                    end.text(window.Oname+" Wins");}
                else if(opoints<xpoints){
                    end.text(window.Xname+" Wins")
                }
                else{
                    end.text("Match Drawn");
                }
                var restart=$('<button>').text("Restart");
                end.append(restart);
                restart.click(function(){
                    window.location.href = "index.html";
                });
            });

            // Apply CSS styles to both buttons
            $('.second .result button').css({
                "font-size": "40px",
                "margin-left": "375px",
                "border-radius": "20px",
                "margin-bottom" : "30px",
                "width": "170px",
            });
        }, 2000);



    }
    else if(winResult==0){
        grid.fadeOut(2000);
        setTimeout(function(){
        var existing=result.html();
        var newline="<p><h1><strong>Game Over!</strong></h1><br/><span>Drawn</span></h1><br/></p>";
        result.append(existing+newline);
        $('.second .result span').css({
            "font-size": "60px",
            "margin-left" : "400px",
        });},2000);
        setTimeout(function() {
            var regame = $("<button>").text("Regame").addClass("regame-button");
            var endgame = $("<button>").text("End"); 

            result.append(regame, endgame);
            $('button').hover(function(){
                var currbutton=$(this);
                currbutton.css({
                    "scale": 1.1,
                    "transition": ".5s",
                    "cursor": "pointer",
                    "border" : "2px solid white"

                })
            });
        
           
            $(".regame-button").on("click",function() {
                    $('.second').load("board.html",function(){
                        grid.text('').prop('disabled', false);

                        $(document).trigger('playboard');
                        setup();
                    });
            });

            endgame.on("click", function() {
                $('.second .result').hide(1000);
                $('#firstheading').hide(100);
                $('#Xname').hide(100);
                $('#Oname').hide(100);

                var end=$('.second .final');
                if(opoints>xpoints){
                    end.text(window.Oname+" Wins");}
                else if(opoints<xpoints){
                    end.text(window.Xname+" Wins")
                }
                else{
                    end.text("Match Drawn");
                }
                var restart=$('<button>').text("Restart");
                end.append(restart);
                restart.click(function(){
                    window.location.href = "index.html";
                });
               
            });

            // Apply CSS styles to both buttons
            $('.second .result button').css({
                "font-size": "40px",
                "margin-left": "375px",
                "border-radius": "20px",
                "margin-bottom" : "30px",
                "width": "170px",
            });
        }, 2000);


    }

    // Other code to continue the game
});



function win() {
    
var grid0=grid.eq(0);
var grid1=grid.eq(1);
var grid2=grid.eq(2);
var grid3=grid.eq(3);
var grid4=grid.eq(4);
var grid5=grid.eq(5);
var grid6=grid.eq(6);
var grid7=grid.eq(7);
var grid8=grid.eq(8);
console.log(grid0,grid1,grid2);
if(clicks<10){
    if ((grid0.text() === "X") && (grid1.text() === "X") && (grid2.text() === "X")) {  //row1
        grid0.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid1.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid2.css({
            "background" : "white",
            "color" : "black",
          
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid0.text() === "O") && (grid1.text() === "O") && (grid2.text() === "O")) {
        grid0.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid1.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid2.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid3.text() === "X") && (grid4.text() === "X") && (grid5.text() === "X")) { //row2
        grid3.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
              
        });
        grid5.css({
            "background" : "white",
            "color" : "black",
             
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid3.text() === "O") && (grid4.text() === "O") && (grid5.text() === "O")) {
        grid3.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid5.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid6.text() === "X") && (grid7.text() === "X") && (grid8.text() === "X")){  //row 3
        grid6.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid7.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid6.text() === "O") && (grid7.text() === "O") && (grid8.text() === "O")) {  
        grid6.css({
            "background" : "white",
            "color" : "black",
              
        });
        grid7.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid0.text() === "X") && (grid4.text()=== "X") && (grid8.text() === "X")) {  //cross1
        grid0.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
        
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
             
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid0.text() === "O") && (grid4.text() === "O") && (grid8.text() === "O")) {
        grid0.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
          
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid2.text()=== "X") && (grid4.text() === "X") && (grid6.text() === "X")){   //cross2
        grid2.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid6.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("X wins");
        return 1;
    }

    else if ((grid2.text() === "O") && (grid4.text() === "O") && (grid6.text() === "O")){  
        grid2.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid6.css({
            "background" : "white",
            "color" : "black",
           
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid0.text()=== "O") && (grid3.text() === "O") && (grid6.text()=== "O")) {       //column 1
        grid0.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid3.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid6.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid0.text() === "X") && (grid3.text()=== "X") && (grid6.text() === "X")) {  
        grid0.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid3.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid6.css({
            "background" : "white",
            "color" : "black",
           
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid1.text()=== "O") && (grid4.text()=== "O") && (grid7.text()=== "O")) {         //column 2
        grid1.css({
            "background" : "white",
            "color" : "black",
            
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid7.css({
            "background" : "white",
            "color" : "black",
          
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid1.text()=== "X") && (grid4.text() === "X") && (grid7.text() === "X")){   
        grid1.css({
            "background" : "white",
            "color" : "black",
           
        });
        grid4.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid7.css({
            "background" : "white",
            "color" : "black",
             
        });
        console.log("X wins");
        return 1;
    }
    else if ((grid2.text()=== "O") && (grid5.text()=== "O") && (grid8.text()=== "O")) {         //column 3
        grid2.css({
            "background" : "white",
            "color" : "black",
             
        });
        grid5.css({
            "background" : "white",
            "color" : "black",
          
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
             
        });
        console.log("O wins");
        return 2;
    }
    else if ((grid2.text()=== "X") && (grid5.text()=== "X") && (grid8.text()=== "X")){   
        grid2.css({
            "background" : "white",
            "color" : "black",
              
        });
        grid5.css({
            "background" : "white",
            "color" : "black",
              
        });
        grid8.css({
            "background" : "white",
            "color" : "black",
            
        });
        console.log("X wins");
        return 1;
    }

else {
    console.log("clicks",clicks);
    if(clicks==9){
        
        return 0;
    }
}
}
 // No win condition met yet
}




}



