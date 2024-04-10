<?

abstract class ElectronicDevice {
    protected $battery;

    public function __construct(OperatingSystem $battery) {
        $this->battery = $battery;
    }
}

abstract class Idevice extends ElectronicDevice {
    protected $operatingSystem;

    public function __construct(Battery $battery, OperatingSystem $ios) {
        $this->operatingSystem = $ios;
        parent::__construct($battery)
  }

}

final class Ipad extends Idevice {

    public function __construct(Battery $battery, OperatingSystem $ios) {
        parent::__construct($battery, $ios)
  }

}

final class Iphone extends Idevice {

  private $phoneModule;
 
  public __construct(Battery $battery, 
                     OperatingSystem $ios,
                     PhoneModule $phoneModule) {
    $this->phoneModule = $phoneModule;
    parent::__construct($battery, $ios)
  }
}