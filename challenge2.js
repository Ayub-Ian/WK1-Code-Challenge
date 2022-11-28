
function calculateSpeed() {
    let speed = document.getElementById('speed').value
    
    let demerit = (speed - 70) / 5;
    
    if (speed <= 70) {
        console.log('Ok')
        document.getElementById('limit').innerHTML = 'Ok'
    } else if (demerit >= 12) {
        console.log(`Licence suspended`)
        document.getElementById('limit').innerHTML = 'Licence suspended.'
    } else if (speed > 70  && demerit < 12) {
        console.log(`Points: ${demerit}`)
        document.getElementById('limit').innerHTML = `Points ${demerit}`
    }
    
    }