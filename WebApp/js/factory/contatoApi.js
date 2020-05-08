// Empresas - Factory
var contatoFactory = function($http, serviceCfg) {

  var baseUrl = serviceCfg.baseUrl();

  var _cadastrar = function(empresa) {
    return $http.post(baseUrl + "/contatos", empresa);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/contatos");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/contatos/" + encodeURI(id));
  };

  var _buscarPorNome = function(nome) {
    return $http.get(baseUrl + "/contatos/nome/" + encodeURI(nome));
  }

  var _atender = function(id) {
    return $http.put(baseUrl + "/contatos/" + encodeURI(id) + "/atender");
  }

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId,
    buscarPorNome: _buscarPorNome,
    atender: _atender
  };
}

app.factory("contatoApi", contatoFactory);
