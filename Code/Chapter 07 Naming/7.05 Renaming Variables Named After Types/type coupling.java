public bool CheckIfStringHas3To7LowercaseCharsFollowedBy3or4Numbers
    (string textToCheck)
{
        Regex regex = new Regex(@"[a-z]{2,7}[1-9]{3,4}")
        var bool = regex.IsMatch(textToCheck);
        return bool;
}