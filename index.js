document.getElementById("submit").onclick = async function() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let out = document.getElementById("out");
    let n = a.value;
    let m = b.value;
    const response = await fetch(`http://localhost:3000/add/${n}/${m}`);
    const res = await response.json();
    
    console.log(res) // Simple debugging
    out.innerHTML = res
}
