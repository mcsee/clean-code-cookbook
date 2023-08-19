pragma solidity >=0.5.0 <0.9.0;

contract Property {
    int private price;   

    function getPrice() public view returns(int) {           
           /* returns the Price  */

        return price;
    }
}