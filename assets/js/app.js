var svgWidth = 850;
var svgHeight = 475;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 60
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function(healthData) {

    // Parse Data/Cast as numbers
    healthData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.healthcare = +data.healthcare;
    });

    // Create scale functions
    var xLinearScale = d3.scaleLinear()
      .domain([8, d3.max(healthData, d => d.poverty)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([2, d3.max(healthData, d => d.healthcare)])
      .range([height, 0]);

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append Axes to the chart
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Create Circles
    var circlesGroup = chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "10")
    .attr("fill", "lightblue")
    .attr("opacity", ".75")
    ;

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 5)
      .attr("x", 0 - (height / 1.5))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2.5}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("In Poverty (%)");

    // chartGroup.append('text')
    //    .attr("transform", `translate(${d => xLinearScale(d.poverty)}, ${d => yLinearScale(d.healthcare)})`)
    //   .attr('text-anchor', 'middle')
    //   .attr('alignment-baseline', 'middle')
    //   .style('font-size', '10px')
    //   .attr('fill-opacity', 50)
    //   .attr('fill', 'red')
    //   .text("xx")

    // chartGroup.append("text").text(x);

    console.log(healthData);

    var abbr = healthData.map(({ abbr }) => abbr);
    console.log(abbr);

    var x = xLinearScale(healthData) ;
    for (var i = 0; i < healthData.length; i++) {   
      chartGroup.append('text')
      .attr("transform", `translate(${healthData[i].poverty *10}, ${healthData[i].healthcare*10})`)
     //.attr("transform", `translate(${d => xLinearScale(d.poverty)}, ${d => yLinearScale(d.healthcare)})`)
     .attr('text-anchor', 'middle')
     .attr('alignment-baseline', 'middle')
     .style('font-size', '10px')
     .attr('fill-opacity', 50)
     .attr('fill', 'red')
     .text(healthData[i].abbr)

     //x = xLinearScale(healthData[i].poverty)

     //console.log(x[i]);
     //  console.log(healthData[i].poverty)
    //   console.log(healthData[i].healthcare)
    //   console.log(healthData[i].abbr);
     

    };

    console.log(xLinearScale);
    

  }).catch(function(error) {
    console.log(error);
});
