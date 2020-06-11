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

  var _atualizar = function(atividade) {
    return $http.put(baseUrl + "/atividades/" + atividade.id, atividade);
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId,
    atualizar: _atualizar
  };
}

app.factory("atividadeApi", atividadeFactory);
