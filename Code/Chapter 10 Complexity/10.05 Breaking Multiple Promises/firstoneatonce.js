async fetchLongTask() { }
async fetchAnotherLongTask() { }

async fetchAll() {
  let result1 = await this.fetchLongTask(); 
  let result2 = await this.fetchAnotherLongTask();
  // But they can run in parallel !!  
}                                 