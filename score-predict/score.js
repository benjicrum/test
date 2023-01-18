function score(event) {
    event.preventDefault()

    let homeres1 = parseInt( document.getElementById('hg1').value)
    let homeres2 = parseInt( document.getElementById('hg2').value)
    let homeres3 = parseInt( document.getElementById('hg3').value)
    let homeres4 = parseInt( document.getElementById('hg4').value)
    let homeres5 = parseInt( document.getElementById('hg5').value)

    let awayres1 = parseInt( document.getElementById('ag1').value)
    let awayres2 = parseInt( document.getElementById('ag2').value)
    let awayres3 = parseInt( document.getElementById('ag3').value)
    let awayres4 = parseInt( document.getElementById('ag4').value)
    let awayres5 = parseInt( document.getElementById('ag5').value)

    let hometot = homeres1 + homeres2 + homeres3 + homeres4 + homeres5 
    let awaytot = awayres1 + awayres2 + awayres3 + awayres4 + awayres5 

    let homegoals = hometot / 5
    let awaygoals = awaytot / 5

    document.getElementById('home').innerHTML = homegoals
    document.getElementById('away').innerHTML = awaygoals

}