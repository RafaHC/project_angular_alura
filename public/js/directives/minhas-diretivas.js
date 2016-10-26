angular.module('minhasDiretivas',[])
	.directive('meuPainel', function(){
		var ddo = {};
		ddo.restrict = 'AE';
		ddo.transclude = true;
		ddo.scope = {
			/* Quando o nome do atributo do objeto é igual ao nome do campo podemos simplesmente colocar @*/
			titulo:'@'
		};

 		ddo.templateUrl = 'js/directives/meu-painel.html'; 
               
		return ddo;
})
.directive('minhaFoto', function(){
		var ddo = {};
		ddo.restrict = 'AE';
		
		ddo.scope = {
			/* Quando o nome do atributo do objeto é igual ao nome do campo podemos simplesmente colocar @*/
			titulo:'@',
			url:'@'
		};

 		ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}"  alt="{{titulo}}">'; 
               
		return ddo;
})
.directive('meuBotaoPerigo',function(){
	var ddo = {};

	ddo.restrict = 'E';
	ddo.scope = {
		nome: '@',
		/*Angular possui o modificador &, que permite fazer binding para uma referência*/
		acao: '&'
	}


	ddo.template = '<button type="submit" class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
	 


	return ddo;
});
