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
