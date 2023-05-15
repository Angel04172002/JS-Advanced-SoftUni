function dayOfWeek(day)
{
    let days = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }

    if(days[day] >= 1 && days[day] <= 7)
    {
        console.log(days[day]);
    }
    else
    {
        console.log("error");
    }
}
