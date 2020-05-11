// Empresas - Factory
var naturezaFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _listar = function() {
    return $http.get(baseUrl + "/naturezas");
  };

  var _cadastrar = function(natureza) {
    return $http.post(baseUrl + "/naturezas", natureza);
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/naturezas/" + encodeURI(id));
  };

  return {
    listar: _listar,
    cadastrar: _cadastrar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("naturezaApi", naturezaFactory);
