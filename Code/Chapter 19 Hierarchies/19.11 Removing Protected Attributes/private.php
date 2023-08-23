<?

interface ElectronicDevice { }

interface PhoneCommunication { }

final class IPad implements ElectronicDevice {
    private $operatingSystem; // The attributes are duplicated
    private $battery; 
    // If you have too much duplicated behavior you should extract them

    public function __construct(Battery $battery, OperatingSystem $ios) {
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}

final class IPhone implements ElectronicDevice, PhoneCommunication {
    private $phoneModule;
    private $operatingSystem;
    private $battery;

    public function __construct(
        Battery $battery, 
        OperatingSystem $ios,
        PhoneModule $phoneModule) {
        $this->phoneModule = $phoneModule;
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}

final class Iphone implements ElectronicDevice, PhoneCommunication {

    private $phoneModule;
    private $operatingSystem;
    private $battery;

    public function __construct(
        Battery $battery, 
        OperatingSystem $ios,
        PhoneModule $phoneModule) {
        $this->phoneModule = $phoneModule;
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}