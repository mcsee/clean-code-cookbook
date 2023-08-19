Class Mp3Converter {

  public convertToMp3(source, String mimeType) {
    if(mimeType.equals("audio/mpeg")) {
        this.convertMpegToMp3(source)
    } else if(mimeType.equals("audio/wav")) {
        this.convertWavToMp3(source)
    } else if(mimeType.equals("audio/ogg")) {
        this.convertOggToMp3(source)
    } else if(...) {
        // Lots of new elses
}