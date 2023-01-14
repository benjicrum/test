function calc(event) {
    event.preventDefault()

    let val1 = document.getElementById('pos1').value
    let val2 = document.getElementById('pos2').value
    let val3 = document.getElementById('pos3').value
    let val4 = document.getElementById('pos4').value
    let val5 = document.getElementById('pos5').value


    let rh1 = document.getElementById('resulth1').value
    let ra1 = document.getElementById('resulta1').value

    let rh2 = document.getElementById('resulth2').value
    let ra2 = document.getElementById('resulta2').value

    let rh3 = document.getElementById('resulth3').value
    let ra3 = document.getElementById('resulta3').value

    let rh4 = document.getElementById('resulth4').value
    let ra4 = document.getElementById('resulta4').value

    let rh5 = document.getElementById('resulth5').value
    let ra5 = document.getElementById('resulta5').value

    let points = 0
    let points1 = 0
    let points2 = 0
    let points3 = 0
    let points4 = 0
    let points5 = 0

    let a = parseInt(rh1)
    let b = parseInt(rh2)
    let c = parseInt(rh3)
    let d = parseInt(rh4)
    let e = parseInt(rh5)

    let aa = parseInt(ra1)
    let bb = parseInt(ra2)
    let cc = parseInt(ra3)
    let dd = parseInt(ra4)
    let ee = parseInt(ra5)


    let scored = a + b + c + d + e

    let conceded = aa + bb + cc + dd + ee

    if (val1 === '1') {
        if (rh1 > ra1) {
            points1 = points1 + 3
        } else if (ra1 > rh1) {
            points1 = points1 - 1
        } else if ( rh1 == ra1 ) {
            points1 = points1 
        }
    } 
    
    if (val1 === '2') {
        if (rh1 > ra1) {
            points1 = points1 + 2
        } else if (ra1 > rh1) {
            points1 = points1 - 2
        } else if ( rh1 == ra1 ) {
            points1 = points1 
        }
    } 
    
    if (val1 === '3') {
        if (rh1 > ra1) {
            points1 = points1 + 1
        } else if (ra1 > rh1) {
            points1 = points1 - 3
        } else if ( rh1 == ra1 ) {
            points1 = points1 
        }
    }

    if (val2 === '1') {
        if (rh2 > ra2) {
            points2 = points2 + 3
        } else if (ra2 > rh2) {
            points2 = points2 - 1
        } else if ( rh2 == ra2 ) {
            points2 = points2 
        }
    } 
    
    if (val2 === '2') {
        if (rh2 > ra2) {
            points2 = points2 + 2
        } else if (ra2 > rh2) {
            points2 = points2 - 2
        } else if ( rh2 == ra2 ) {
            points2 = points2 
        }
    } 
    
    if (val2 === '3') {
        if (rh2 > ra2) {
            points2 = points2 + 1
        } else if (ra2 > rh2) {
            points2 = points2 - 3
        } else if ( rh2 == ra2 ) {
            points2 = points2 
        }
    }

    if (val3 === '1') {
        if (rh3 > ra3) {
            points3 = points3 + 3
        } else if (ra3 > rh3) {
            points3 = points3 - 1
        } else if ( rh3 == ra3 ) {
            points3 = points3 
        }
    } 
    
    if (val3 === '2') {
        if (rh3 > ra3) {
            points3 = points3 + 2
        } else if (ra3 > rh3) {
            points3 = points3 - 2
        } else if ( rh3 == ra3 ) {
            points3 = points3 
        }
    } 
    
    if (val3 === '3') {
        if (rh3 > ra3) {
            points3 = points3 + 1
        } else if (ra3 > rh3) {
            points3 = points3 - 3
        } else if ( rh3 == ra3 ) {
            points3 = points3 
        }
    }

    if (val4 === '1') {
        if (rh4 > ra4) {
            points4 = points4 + 3
        } else if (ra4 > rh4) {
            points4 = points4 - 1
        } else if ( rh4 == ra4 ) {
            points4 = points4 
        }
    } 
    
    if (val4 === '2') {
        if (rh4 > ra4) {
            points4 = points4 + 2
        } else if (ra4 > rh4) {
            points4 = points4 - 2
        } else if ( rh4 == ra4 ) {
            points4 = points4 
        }
    } 
    
    if (val4 === '3') {
        if (rh4 > ra4) {
            points4 = points4 + 1
        } else if (ra4 > rh4) {
            points4 = points4 - 3
        } else if ( rh4 == ra4 ) {
            points4 = points4 
        }
    }

    if (val5 === '1') {
        if (rh5 > ra5) {
            points5 = points5 + 3
        } else if (ra5 > rh5) {
            points5 = points5 - 1
        } else if ( rh5 == ra5 ) {
            points5 = points5 
        }
    } 
    
    if (val5 === '2') {
        if (rh5 > ra5) {
            points5 = points5 + 2
        } else if (ra5 > rh5) {
            points5 = points5 - 2
        } else if ( rh5 == ra5 ) {
            points5 = points5 
        }
    } 
    
    if (val5 === '3') {
        if (rh5 > ra5) {
            points5 = points5 + 1
        } else if (ra5 > rh5) {
            points5 = points5 - 3
        } else if ( rh5 == ra5 ) {
            points5 = points5 
        }
    }

    points = points1 + points2 + points3 + points4 + points5

    let gspg = scored / 5
    let gcpg = conceded / 5

    
    document.getElementById('totpoints').innerText = "Total points:" + points
    document.getElementById('r1').innerText = "Points: " + points1   
    document.getElementById('r2').innerText = "Points: " + points2
    document.getElementById('r3').innerText = "Points: " + points3
    document.getElementById('r4').innerText = "Points: " + points4
    document.getElementById('r5').innerText = "Points: " + points5
    document.getElementById('scored').innerText = "Total goals scored:" + scored
    document.getElementById('conceded').innerText = "Total goals conceded:" + conceded
    document.getElementById('gspg').innerText = "Goals scored per game:" + gspg
    document.getElementById('gcpg').innerText = "Goals conceded per game:" +  gcpg



}