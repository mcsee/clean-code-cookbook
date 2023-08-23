class Number {
    protected double value;

    public Number(double value) {
        this.value = value;
    }
}

class ComplexNumber extends Number {
    protected double imaginaryPart; 
    
    public ComplexNumber(double realPart, double imaginaryPart) {
        super(realPart);
        this.imaginaryPart = imaginaryPart;
    }
}

class RealNumber extends Number { } 