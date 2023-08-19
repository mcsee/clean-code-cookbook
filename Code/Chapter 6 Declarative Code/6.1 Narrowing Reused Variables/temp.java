// print line total
double total = item.getPrice() * item.getQuantity();
System.out.println("Line total: " + total );

// print amount total 
total = order.getTotal() - order.getDiscount();
System.out.println( "Amount due: " + total );

// variable is reused