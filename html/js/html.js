const code = document.querySelectorAll("pre code")
const td = document.querySelectorAll("td")

//给h标签添加id
const article_content = document.querySelector('.js-toc-content');

//td字符串小于10的全部水平居中
function juZhong() {
  for (let i = 0; i < td.length; i++) {
    let a = td[i].innerText
    let b = a.length
    if (b < 11) {
      td[i].style.cssText = "text-align:center;"
    }
  }
}




// 更改< > 去除多余空格
function tiHuan_code() {
  for (let i = 0; i < code.length; i++) {

    let code1 = code[i].innerHTML

    // 替换<
    let a = code1.replace(/</g, "&lt;");

    // 替换>
    let b = a.replace(/>/g, "&gt;")

    // 取消空格
    let c = b.replace(/    /g, "")

    //去掉第一行的换行
    let d = b
    for (let j = 0; j < 99; j++) {
      if (/^\n/.test(d)) {
        d = d.replace(/^\n/, "")
      } else {
        break
      }
    }



    code.innerHTML = ""
    code[i].innerHTML = d
  }
}

//给h标签添加id
function tianJiaId() {
  const titleTag = ["H2", "H3", 'H4'];
  let titles = [];
  article_content.childNodes.forEach((e, index) => {
    if (titleTag.includes(e.nodeName)) {
      const id = "header-" + index;
      e.setAttribute("id", id);
      let xiaoName = e.nodeName.toLowerCase()

      titles.push({
        id: id,
        title: e.innerHTML,
        level: Number(e.nodeName.substring(1, 2)),
        nodeName: xiaoName
      });
    }
  });
}


tiHuan_code()
juZhong()
tianJiaId()//给h标签添加id


const aside = document.querySelector('.aside')

//侧边栏按钮
document.getElementById("switch_btn").onclick = function () {
    if (this.children[0].checked == true) {
        this.children[1].className = "input"
        aside.style.left = '-230px'
    } else {
        this.children[1].className = "input checked"
        aside.style.left = '10px'
    }
}


