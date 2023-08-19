public bool CheckIfStringHas3To7LowercaseCharsFollowedBy3or4Numbers(string string)
{
  Regex regex = new Regex(@"[a-z]{2,7}[1-9]{3,4}")
  var hasMatch = regex.IsMatch(string);
  return hasMatch;
}