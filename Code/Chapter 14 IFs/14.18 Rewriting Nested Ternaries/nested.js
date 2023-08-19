const getUnits = secs => (
 secs <= 60       ? 'seconds' :
 secs <= 3600     ? 'minutes' :
 secs <= 86400    ? 'hours'   :
 secs <= 2592000  ? 'days'    :
 secs <= 31536000 ? 'months'  :
                    'years' 
)