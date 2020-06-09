/*
 *  Diretiva para carregamento da imagem do usuário do Instagram.
 */
app.directive('showOnLoad', defaultImage);

function defaultImage(instagramApi) {
  var directive = {
    link: link,
    restrict: 'A'
  };
  return directive

  function link(scope, element, attrs) {
    element.bind('error', function() {
      let instagramUser = attrs.showOnLoad;
      instagramApi.pesquisarPorUser(instagramUser)
        .then(function(response) {
          let perfil = response.data;
          element.attr('src', perfil.graphql.user.profile_pic_url_hd);
        })
        .catch(function(error) {
          // Incluir uma imagem padrão.
        });
    })
  }
}
