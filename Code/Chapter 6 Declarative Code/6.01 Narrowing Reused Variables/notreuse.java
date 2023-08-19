function printLineTotal() {
  double total = item.getPrice() * item.getQuantity();
  System.out.println("Line total: " + total );
}

function printAmountTotal() {
  double total = order.getTotal() - order.getDiscount();
  System.out.println( "Amount due: " + total );
}