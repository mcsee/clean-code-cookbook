<?

interface Religion {
    // Define common behavior for religions
}

final class God {
    // Different religions have different beliefs
}

final class PolythiesticReligion implements Religion {
    private $gods;

    public function __construct(Collection $gods) {
        $this->gods = $gods;
    }
}

final class MonotheisticReligion implements Religion {
    private $godInstance;

    public function __construct(God $onlyGod) {
        $this->godInstance = $onlyGod;
    }
}

// According to Christianity and some other religions,
// there’s only one God.
// This does not hold for other religions.

$christianGod = new God();
$christianReligion = new MonotheisticReligion($christianGod);
// Under this context God is unique.
// You cannot create or change a new one.
// This is a scoped global.

$jupiter = new God();
$saturn = new God();
$mythogicalReligion = new PolythiesticReligion([$jupiter, $saturn]);

// Gods are unique (or not) according to context
// You can create test religions with or without unicity
// This is less coupled since you break the direct reference to God class
// God class Single Responsibility is to create gods. Not to manage them