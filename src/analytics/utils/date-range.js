const {
    startOfDay,
    endOfDay,
    startOfMonth,
    endOfMonth,
    subDays,
    differenceInCalendarDays,
    format
} = require("date-fns");

function formatDate(date) {
    return format(date, "yyyy-MM-dd");
}

function today() {
    return {
        from: startOfDay(new Date()),
        to: endOfDay(new Date())
    };
}

function yesterday() {
    const date = subDays(new Date(), 1);
    return {
        from: startOfDay(date),
        to: endOfDay(date)
    };
}

function last7Days() {
    return {
        from: startOfDay(subDays(new Date(), 6)),
        to: endOfDay(new Date())
    };
}

function last30Days() {
    return {
        from: startOfDay(subDays(new Date(), 29)),
        to: endOfDay(new Date())
    };
}

function thisMonth() {
    return {
        from: startOfMonth(new Date()),
        to: endOfDay(new Date())
    };
}

function lastMonth() {
    const last = subDays(startOfMonth(new Date()), 1);
    return {
        from: startOfMonth(last),
        to: endOfMonth(last)
    };
}

function parseDate(date) {
    const [year, month, day] = date.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
}

function getPreviousPeriod(from, to) {

    const start = parseDate(from);
    const end = parseDate(to);

    const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const previousEnd = new Date(start);
    previousEnd.setDate(previousEnd.getDate() - 1);
    const previousStart = new Date(previousEnd);
    previousStart.setDate(previousStart.getDate() - days + 1);

    return {
        from: previousStart,
        to: new Date(
            previousEnd.setHours(
                23,
                59,
                59,
                999
            )
        )
    };

}

module.exports = {
    today,
    yesterday,
    last7Days,
    last30Days,
    thisMonth,
    lastMonth,
    getPreviousPeriod,
    formatDate
}