// Empresas - Factory
var atividadeFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _cadastrar = function(atividade) {
    return $http.post(baseUrl + "/atividades", atividade);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/atividades");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/atividades/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("atividadeApi", atividadeFactory);
