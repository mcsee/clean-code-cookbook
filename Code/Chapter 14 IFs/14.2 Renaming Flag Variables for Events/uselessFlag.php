<?

function dummy() {

    $flag = true;

    while ($flag == true) {

        $result = doSomething();
        if ($result) {
            $flag = false;
        }
    }
}