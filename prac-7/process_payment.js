export function process_payment(cn, amount) {
  if (cn.length != 8 || amount < 1) {
    return 0;
  }
  else {
    return "Payment sucessfull";
  }
}
