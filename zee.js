$(document).ready(function () {
    var diceArr = [];
    var rollNumber = 0;
    
        $('body').on('click', '.roll', function(){
            if(rollNumber < 3){
                var diceRoll;
                $(".dice-series li.not-saved").remove();
                var savedDice = $('li.saved').length || 0;

                for(var i = savedDice; i < 5; i++){
                    diceRoll = Math.floor(Math.random() * 6) + 1;
                    diceArr.push(diceRoll);
                    $(".dice-series").append("<li class='not-saved' data-value='"+ diceRoll +"'><img class='dice-img' src='assets/dice"+diceRoll + ".png' /></li>")
                }

                diceArr = [];
                rollNumber ++;
                $(".roll-number").text(rollNumber)
            } 

            if (rollNumber == 3) {
                $(".roll").attr("disabled", true);
                $(".roll-number-container").addClass("disabled");
            }
        });
    

    $('body').on('click', '.dice-series li', function(){
        $(this).toggleClass("saved")
        $(this).toggleClass("not-saved");
    });

    $("body").on("click", ".dice-clear", function () {
        $(".dice-series li").remove();
        $(".roll-number").text(0);
        $(".roll").removeAttr("disabled");
        $(".roll-number-container").removeClass("disabled");
        rollNumber = 0;
    });

});
