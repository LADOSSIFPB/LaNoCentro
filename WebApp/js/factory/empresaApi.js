// Empresas - Factory
var empresaFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _cadastrar = function(empresa) {
    return $http.post(baseUrl + "/empresas", empresa);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/empresas");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/empresas/" + encodeURI(id));
  };

  var _buscarPorNome = function(nome) {
    return $http.get(baseUrl + "/empresas/nome/" + encodeURI(nome));
  }

  var _atualizar = function(empresa) {
    return $http.put(baseUrl + "/empresas/" + empresa.id, empresa);
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId,
    buscarPorNome: _buscarPorNome,
    atualizar:_atualizar
  };
}

app.factory("empresaApi", empresaFactory);
