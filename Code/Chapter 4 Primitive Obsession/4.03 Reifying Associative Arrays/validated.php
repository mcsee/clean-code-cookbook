<?

final class GeographicCoordinate {

    function __construct($latitudeInDegrees, $longitudeInDegrees) {
        if (!$this->isValidLatitude($latitudeInDegrees)) {
            throw new InvalidLatitudeException($latitudeInDegrees);
            // ...
            $this->longitude = $longitudeInDegrees;
            $this->latitude = $latitudeInDegrees;
        }
    }
}

$coordinate = new GeographicCoordinate(1000, 2000);
// throws an error since these values don't exist on Earth