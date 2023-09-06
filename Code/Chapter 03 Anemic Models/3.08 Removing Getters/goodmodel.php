<?

final class Window {
    private $width;
    private $height;
    private $children;

    public function width() {
        return $this->width;
    }

    public function area() {
        return $this->height * $this->width;
    }

    public function addChildren($aChild) {
        // Do not expose internal attributes
        return $this->children[] = $aChild;
    }
}