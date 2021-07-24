
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
const timeline = d3.select('#milestone')

const maxDate = d3.max(((data.map(d => new Date(d.date)))))
const minDate = d3.min(((data.map(d => new Date(d.date)))))

console.log(data.map(d => new Date(d.date)))
console.log(minDate)
console.log(maxDate)

let x = d3.scaleLinear()
    .domain([minDate, maxDate])
    .range([0, width])

// let y = d3.scaleLinear()
//     .range([height, 0]);

// let xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width])
// let yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height])

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