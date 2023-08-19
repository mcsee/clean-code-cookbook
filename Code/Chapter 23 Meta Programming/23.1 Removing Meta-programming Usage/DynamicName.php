<?

$selector = 'getLanguage' . $this->languageCode;
Reflection::invokeMethod($selector, $object);