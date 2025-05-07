window.onload = function () {
  const name = document.cookie.split('; ').find(row => row.startsWith('username='));
  if (name) {
    const value = name;
    alert('Welcome back,' + value.split('=')[1] + '!' );
  }
}

function storeUsername(e) {
  const name = document.getElementById("username").value;

 
  if (name.trim() === "" || !/^[a-zA-Z0-9]+$/.test(name)) {
    alert("Please enter a valid username (letters and numbers only).");
    return;
  }

  document.cookie = 'username=' + name;
  alert('Welcome, ' + name + '! Get ready to jump!');
}