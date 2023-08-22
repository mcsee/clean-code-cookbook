class Mp3Converter {
  convertToMp3(source, mimeType) {
    const foundConverter = this.registeredConverters.
        find(converter => converter.handles(mimeType));
        // Do not use metaprogramming to find and iterate converters
        // since this is another problem.    
    if (!foundConverter) {
      throw new Error('No converter found for ' + mimeType);
    }    
    foundConverter.convertToMp3(source);
  }
}