function timeToWalk(totalSteps, lengthOfFootprint, studentSpeed)
{
    let totalDistanceInMeters = totalSteps * lengthOfFootprint
    let speedInMetersPerSecond = studentSpeed / 3.6

    let totalTimeInSeconds = Math.round(totalDistanceInMeters / speedInMetersPerSecond)

    let totalHours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor(totalTimeInSeconds / 60)
    let numberOfRests = Math.floor(totalDistanceInMeters / 500);
    let totalMinutes = minutes + numberOfRests
    let totalSeconds = totalTimeInSeconds - minutes * 60
    
    if(totalHours == 24)
    {
        totalHours = 0
    }

    let hh = totalHours <= 9 ? "0" + totalHours : totalHours
    let mm = totalMinutes <= 9 ? "0" + totalMinutes : totalMinutes
    let ss = totalSeconds <= 9 ? "0" + totalSeconds : totalSeconds
 

    let output = `${hh}:${mm}:${ss}`
    console.log(output)
}
