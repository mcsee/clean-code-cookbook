<?

final class Point {
    private $rho;
    private $theta;

    public function x() {
        return $this->rho * cos($this->theta);
    }

    public function y() {
        return $this->rho * sin($this->theta);
    }
}

final class DistanceCalculator {
    function distanceBetween(Point $origin, Point $destination) {

        return sqrt((($destination->x() - $origin->x() ^ 2) + (($destination->y() - $origin->y()) ^ 2)));
    }

}