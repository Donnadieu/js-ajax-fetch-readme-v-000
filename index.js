const token = 'bfd3285abe6215e1a4076082bbd13fa2c4344929'

fetch('https://api.github.com/Donnadieu/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json);)
