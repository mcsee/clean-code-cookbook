<?

function retrieveImagesFrom(array $imageUrls) {
  foreach ($imageUrls as $index => $imageFilename) {
    $imageName = $imageNames[$index];
    $fullImageName = $this->directory() . "\\" . $imageFilename;
    if (!file_exists($fullImageName)) {
      if (str_starts_with($imageFilename, 'https://cdn.example.com/')) {
          $url = $imageFilename;
          // This variable duplication is not really necessary 
          // When you scope variables        
          $saveto= "c:\\temp"."\\".basename($imageFilename);
          $ch = curl_init ($url);
          curl_setopt($ch, CURLOPT_HEADER, 0);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
          $raw = curl_exec($ch);
          curl_close ($ch);
          if(file_exists($saveto)){
               unlink($saveto);
          }
          $fp = fopen($saveto,'x');
          fwrite($fp, $raw);
          fclose($fp);
          $sha1 = sha1_file($saveto);
          $found = false;
          $files = array_diff(
            scandir($this->directory()), 
            array('.', '..'));
          foreach ($files as $file){
              if ($sha1 == sha1_file($this->directory()."\\".$file)) {
                  $images[$imageName]['remote'] = $imageFilename;
                  $images[$imageName]['local'] = $file;
                  $imageFilename = $file;
                  $found = true;
                  // Iteration keeps going on even after you found it
              }
          }
          if (!$found){
            throw new \Exception('No image was found');
         }
        // Debugging at this point your context is polluted with variables
        // from previous executions no longer needed
        // for example: the curl handler
  }