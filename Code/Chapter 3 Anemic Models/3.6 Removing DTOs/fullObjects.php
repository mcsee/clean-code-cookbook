<?

final class SocialNetworkProfile {

    private $userName;
    private $friends; // friends is a reference to a large collection
    private $feed; // feed references the whole user feed

    public function __construct($userName, FriendsCollection $friends, UserFeedBehavior $feed) {
        $this->assertUsernameIsValid($userName);
        $this->assertNoFriendDuplicates($friends);
        $this->userName = $userName;
        $this->friends = $friends;
        $this->feed = $feed;
        $this->assertNoFriendOfMyself($friends);

    }
    // lots of protocol
}

interface FriendsCollectionProtocol {
}

final class FriendsCollection implements FriendsCollectionProtocol {

}

final class FriendsCollectionProxy implements FriendsCollectionProtocol {
    // proxy protocol
    // travels as a lightweight object and can get contents when requested
}

abstract class UserFeedBehavior {
}

final class UserFeed extends UserFeedBehavior {
}

final class NullFeed extends UserFeedBehavior {
    // throws an error when requested for behavior
}

// If we need to transfer to an External system we create a valid object
$janesProfileToTransfer = new SocialNetworkProfile('jane', new FriendCollectionProxy(), new NullFeed());