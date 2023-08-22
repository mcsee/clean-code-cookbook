<?

function dummy() {

    $flag = true;

    while ($flag == true) {

        $result = checkSomething();
        if ($result) {
            $flag = false;
        }
    }
}