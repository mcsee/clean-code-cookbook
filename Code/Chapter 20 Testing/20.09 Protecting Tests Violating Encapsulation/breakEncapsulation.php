<?

class Hangman {
    private $wordToGuess;

    function __construct() {
        $this->wordToGuess = getRandomWord();
        // Test is not in control of this
    }

    public function getWordToGuess(): string {
        return $this->wordToGuess;
        // Sadly we need to reveal this
    }
}

class HangmanTest extends TestCase {
    function test01WordIsGuessed() {
        $hangmanGame = new Hangman();
        $this->assertEquals('tests', $hangmanGame->wordToGuess());
        // How can we make sure the word is guessed?
    }
}