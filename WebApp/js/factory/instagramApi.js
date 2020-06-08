// Empresas - Factory
var instagramFactory = function($http, serviceCfg) {

  var baseUrl = "https://www.instagram.com";

  var _pesquisarPorUser = function(name) {
    return $http.get(baseUrl + "/" + encodeURI(name) + "/?__a=1");
  };

  return {
    pesquisarPorUser: _pesquisarPorUser
  };
}

app.factory("instagramApi", instagramFactory);
