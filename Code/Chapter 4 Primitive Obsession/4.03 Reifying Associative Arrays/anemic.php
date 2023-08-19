<?

final class GeographicCoordinate {

    function __construct($latitude, $longitude) {
        $this->longitude = $longitude;
        $this->latitude = $latitude;
    }
}

$coordinate = new GeographicCoordinate(1000, 2000);
// Should throw an error since these values don't exist on Earth