var homeController = function($scope, $mdToast, $state,
  empresaApi, contatoApi, toastUtil) {

  $scope.empresas = [];
  $scope.selectedEmpresa = [];
  $scope.contato = {};

  $scope.listar = function() {
    empresaApi.listar()
      .then(function(response) {
        $scope.empresas = response.data;
      })
      .catch(function(error) {
        // Mensagem
        toastUtil.showToast('Problema para exibir a lista das Empresas.');
      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      empresaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.empresas = response.data;
        })
        .catch(function(error) {
          toastUtil.showToast('Problema para pesquisar a(s) Empresa(s).');
        });
    }
  };

  $scope.detalharEmpresa = function(empresa) {
    console.log("Detalhar Empresa");
    console.log(empresa);
  }

  $scope.enviarContato = function() {
    // Criar uma cópia do contato do $scope.
    let contato = angular.copy($scope.contato);
    let telefone = contato.telefone.replace(/[^\d]+/g, "");
    contato.telefone = telefone;

    contatoApi.cadastrar(contato)
      .then(function(response) {
        // Redirecionamento de página.
        $state.transitionTo('visitante.home', {
          reload: true,
          inherit: false,
          notify: true
        });

        limparContatoForm();

        // Mensagem
        toastUtil.showSuccessToast('O Contato foi enviado com sucesso. Nossa equipe em breve entrará em contato.');
      })
      .catch(function(error) {
        let message = error.data;
        toastUtil.showErrosValidation(errors);
      });
  }

  let limparContatoForm = function() {
    // Reinicializa a variável contato.
    angular.copy({}, $scope.contato);
    // Reinicializa o estado do campo para os eventos e validação.
    // É necessário indicar o atributo name no formulário <form>
    $scope.enviarContatoForm.$setPristine();
    $scope.enviarContatoForm.$setUntouched();
    $scope.enviarContatoForm.$setValidity();
  }

  $scope.listar();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('HomeController', homeController);
