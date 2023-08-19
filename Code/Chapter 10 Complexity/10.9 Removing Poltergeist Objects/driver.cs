public class Driver
{
    private Car car;

    public Driver(Car car)
    {
        this.car = car;
    }

    public void DriveCar()
    {
        car.driveCar();
    }
}

Car porsche = new Car();
Driver homer = new Driver(porsche);
homer.DriveCar();