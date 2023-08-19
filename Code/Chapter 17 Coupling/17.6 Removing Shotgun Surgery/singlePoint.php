<?

final class SocialNetwork {

    function postStatus(string $newStatus) {
        $this->assertUserIsLogged();
        // ...
    }

    function uploadProfilePicture(Picture $newPicture) {
        $this->assertUserIsLogged();
        // ...
    }

    function sendMessage(User $recipient, Message $messageSend) {
        $this->assertUserIsLogged();
        // ...
    }

    function assertUserIsLogged() {
        if (!$this->user->isLogged()) {
            throw new Exception('User is not logged');
            // This is just a simplification to show the code smell
            // Operations should be defined as objects with preconditions etc.
        }
    }
}