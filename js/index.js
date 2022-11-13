const main_diDu = document.querySelector('.main_diDu')


document.getElementById("switch_btn").onclick = function () {
    if (this.children[0].checked == false) {
        this.children[1].className = "input checked"
        main_diDu.style.top = '0'
    } else {
        this.children[1].className = "input"
        main_diDu.style.top = '95%'
    }
}