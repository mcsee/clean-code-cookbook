Class Mp3Converter {

  public convertToMp3(source, mimeType) {
    foundConverter = this.registeredConverters.find(converter => converter.handles(mimeType));
    // Do not use metaprogramming to find and iterate converters since this is another smell.
    
    if (foundConverter == undefined) {
      throw new ('No converter found for' + mimetype)
    }
    foundConverter.convertToMp3(source);
}