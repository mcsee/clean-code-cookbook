final public class PaperSize {
    // ...
}

final public class Document {
    // ...
}

final public class PrintMargins {
    // ...
}

final public class PrintRange {
    // ...
}

final public class ColorConfiguration {
    // ...
}

final public class PrintOrientation {
    // ...
}

final public class PrintSetup {
    public PrintSetup(PaperSize papersize,
           PrintOrientation orientation, 
           ColorConfiguration color,
           PrintRange range,
           int copiesCount,
           PrintMargins margins
           ) {}
}

final public class Printer {   
  void print(Document documentToPrint, 
         PrintSetup setup        
        ) {
    }
}