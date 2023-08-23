<?

final class Point {
    public $x;
    public $y;
}

final class DistanceCalculator {
    function distanceBetween(Point $origin, Point $destination) {
        return sqrt((($destination->x - $origin->x) ^ 2) + 
           (($destination->y - $origin->y) ^ 2));
    }
}