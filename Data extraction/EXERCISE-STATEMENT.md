### Task

A data scientist wants to create a model where the input is a subset of data from a large data set. Because she is busy manipulating other variables for the model, she asked you to do a small task related to data extraction.

Your task is to extract a subset of the array from a two-dimensional array containing the stored data. The data scientist will then use that as the input for her model.

### Problem statement

You are given four variables: raw_array, row, s, and e. Each variable represents the following:

raw_array: variable to which the data set in a two-dimensional array is assigned
row: row index in which the sub-array resides
s: starting index of the sub-array in raw_array
e: last index of the sub-array in raw_array
Create a copy of the single-dimension sub-array at row index row which starts from index s and ends at index e. Assign it to ans.

Make sure to assign undefined to ans if any invalid index is assigned to row, s, or e. The index is invalid if the number assigned to it is either negative or out of bounds of the length of raw_arr.
