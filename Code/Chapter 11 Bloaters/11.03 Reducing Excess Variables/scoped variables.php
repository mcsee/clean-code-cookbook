<?

function retrieveImagesFrom(string imageUrls) {
  foreach ($imageUrls as $index => $imageFilename) {
    $imageName = $imageNames[$index];
    $fullImageName = $this->directory() . "\\" . $imageFilename;
    if (!file_exists($fullImageName)) {
        if ($this->isRemoteFileName($imageFilename)) {
            $temporaryFilename = $this->temporaryLocalPlaceFor($imageFilename);
            $this->retrieveFileAndSaveIt($imageFilename, $temporaryFilename);
            $localFileSha1 = sha1_file($temporaryFilename);
            list($found, $images, $imageFilename) = 
              $this->tryToFindFile($localFileSha1, $imageFilename, $images, $imageName);
            if (!$found) {
                throw new Exception('File not found locally ('.$imageFilename.') .
                Need to retrieve it and store it');
            }
        } else {
            throw new \Exception('Image does not exist on directory ' .
               $fullImageName);
        }
    }