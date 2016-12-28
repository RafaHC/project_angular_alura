angular.module('alurapic').controller('FotosController',function($scope,$http){
	$scope.fotos = [];

	$http.get('/v1/fotos').success(function(fotos){
		$scope.fotos = fotos;

	}).error(function(erro){
		console.log('Ocorreu um erro ' + erro);
	})
		
	$scope.remover = function(foto){
		$http.delete('/v1/fotos/'+foto._id).success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto,1);
			$scope.mensagem = foto.titulo + ' removida com sucesso';
			
		}).error(function(erro){
			$scope.mensagem ='Ocorreu um erro ' + error;
		})
	};
})