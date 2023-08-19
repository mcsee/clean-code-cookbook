<?php

final class Window {
    public $width;
    public $height;
    public $children;

    public function getWidth() {
        return $this->width;
    }

    public function getArea() {
        return $this->width * $this->height;
    }

    public function getChildren() {
        return $this->children;
    }
}