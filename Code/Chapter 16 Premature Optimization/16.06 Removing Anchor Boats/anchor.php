<?

final class DatabaseQueryOptimizer {
  
  public function selectWithCriteria($tableName, $criteria) {
    // Make some optimizations manipulating criteria
  }
  
  private function sqlParserOptimization(SQLSentence $sqlSentence)
    : SQLSentence {
    // Parse the SQL converting it to a string 
    // and then working with their nodes as strings and lots of regex
    // This was a very costly operation overcoming real SQL benefits.
    // But since you made too much work you decide to keep the code.
  }  
}