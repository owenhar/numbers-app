document.getElementById("submit").onclick = function() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let out = document.getElementById("out")
    let res = Number(a.value) + Number(b.value)
    console.log(res) // Simple debugging
    out.innerHTML = res
}