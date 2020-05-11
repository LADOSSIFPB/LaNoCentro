var atividadeController = function($scope, $state, atividadeApi, toastUtil) {

  $scope.atividade = {};

  $scope.cadastrar = function() {
    // Criar uma cópia da atividade do $scope.
    let atividade = angular.copy($scope.atividade);

    atividadeApi.cadastrar(atividade)
      .then(function(response) {
        // Redirecionamento de página.
        $state.transitionTo('administrador.atividades', {
          reload: true,
          inherit: false,
          notify: true
        });

        // Mensagem
        toastUtil.showSuccessToast('A atividade foi cadastrada com sucesso.');
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrorToast(message);
      });
  }
}

app.controller('AtividadeController', atividadeController);
