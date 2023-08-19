<?

final class SocialNetworkProfile {

    private $userName;
    private $friends; // friends is a reference to a large collection
    private $feed; // feed references the whole user feed

    public function __construct($userName, $friends, UserFeed $feed) {
        $this->assertUsernameIsValid($userName);
        $this->assertNoFriendDuplicates($friends);
        $this->userName = $userName;
        $this->friends = $friends;
        $this->feed = $feed;
        $this->assertNoFriendofMylsef($friends);

    }
    // Lots of protocol
}

// If we need to transfer to an External system we need
// to duplicate (and maintain) the structure

final class SocialNetworkProfileDTO {

    private $userName;

    public function __construct() {
        // Empty construct without validations
    }

    // No protocol, just serializers
}

// If we need to transfer to an External system we create an anemic DTO
$janesProfileToTransfer = new SocialNetworkProfileDTO();