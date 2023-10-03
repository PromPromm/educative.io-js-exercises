function countingPopulation(raw_arr) {
    ans = 0; // final answer
    for (i = 0; i < raw_arr.length; i++) {
    for (j = 0; j < raw_arr[i].length; j++) {
      if (raw_arr[i][j] === null)
        continue
      if (raw_arr[i][j].temp <= 10) {
          ans += raw_arr[i][j].population 
      }
    }
}
return ans
}

var raw_arr= [[{"name":"NewYork","population":8623000,"temp":6,"currency":"USD"},{"name":"Boston","population":685094,"temp":2,"currency":"USD"},{"name":"Los Angeles","population":4000000,"temp":13,"currency":"USD"}],
[{"name":"San Francisco","population":884363,"temp":12,"currency":"USD"},null,{"name":"Charlottesville","population":48019,"temp":8,"currency":"USD"}],
[null, {"name":"Seattle","population":724745,"temp":4,"currency":"USD"}, null]]
console.log(countingPopulation(raw_arr))
