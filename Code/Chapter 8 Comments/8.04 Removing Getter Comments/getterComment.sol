contract Property {
    int private price;   

    function getPrice() public view returns(int) {           
           /* returns the Price  */

        return price;
    }
}