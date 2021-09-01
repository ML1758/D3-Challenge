# D3-Challenge
D3 Assignment - Milinda 'ML' Liyanage

## Summary

* This assignment is to use D3java script and plotly to read data and display interactive charts.
* The application allows a user to select an ID which display the relevant master data and the corresponding top 10 values in a horizontal bar chart and the details in a bubble chart.
* As an optional section, a gauge chart is displayed with a single attribute.

### The following tasks were done for the main requirement: 

* The data was in json format and it was read through d3.
* A function was created to append the IDs to the dropdown list.
* The HTML code was changed to run the main function (updatePlotly), when the list value is changed.
* As the application starts, all the information in the page is prepopulated with the first ID’s data.  
* The main function read the selected ID and runs the metadata pane and the three charts. The ID is passed when calling each of the functions.
* The ID was converted to a an init before passing to two of the functions. 
* The metadata function read the data then filter by the entered ID and then display.
* The bar chart function read the data then filter by the entered ID and then slice to get the first 10 value set.
* The bar chart is horizontal and have values displayed from large to small, i.e., reversed.
* The bubble chart function read the data then filter by the entered ID and then display.

### Optional requirement:

* A gauge chart function was created to read the data filter by the entered ID.
* The gauge display a single attribute.