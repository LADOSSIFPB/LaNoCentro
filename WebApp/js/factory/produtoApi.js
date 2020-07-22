// Empresas - Factory
var produtoFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _cadastrar = function(produto) {
    return $http.post(baseUrl + "/produtos", produto);
  };

  var _listarEmpresaId = function(empresaId) {
    return $http.get(baseUrl + "/produtos/empresa/" + encodeURI(empresaId));
  };

  var _removerProduto = function(idProduto) {
    return $http.delete(_path + "/" + idProduto)
  };

  var _listar = function() {
    return $http.get(baseUrl + "/produtos");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/produtos/" + encodeURI(id));
  };


  var _buscar = function(nome) {

    let params = {};

    if (nome) {
      params.nome = nome;
    }

    return $http.get(baseUrl + "/produtos", {params});
  }

  var _atualizar = function(produto) {
    return $http.put(baseUrl + "/produtos/" + produto.id, produto);
  };

  return {
    cadastrar: _cadastrar,
    listarEmpresaId: _listarEmpresaId,
    listar: _listar,
    remover: _removerProduto,
    pesquisarPorId: _pesquisarPorId,
    buscar: _buscar,
    atualizar:_atualizar
  };
}

app.factory("produtoApi", produtoFactory);
