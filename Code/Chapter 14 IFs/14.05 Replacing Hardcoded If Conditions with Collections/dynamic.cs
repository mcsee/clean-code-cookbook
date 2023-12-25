private string[] country_names = {"Germany", "France", "Argentina"} 
// and lots more
private string[] Internet_code_suffixes= {"de", "fr", "ar" } // more
 
private Dictionary<string, string> Internet_codes = 
   new Dictionary<string, string>();

// There are more efficient ways for collection iteration
// This pseudocode is for illustration
int currentIndex = 0; 
foreach (var suffix in Internet_code_suffixes) {
  Internet_codes.Add(suffix, Internet_codes[currentIndex]);
  currentIndex++;
}

private string FindCountryName(string internetCode) {
  return Internet_codes[internetCode];
}