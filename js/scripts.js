// BUSINESS LOGIC

// USER LOGIC
$(document).ready(function() {
  $("form#daBank").submit(function(event) {
    event.preventDefault();
    var userName = $(("#name-input").val());
    var initialDeposit = parseInt($("input#deposit-input").val());
    var deposit = parseInt($("input#deposit-amount").val());
    var withdrawl = parseInt($("input#withdrawl-amount").val());

    $("#balance").text(balance);

  });
});
