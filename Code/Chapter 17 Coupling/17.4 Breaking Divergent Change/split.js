class Webpage {
  
  renderHTML() {
    this.renderDocType();
    this.renderTitle();
    (new RSSFeed()).render();
    this.renderRssTitle();
    this.renderRssDescription();
   // ...
  }
  // HTML render can change
}

class RSSFeed {
  render() {
    this.renderDescription();
    this.renderTitle();
    this.renderPubDate();
    // ...
  }  
  // RSS Format might change
  // Might have unitary tests
  // etc
}