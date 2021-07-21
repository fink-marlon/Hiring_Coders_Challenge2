const empresa = document.getElementById('empresa');

empresa.addEventListener('submit', (e)=> {
  e.preventDefault();
  let rz = document.getElementById('rz').value;
  let cnpj = document.getElementById('cnpj').value;
  let email = document.getElementById('email').value;

  let data = {
    rz,
    cnpj,
    email,
  }
  let convert = JSON.stringify(data);
  localStorage.setItem('lead', convert)
})
const endereco = document.getElementById('endereco');

endereco.addEventListener('submit', (e)=> {
  e.preventDefault();
  let rua = document.getElementById('rua').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;
  let uf = document.getElementById('uf').value;

  let data = {
    rua,
    bairro,
    cidade,
    uf,
  }
  let convert = JSON.stringify(data);
  localStorage.setItem('lead', convert)
})

const produto = document.getElementById('produto');

produto.addEventListener('submit', (e)=> {
  e.preventDefault();
  let marca = document.getElementById('marca').value;
  let descricao = document.getElementById('descricao').value;
  let preco = document.getElementById('preco').value;


  let data = {
    marca,
    descricao,
    preco,
  }
  let convert = JSON.stringify(data);
  localStorage.setItem('lead', convert)
})
