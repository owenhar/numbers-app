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

async function isPrime() {
    const numberToTest = document.getElementById("numberToTest");            
    let n = numberToTest.value;            
    const response = await fetch("https://primes-service-latest-ik1x.onrender.com/primes/" + n);
    const result = await response.json();
    document.getElementById("primeCheckResult").innerText = result;
}

async function Cipher() {
    const textToCipher = document.getElementById("text");            
    let text = textToCipher.value;     
    console.log(text);       
    const response = await fetch("https://ciphers-service-harriowe.onrender.com/ciphers/caesar/" + text + "/3");
    const result = await response.json();
    document.getElementById("cipherResult").innerText = result;
}

