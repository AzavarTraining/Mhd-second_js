function StopWatch() {
    let startTime, endTime, status, duration = 0
    this.start = function() {
        if (status)
            throw new Error('already started')
        status = true
        startTime = new Date()
    }
    this.stop = function() {
        if (!status)
            throw new Error('already stopped')
        status = false
        endTime = new Date()
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
        console.log('duration', duration)
    }
    this.reset = () => {
        startTime = 0
        endTime = 0
        duration = 0
        status = false
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })
}