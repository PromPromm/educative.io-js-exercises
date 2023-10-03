function extract(raw_arr, row, s, e) {
    if (row > (raw_arr.length - 1) || row < 0 || s === e+1) {
    ans = undefined;
}else {
ans = raw_arr[row].slice(s, e+1)}
return ans
}
var arr = [[200, 50, 30, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]
console.log(extract(arr, 1, 0, 2))
