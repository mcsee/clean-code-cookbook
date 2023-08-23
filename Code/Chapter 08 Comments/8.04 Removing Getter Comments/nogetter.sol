contract Property {
    int private _price;   

    function price() public view returns(int) {        
        return _price;
    }
}