let res = "";
let ip = document.getElementById('i1');
function fun(d) {
  res += d
  ip.value = res
}

function cal() {
  if (res != '') {
    ip.value = eval(ip.value);
    res = ip.value;
  }
}

function cl() {
  res = '';
  ip.value = '';
}

let rc = () => {
  res = res.slice(0, res.length - 1);
  ip.value = res;
}