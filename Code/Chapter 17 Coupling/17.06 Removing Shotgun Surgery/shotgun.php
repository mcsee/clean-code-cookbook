<?

final class SocialNetwork {

    function postStatus(string $newStatus) {
        if (!$user->isLogged()) {
            throw new Exception('User is not logged');
        }
        // ...
    }

    function uploadProfilePicture(Picture $newPicture) {
        if (!$user->isLogged()) {
            throw new Exception('User is not logged');
        }
        // ...
    }

    function sendMessage(User $recipient, Message $messageSend) {
        if (!$user->isLogged()) {
            throw new Exception('User is not logged');
        }
        // ...
    }
}