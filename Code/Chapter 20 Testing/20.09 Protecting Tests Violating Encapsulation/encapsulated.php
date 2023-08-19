<?

class Hangman {
    private $wordToGuess;

    function __construct(WordRandomizer $wordRandomizer) {
        $this->wordToGuess = $wordRandomizer->newRandomWord();
    }
}

class MockRandomizer implements WordRandomizer {
    function newRandomWord(): string {
        return 'tests';
    }
}

class HangmanTest extends TestCase {
    function test01WordIsGuessed() {
        $hangmanGame = new Hangman(new MockRandomizer());
        // We are in full control!
        $this->assertFalse($hangmanGame->wordWasGuessed());
        $hangmanGame->play('t');
        $this->assertFalse($hangmanGame->wordWasGuessed());
        $hangmanGame->play('e');
        $this->assertFalse($hangmanGame->wordWasGuessed());
        $hangmanGame->play('s');
        $this->assertTrue($hangmanGame->wordWasGuessed());
        // We just test behavior
    }
}