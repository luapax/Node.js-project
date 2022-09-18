console.log('hello world')

document.getElementById("btn").addEventListener('click', function () {
    const val = document.getElementById("inputVal").value;
    console.log(val)
    document.getElementById("wpiszDane").innerText = val;

})