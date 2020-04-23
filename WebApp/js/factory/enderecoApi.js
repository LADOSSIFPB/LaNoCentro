// Empresas - Factory
var enderecoFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _cadastrar = function(endereco) {
    return $http.post(baseUrl + "/enderecos", endereco);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/enderecos");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/enderecos/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("enderecoApi", enderecoFactory);
