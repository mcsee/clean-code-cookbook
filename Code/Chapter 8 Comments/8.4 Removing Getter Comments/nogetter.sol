pragma solidity >=0.5.0 <0.9.0;

contract Property {
    int private _price;   

    function price() public view returns(int) {        
        return _price;
    }
}