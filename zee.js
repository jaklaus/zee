$(document).ready(function() {
  var diceArr = [];
  var savedDiceArr = [];
  var rollNumber = 0;

  var savedDiceTotal = 0;
  $("body").on("click", ".roll", function() {
    if (rollNumber < 3) {
      var diceRoll;
      $(".dice-series li.not-saved").remove();
      var savedDice = $("li.saved").length || 0;
      var diceTotal = 0;
      diceTotal += savedDiceTotal;
      for (var i = savedDice; i < 5; i++) {
        diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArr.push(diceRoll);

        $(".dice-series").append(
          "<li class='not-saved' data-value='" +
            diceRoll +
            "'><img class='dice-img' src='assets/dice" +
            diceRoll +
            ".png' /></li>"
        );
        diceTotal += diceRoll;
      }

      var totalDiceArr = savedDiceArr.concat(diceArr);
      var ones = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 1)
        .reduce((acc, val) => acc + val, 0);
      var twos = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 2)
        .reduce((acc, val) => acc + val, 0);
      var threes = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 3)
        .reduce((acc, val) => acc + val, 0);
      var fours = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 4)
        .reduce((acc, val) => acc + val, 0);
      var fives = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 5)
        .reduce((acc, val) => acc + val, 0);
      var sixes = totalDiceArr
        .filter(totalDiceArr => totalDiceArr == 6)
        .reduce((acc, val) => acc + val, 0);

      $(".dice-ones .number-total").text(ones);
      $(".dice-twos .number-total").text(twos);
      $(".dice-threes .number-total").text(threes);
      $(".dice-fours .number-total").text(fours);
      $(".dice-fives .number-total").text(fives);
      $(".dice-sixes .number-total").text(sixes);

      diceArr = [];
      rollNumber++;

      $(".roll-number").text(rollNumber);
      $(".dice-total .dice-total-number").text(
        totalDiceArr.reduce((acc, val) => acc + val, 0)
      );
    }

    if (rollNumber == 3) {
      rollNumber = 0;
      diceTotal = 0;
      savedDiceTotal = 0;
      savedDiceArr = [];
      totalDiceArr = [];
      $(".roll").attr("disabled", true);
      $(".roll-number-container").addClass("disabled");
    }
  });

  $("body").on("click", ".dice-series li", function() {
    $(this).toggleClass("saved");
    $(this).toggleClass("not-saved");
    savedDiceTotal += $(this).data("value");
    if ($(this).hasClass("saved")) {
      savedDiceArr.push($(this).data("value"));
    }
    if ($(this).hasClass("not-saved")) {
      var index = savedDiceArr.indexOf($(this).data("value"));
      if (index !== -1) savedDiceArr.splice(index, 1);
    }

  });

  $("body").on("click", ".dice-clear", function() {
    rollNumber = 0;
    diceTotal = 0;
    savedDiceTotal = 0;
    savedDiceArr = [];
    totalDiceArr = [];
    $(".dice-series li").remove();
    $(".roll-number").text(0);
    $(".roll").removeAttr("disabled");
    $(".roll-number-container").removeClass("disabled");
    $(".dice-total .dice-total-number").text(diceTotal);

    $(".dice-calc .number-total").each(function() {
      $(this).text("");
    });
  });

  function removeA(arr) {
    var what,
      a = arguments,
      L = a.length,
      ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }
});
