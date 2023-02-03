import { calculate_rating } from './calculate_rating.js';
import { process_payment } from './process_payment.js';
import { validate_info } from './validate_info.js';

function create_Account() {
  let name = prompt("Enter the user name.");
  let pass = prompt("Enter the password.");
  if (validate_info(name, pass)) {
    let card_number = prompt("Enter the card number.");
    let amount = prompt("Enter the amount.");
    let hold = process_payment(card_number, amount);
    if (hold) {
      alert(hold);
      let n = prompt("Enter rating (1-->5)")
      console.log(calculate_rating(n));
    }
    else{
      alert("Payment unsuccesful");
    }
  }
  else {
    alert("Invalid user.");
  }
}

create_Account();
