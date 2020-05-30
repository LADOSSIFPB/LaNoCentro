var homeController = function($scope, $mdToast, $state,
  empresaApi, contatoApi, cidadeApi, toastUtil) {

  $scope.empresas = [];
  $scope.selectedEmpresa = [];
  $scope.cidades = []
  $scope.contato = {};

  $scope.pesquisar = function(nome, cidade) {

    if ((!nome && cidade)
      ||  (nome.length >= 3)) {
      empresaApi.buscar(nome, cidade)
        .then(function(response) {
          $scope.empresas = response.data;
        })
        .catch(function(error) {
          toastUtil.showToast('Problema ao pesquisar a(s) Empresa(s).');
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
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
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

  function carregamentoInicial() {
    empresaApi.listar()
      .then(function(response) {
        $scope.empresas = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });

    cidadeApi.listar()
      .then(function(response) {
        $scope.cidades = response.data;
      })
      .catch(function(error) {
        let message = error.data.message;
        toastUtil.showErrosValidation(message);
      });
  }

  carregamentoInicial();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('HomeController', homeController);
