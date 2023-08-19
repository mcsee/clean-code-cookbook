<?

final class TextReplacer {
    function replace(string $patternToFind, string $textToReplace, string $subject, string $replaceFunctionName, $postProcessClosure) {
        return $postProcessClosure($replaceFunctionName($patternToFind, $textToReplace, $subject));
    }
}

// Lots of tests on text replacer so we can gain confidence.

final class WordProcessor {

    function replaceText(string $patternToFind, string $textToReplace) {
        $this->text = (new TextReplacer())->replace($patternToFind, $textToReplace, $this->text, 'str_replace', fn($text) => '<<<' . $text . '>>>');
    }
}

final class Obfuscator {

    function obfuscate(string $patternToFind, string $textToReplace) {
        $this->text = (new TextReplacer())->replace($patternToFind, $textToReplace, $this->text, 'str_ireplace', fn($text) => strlower($text));
    }
}