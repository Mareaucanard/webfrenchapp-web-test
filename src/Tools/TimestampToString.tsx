function GetDayName(day: number)
{
    var possible_days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    if (day < 0 || day > 6) {
        return day
    }
    return possible_days[day]
}

function GetMonthName(month: number) {
    var possible_months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
    if (month < 0 || month > 11) {
        return "???"
    }
    return possible_months[month]
}

function TimestampToString(timestamp: number) {
    var date = new Date(timestamp)
    var result = GetDayName(date.getDay()) + " " + date.getDate() + " " + GetMonthName(date.getMonth()) + " " + date.getFullYear()
    return result
}

export default TimestampToString
