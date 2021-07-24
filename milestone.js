// https://www.d3indepth.com/scales/

const data = [
    { date: '1/1/2021', value: 16 },
    { date: '2/1/2021', value: 10 },
    { date: '9/13/2021', value: 16 },
    { date: '4/2/2021', value: 8 },
    { date: '6/3/2021', value: 6 },
    { date: '7/3/2021', value: 6 },
    { date: '8/3/2021', value: 6 },
    { date: '9/3/2021', value: 6 },
    { date: '9/5/2021', value: 6 },
    { date: '12/31/2021', value: 6 }
]

const margin = { 'left': 20, 'right': 20}
const width = 1000 - margin.left - margin.right
const monthWidth = width / 12
const monthPadding = 5
const timeline = d3.select('#milestone')

const maxDate = d3.max(((data.map(d => new Date(d.date)))))
const minDate = d3.min(((data.map(d => new Date(d.date)))))
const monthRange = d3.range(0,12,1)
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


console.log(data.map(d => new Date(d.date)))
console.log(minDate)
console.log(maxDate)

let x = d3.scaleLinear()
    .domain([minDate, maxDate])
    .range([0, width])

let monthX = d3.scaleLinear()
    .domain([0,12])
    .range([0, width])

console.log(minDate.getTime(), maxDate.getTime())

timeline
    .append("g")
        .append("line")
        .attr('stroke', 'blue')
        .attr('stroke-width', '2')
        .attr('x1', x(minDate) + margin.left)
        .attr('x2', x(maxDate) + margin.left)
        .attr('y1', 80)
        .attr('y2', 80)

timeline
    .append("g")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr('width', 5)
    .attr('height', 20)
    .attr('cx', (d,i) => x(new Date(d.date).getTime()) + margin.left)
    .attr('cy', 80)
    .attr('r', 10)
    .style('opacity', 0.3)


timeline
    .append("g")
    .selectAll('rect')
    .data(monthRange)
    .join("rect")
    .attr('x', (d) => monthX(d) + margin.left)
    .attr('width', monthWidth - monthPadding)
    .attr('height', 30)
    .attr('y', 100)
    .style('fill', "rgb(209, 227, 243)")


timeline
    .append("g")
    .selectAll('text')
    .data(monthRange)
    .enter().append('text')
    .attr('x', (d) => monthX(d) + margin.left + 10)
    .attr('y', 125)
    .attr('height', 20)
    .attr('width', 25)
    .text(d => monthLabels[d])
    .style('fill', '#000')
