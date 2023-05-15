function circleArea(arg)
{
    let type = typeof arg;
    let area = 0;

    if(type == 'number')
    {
        area = Math.PI * Math.pow(arg, 2);
        console.log(area.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}
