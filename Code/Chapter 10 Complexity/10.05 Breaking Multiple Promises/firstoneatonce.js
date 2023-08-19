async fetchOne() { /* long task */ }
async fetchTwo() { /* another long task */ }

async fetchAll() {
  let res1 = await this.fetchOne(); 
  let res2 = await this.fetchTwo();
  // they can run in parallel !!  
}
                                 