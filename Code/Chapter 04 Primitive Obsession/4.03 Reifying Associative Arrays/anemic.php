<?

final class GeographicCoordinate {

    function __construct($latitudeInDegrees, $longitudeInDegrees) {
        $this->longitude = $longitudeInDegress;
        $this->latitude = $latitudeInDegress;
    }
}

$coordinate = new GeographicCoordinate(1000, 2000);
// Should throw an error since these values don't exist on Earth