<?php

function configureUser() {
  $password = '123456';
  // Setting a password on a variable is another vulnerability
  // And Code Smell
  $user = new User($password);
  // Notice Variable doesn't change
}