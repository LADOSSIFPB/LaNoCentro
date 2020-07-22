var produtoController = function($scope, $mdToast, $state, produtoApi, toastUtil, serviceCfg) {

    $scope.produtoEmpresa = {};

    $scope.nome = [];
    $scope.descricao = [];
    $scope.preco = [];
    $scope.empresa = [];

  $scope.cadastrar = function() {
    let produtoEmpresa = $scope.produtoEmpresa;
      produtoApi.cadastrar(produto)
        .then(function(response) {

          // Redirecionamento de página.
          $state.transitionTo('administrador.produtos', {
            reload: true,
            inherit: false,
            notify: true
          });

          // Mensagem
          toastUtil.showSuccessToast('O Produto foi cadastrada com sucesso.');
        })
        .catch(function(error) {
          // Exibir erros de validação do serviço.
          let message = error.data.message;
          toastUtil.showErrosValidation(message);
        });
  }

}

app.controller('ProdutoController', produtoController);
