<?

public function testNoNewStarsAppeared(): void
  {
     $expectedStars = $this->historicStarsOnFrame();
     $observedStars = $this->starsFromObservation();
     // These sentences get a very large collection
  
     $newStars = array_diff($expectedStars, $observedStars);
  
     $this->assertEquals($expectedStars, $observedStars ,
         'There are new stars ' . print_r($newStars,true));
     // Now we can see EXACTLY why the assertion failed with a clear and
     // Declarative Message
    }