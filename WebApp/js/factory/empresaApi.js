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

  var _buscar = function(nome, cidade, atividade) {

    let params = {};

    if (nome) {
      params.nome = nome;
    }

    if (cidade) {
      params.id_cidade = cidade.id;
    }

    if (atividade) {
      params.id_atividade = atividade.id;
    }

    return $http.get(baseUrl + "/empresas", {params});
  }

  var _atualizar = function(empresa) {
    return $http.put(baseUrl + "/empresas/" + empresa.id, empresa);
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId,
    buscar: _buscar,
    atualizar:_atualizar
  };
}

app.factory("empresaApi", empresaFactory);
