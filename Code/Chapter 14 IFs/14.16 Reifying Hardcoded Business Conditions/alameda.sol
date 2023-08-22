if (currentExposure > 0.15 && customer != "Very Special Customer") {
  // Be extra careful not to liquidate
  liquidatePosition();
}