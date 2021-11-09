// take all video element
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// filter JAVASCRIPT LANJUTAN
const filtered = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // take video duration
    .map((time) => time.dataset.duration)
    // format to int, change minute to second
    .map((time) => {
        const parse = time.split(':').map((format) => parseInt(format))
        return (parse[0] * 60) + parse[1]
    })
    // sum all second
    .reduce((total, second) => total + second)

// change format to hour minute second
const hour = Math.floor(filtered / 3600)
const minute = Math.floor((filtered - (hour * 3600)) / 60)
const second = filtered - ((hour * 3600) + (minute * 60))

// save to DOM
const jmlhVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
document.querySelector('.jumlah-video').textContent = `${jmlhVideo} videos`

document.querySelector('.total-durasi').textContent = `${hour} jam, ${minute} Menit, ${second} Detik`
