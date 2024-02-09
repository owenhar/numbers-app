document.getElementById("submit").onclick = async function() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let out = document.getElementById("out");
    let n = a.value;
    let m = b.value;
    const response = await fetch(`https://arithmetic-service-harriowe.onrender.com/add/${n}/${m}`);
    // console.log(response);
    const res = await response.json();
    
    console.log(res) // Simple debugging
    out.innerHTML = res
}
document.getElementById("submit-").onclick = async function() {
    let a = document.getElementById("a-");
    let b = document.getElementById("b-");
    let out = document.getElementById("out-");
    let n = a.value;
    let m = b.value;
    const response = await fetch(`https://arithmetic-service-harriowe.onrender.com/subtract/${n}/${m}`);
    // console.log(response);
    const res = await response.json();
    
    console.log(res) // Simple debugging
    out.innerHTML = res
}
document.getElementById("submit*").onclick = async function() {
    let a = document.getElementById("a*");
    let b = document.getElementById("b*");
    let out = document.getElementById("out*");
    let n = a.value;
    let m = b.value;
    const response = await fetch(`https://arithmetic-service-harriowe.onrender.com/multiply/${n}/${m}`);
    // console.log(response);
    const res = await response.json();
    
    console.log(res) // Simple debugging
    out.innerHTML = res
}
document.getElementById("submit/").onclick = async function() {
    let a = document.getElementById("a/");
    let b = document.getElementById("b/");
    let out = document.getElementById("out/");
    let n = a.value;
    let m = b.value;
    const response = await fetch(`https://arithmetic-service-harriowe.onrender.com/divide/${n}/${m}`);
    // console.log(response);
    const res = await response.json();
    
    console.log(res) // Simple debugging
    out.innerHTML = res
}
