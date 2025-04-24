window.onload = function () {
  const name = document.cookie.split('; ').find(row => row.startsWith('username='));
  if (name) {
    const value = name.split('=')[1];
    alert('Welcome back,' + value + '!' );
  }
}

function storeUsername(e) {
  const name = document.getElementById("username").value;
  console.log(name);

 
  if (name.trim() === "" || !/^[a-zA-Z0-9]+$/.test(name)) {
    alert("Please enter a valid username (letters and numbers only).");
    return;
  }

  document.cookie = 'username={name}; path=/; max-age={60 * 60 * 24 * 30}';
  alert('Welcome, ' + name + '! Get ready to jump!');
}