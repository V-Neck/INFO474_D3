function row(d) {
  d.year = +d.year;
  return d;
}

var source_url = "data/police_shootings.csv";

d3.csv(source_url, row, function(data) {
  return data;
})