class ComplexNumber {
    protected double realPart;
    protected double imaginaryPart;

    public ComplexNumber(double realPart, double imaginaryPart) {
        this.realPart = realPart;
        this.imaginaryPart = imaginaryPart;
    }
}

class RealNumber extends ComplexNumber {
    public RealNumber(double realPart) {
        super(realPart, 0);
    }

    public void setImaginaryPart(double imaginaryPart) {
        System.out.println("Cannot set imaginary part for a real number.");
    }
}