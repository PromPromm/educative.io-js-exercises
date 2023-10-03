### Task

A demographist wants to find the total population within a demographic. This demographic is in a region with a temperature less than or equal to 10°C. However, with a limited programming background, the demographist has asked for your help!

Your task: is to find the sum of the population in a two-dimensional array of objects which reside in a region of temperature less than or equal to 10°C. Each object consists of the region information.

### Problem statement

You are given one variable named raw_array, assigned to a two-dimensional array consisting of objects. Each object has the following properties:

name: This is assigned to a string with the value of the city’s name in which the population resides. Example, {name: "Sydney"}
population: This is assigned to a number with the value of the quantity of the residing population. Example, {population: 1250000}
temp: This is assigned to a number with the value of the temperature (in °C) of the region. Example, {temp: 3.0}
currency: This is assigned to a string with the value of the currency code of the city in which the population resides. Example, {currency: "AUD"}

Iterate the two-dimensional array of any size. See if the demographic object has a temperature less than or equal to 10°C and add the satisfying demographic object’s population property value to ans.

###### NOTE: Make sure to ignore the null values within the two-dimensional array.
