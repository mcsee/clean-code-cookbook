<?

class WordProcessor {

    function replaceText(string $patternToFind, string $textToReplace) {
        $this->text = '<<<' . 
            str_replace($patternToFind, $textToReplace, $this->text) . '>>>';
    }
}

final class Obfuscator {

    function obfuscate(string $patternToFind, string $textToReplace) {
        $this->text = 
            strlower(str_ireplace($patternToFind, $textToReplace, $this->text));
    }
}