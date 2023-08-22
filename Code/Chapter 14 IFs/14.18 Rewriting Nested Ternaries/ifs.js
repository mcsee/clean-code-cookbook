const getUnits = secs => {
 if (secs <= 60) return 'seconds'; 
 if (secs <= 3_600) return 'minutes'; 
 if (secs <= 86_400) return 'hours';   
 if (secs <= 2_592_000) return 'days';    
 if (secs <= 31_536_000) return 'months';  
 return 'years' 
}

// This is using ‘Numeric Separators’ notation from Javascript
// to favor readability.
// The underscores are ignored by the JavaScript engine
// and do not affect the value of the number.

const getUnits = secs => {
 if (secs <= 60) return 'seconds'; 
 if (secs <= 60 * 60) return 'minutes'; 
 if (secs <= 24 * 60 * 60) return 'hours';   
 if (secs <= 30 * 24 * 60 * 60) return 'days';    
 if (secs <= 12 * 30 * 24 * 60 * 60) return 'months';  
 return 'years' 
}

// You can read the premature optimization chapter to find out
// if this brings a considerable performance penalty