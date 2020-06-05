// Empresas - Factory
var instagramFactory = function($http, serviceCfg) {

  var baseUrl = "https://www.instagram.com";

  var _pesquisarPorUserName = function(name) {
    return $http.get(baseUrl + "/" + encodeURI(name) + "/?__a=1");
  };

  return {
    pesquisarPorUserName: _pesquisarPorUserName
  };
}

app.factory("instagramApi", instagramFactory);
