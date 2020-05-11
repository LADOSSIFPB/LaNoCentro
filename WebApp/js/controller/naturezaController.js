var naturezaController = function($scope, $state, naturezaApi, toastUtil) {

  $scope.natureza = {};

  $scope.cadastrar = function() {
    // Criar uma cópia da natureza do $scope.
    let natureza = angular.copy($scope.natureza);

    naturezaApi.cadastrar(natureza)
      .then(function(response) {
        // Redirecionamento de página.
        $state.transitionTo('administrador.naturezas', {
          reload: true,
          inherit: false,
          notify: true
        });

        // Mensagem
        toastUtil.showSuccessToast('A natureza foi cadastrada com sucesso.');
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrorToast(message);
      });
  }
}

app.controller('NaturezaController', naturezaController);
