class ExcelSheet {
  FileProperties fileProperties;
  SecurityProperties securityProperties;
  DocumentDatingProperties datingProperties;
  RevisionProperties revisionProperties;
  LanguageProperties languageProperties;
  DocumentContent content;  
}

// Object has less attributes
// They are not only grouped for testability
// New objects are more cohesive, more testable, less conflicts and more reusable
// FileProperties/SecurityProperties can be reused for other documents
// Rules and preconditions on fileProperties will be moved to this object so ExcelSheet constructor will be cleaner