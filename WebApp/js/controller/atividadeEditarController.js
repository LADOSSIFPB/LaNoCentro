var atividadeEditarController = function($scope, $mdToast, $state, $stateParams,
  atividadeApi, toastUtil) {

  $scope.atvidade = {};

  $scope.atualizar = function() {
    // Criar uma cópia da Atividade comercial do $scope.
    let atividade = angular.copy($scope.atividade);

    atividadeApi.atualizar(atividade)
      .then(function(response) {
        redirecionarListagemAtividades();
        // Mensagem de sucesso.
        toastUtil.showSuccessToast('A Atividade Comercial foi atualizada com sucesso.');
      })
      .catch(function(error) {
        // Exibir erros de validação do serviço.
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  };

  function carregamentoInicial() {
    let id = $stateParams.id;

    if (id <= 0) {
      redirecionarListagemAtividades();
    } else {
      // Recuperar Atividade para edição.
      atividadeApi.pesquisarPorId(id)
        .then(function(response) {
          let atividade = response.data;
          $scope.atividade = atividade;
        })
        .catch(function(error) {
          toastUtil.showErrorToast(error);
        });
    }
  }

  function redirecionarListagemAtividades() {
    // Redirecionamento de página.
    $state.transitionTo('administrador.atividades', {
      reload: true,
      inherit: false,
      notify: true
    });
  }
  
  // Inicializar listagem de Atividade.
  carregamentoInicial();
}

app.controller('AtividadeEditarController', atividadeEditarController);
