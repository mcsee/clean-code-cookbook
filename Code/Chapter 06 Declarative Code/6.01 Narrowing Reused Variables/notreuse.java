function printLineTotal() {
  double lineTotal = item.getPrice() * item.getQuantity();
  System.out.println("Line total: " + lineTotal);
}

function printAmountTotal() {
  double ammountTotal = order.getTotal() - order.getDiscount();
  System.out.println( "Amount due: " + ammountTotal);
}