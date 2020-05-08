var atenderContatoController = function($scope, $mdToast, $mdDialog,
  idContato, contatoApi, toastUtil) {

  $scope.contato = {};

  $scope.confirmar = function() {

    // Contato.
    let _idContato = idContato;

    contatoApi.atender(_idContato)
      .then(function(response) {
        toastUtil.showSuccessToast("Contato atendido com sucesso.");
        $mdDialog.hide();
      })
      .catch(function(error) {
        toastUtil.showErrorToast(error);
      });
  }

  $scope.fechar = function() {
    $mdDialog.cancel();
  }

  function carregamentoInicial() {

    // Contato.
    let _idContato = idContato;

    contatoApi.pesquisarPorId(_idContato)
      .then(function(response) {
        // Contato selecionado.
        $scope.contato = response.data;
      })
      .catch(function(error) {
        toastUtil.showErrorToast(error);
        $mdDialog.cancel();
      });
  }

  // Inicializar listagem de cursos e campi.
  carregamentoInicial();
}

app.controller('AtenderContatoController', atenderContatoController);
