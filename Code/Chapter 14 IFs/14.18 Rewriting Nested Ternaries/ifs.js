const getUnits = secs => {
 if (secs <= 60) return 'seconds'; 
 if (secs <= 3_600) return 'minutes'; 
 if (secs <= 86_400) return 'hours';   
 if (secs <= 2_592_000) return 'days';    
 if (secs <= 31_536_000) return 'months';  
 return 'years' 
}

// More declarative

const getUnits = secs => {
 if (secs <= 60) return 'seconds'; 
 if (secs <= 60 * 60) return 'minutes'; 
 if (secs <= 24 * 60 * 60) return 'hours';   
 if (secs <= 30 * 24 * 60 * 60) return 'days';    
 if (secs <= 12 * 30 * 24 * 60 * 60) return 'months';  
 return 'years' 
}