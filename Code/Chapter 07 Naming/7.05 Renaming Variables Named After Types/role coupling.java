public bool CheckIfStringHas3To7LowercaseCharsFollowedBy3or4Numbers
    (string password)
{
  Regex stringHas3To7LowercaseCharsFollowedBy3or4Numbers = 
    new Regex(@"[a-z]{2,7}[1-9]{3,4}")
  var hasMatch =
    stringHas3To7LowercaseCharsFollowedBy3or4Numbers.IsMatch(password);
  return hasMatch;  
}