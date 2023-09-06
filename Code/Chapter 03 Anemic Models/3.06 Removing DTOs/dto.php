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

// If you need to transfer to an external system you need
// to duplicate (and maintain) the structure

final class SocialNetworkProfileDTO {

   private $userName; // duplicated to be synchronized
   private $friends; // duplicated to be synchronized
   private $feed; // duplicated to be synchronized
   public function __construct() {
        // Empty constructor without validations
   }

   // No protocol, just serializers
}

// If you need to transfer to an external system you create an anemic DTO
$janesProfileToTransfer = new SocialNetworkProfileDTO();