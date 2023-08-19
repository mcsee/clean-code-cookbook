async fetchOne() { /* long task */ }
async fetchTwo() { /* another long task */ }

async fetchAll() {
  let [res3, res4] = await Promise.all([this.fetchOne(), this.fetchTwo()]);
  //We wait until ALL are done
}