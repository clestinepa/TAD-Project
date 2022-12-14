const viewport = {
    vw: 0,
    vh: 0
}

const bg = document.querySelector("html");
const rafBG = () => {
    viewport.vw = bg.clientWidth
    viewport.vh = bg.clientHeight

    var size1 = viewport.vh / 5;
    var size2 = viewport.vw / 7;
    if (viewport.vw > 900 && viewport.vh > 600) {
        bg.style.setProperty('--left-origin', "0px")
        bg.style.setProperty('--bottom-origin', "0px")
    } else {
        if (viewport.vw < 900) {
            size2 = 900 / 7;
            var left = (900 - viewport.vw)*-1
            bg.style.setProperty('--left-origin', left + "px")
        }
        if (viewport.vh < 600) {
            size1 = 600 / 5;
            var bottom = (600 - viewport.vh)*-1
            bg.style.setProperty('--bottom-origin', bottom + "px")
        }
    }
    bg.style.setProperty('--size-grid', Math.min(size1, size2) + "px")

    requestAnimationFrame(rafBG)
}

rafBG()