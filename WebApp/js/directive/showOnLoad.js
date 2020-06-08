/*
 *  Diretiva para o Expansão do Menu.
 */
app.directive("showOnLoad", function() {
    return {
        link: function(scope, element) {
            element.on("error", function() {
                scope.$apply(function() {
                    console.log("Error!");
                });
            });
        }
    };
});


app.directive('defaultImage', defaultImage);
function defaultImage(instagramApi) {
    var directive = {
        link: link,
        restrict: 'A'
    };
    return directive
    function link(scope, element, attrs) {
        element.bind('error', function() {
            console.log("Dataimage Error!");
            let user = attrs.defaultImage;
            console.log(user);
            instagramApi.pesquisarPorUser(user)
              .then(function(response) {
                let perfil = response.data;
                console.log(perfil);
                console.log(perfil.graphql.user.profile_pic_url_hd);
                element.attr('src', perfil.graphql.user.profile_pic_url_hd);

              })
              .catch(function(error) {
              });


            //element.attr('src', attrs.defaultImage);
        })
    }
}
