async fetchLongTask() { }
async fetchAnotherLongTask() { }

async fetchAll() {
  let [result1, result2] = 
      await Promise.all([this.fetchLongTask(), this.fetchAnotherLongTask()]);
      // You wait until ALL are done
}