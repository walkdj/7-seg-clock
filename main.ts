function inc_time () {
    sec += 1
    if (sec == 60) {
        sec = 0
        min += 1
        if (min > 59) {
            min = 0
            hour += 1
            if (hour > 23) {
                hour = 0
            }
        }
    }
}
function show_time (dot: string) {
    hour_string = convertToText(hour)
    min_string = convertToText(min)
    if (min < 10) {
        min_string = "0" + min_string
    }
    text = "" + hour_string + dot + min_string
    sevenSegment.writeString(text)
}
input.onButtonPressed(Button.A, function () {
    hour += 1
    if (hour > 23) {
        hour = 0
    }
})
input.onButtonPressed(Button.B, function () {
    min += 1
    if (min > 59) {
        min = 0
    }
})
let dot = ""
let now = 0
let text = ""
let min_string = ""
let hour_string = ""
let sec = 0
let min = 0
let hour = 0
sevenSegment.startSevenSegPin0()
hour = 1
min = 0
sec = 0
let last_tick = input.runningTime()
basic.forever(function () {
    now = input.runningTime()
    if (now >= last_tick + 1000) {
        last_tick = now
        inc_time()
        dot = ""
        if (sec % 2 == 0) {
            dot = "."
        }
        show_time(dot)
    }
})
