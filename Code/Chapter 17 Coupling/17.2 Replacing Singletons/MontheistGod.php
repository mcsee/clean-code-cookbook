<?

interface Religion {
    // Define behavior
}

final class God {
    // There can be as many as you wish
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

// According to christianity there's only one God.
// This does not hold on other religions

$christianGod = new God();
$christianReligion = new MonotheisticReligion($christianGod);
// Under this context God is unique. We cannot create or change a new one.
// This is a scoped global

$jupiter = new God();
$saturn = new God();
$mythogicalReligion = new PolythiesticReligion([$jupiter, $saturn]);

// Gods are unique (or not) according to context
// We can create test religions with or without unicity
// This is less coupled since we break the direct reference to God class
// God class Single Responsibility is to create gods. Not to manage them

