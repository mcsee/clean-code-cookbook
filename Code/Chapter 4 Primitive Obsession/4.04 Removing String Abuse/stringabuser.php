<?

$schoolDescription = 'College of Springfield';

preg_match('/[^ ]*$/', $schoolDescription, $results);
$location = $results[0]; // $location = 'Springfield'.

$school = preg_split('/[\s,]+/', $schoolDescription, 3)[0]; //'College'