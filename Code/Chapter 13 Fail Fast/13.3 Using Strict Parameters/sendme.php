<?

function parseArguments($arguments) {
    $arguments = $arguments ?: null;
    // Always the billion-dollar mistake
    if (is_empty($arguments)) {
        $this->arguments = http_build_query($_REQUEST);
        // Global coupling and side effects
    } elseif (is_array($arguments)) {
        $this->arguments = http_build_query($arguments);
    } elseif (!$arguments) { // null unmasked
        $this->arguments = null;
    } else {
        $this->arguments = (string)$arguments;
    }
}