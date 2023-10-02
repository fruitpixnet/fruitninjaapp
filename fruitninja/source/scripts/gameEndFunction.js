function gameEnd() {
    let calcval = scoreNumber;
    if (scoreNumber >= aposta * 1.5) {
        location.href = "/cadastro.html?msg=win&value=" + calcval;
    } else {
        location.href = "/cadastro.html?msg=gameover";
    }
}
