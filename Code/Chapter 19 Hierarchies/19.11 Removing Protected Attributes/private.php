<?

interface ElectronicDevice {
    // ...
}

interface PhoneCommunication {
    // ...
}

final class Ipad implements ElectronicDevice {

    private $operatingSystem;
    private $battery;

    public function __construct(Battery $battery, OperatingSystem $ios) {
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}

final class Iphone implements ElectronicDevice, PhoneCommunication {

    private $phoneModule;
    private $operatingSystem;
    private $battery;

    public function __construct(Battery $battery, OperatingSystem $ios, PhoneModule $phoneModule) {
        $this->phoneModule = $phoneModule;
        $this->operatingSystem = $ios;
        $this->battery = $battery;
    }
}