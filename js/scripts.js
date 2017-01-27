// BUSINESS LOGIC

function User(userName, initialDeposit, deposit, withdrawal) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

User.prototype.balance = function() {
  return ((this.initialDeposit + this.deposit) - this.withdrawal);
}

var customers = []

// USER LOGIC
$(document).ready(function() {
  $("form#daBank").submit(function(event) {
    event.preventDefault();
    var userName = $("#name-input").val();
    var initialDeposit = parseInt($("input#deposit-input").val());
    var deposit = parseInt($("input#deposit-amount").val());
    var withdrawal = parseInt($("input#withdraw-amount").val());

    var user = new User(userName, initialDeposit, deposit, withdrawal);
    customers.push(user);

    $("#user-name").text(userName);
    $("#balance").text(user.balance());
    $(".customers").text("");
    for (counter=0;counter<customers.length;counter++) {
    $(".customers").append("<li>"+customers[counter].userName+"</li>");
    console.log(customers);
  };
  });
});
