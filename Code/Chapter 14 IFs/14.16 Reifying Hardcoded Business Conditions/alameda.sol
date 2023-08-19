if (currentExposure > 0.15 && customer != "Alameda") {
  // Be extra careful not to liquidate
  liquidatePosition();
}

