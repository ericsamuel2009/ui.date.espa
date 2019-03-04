var app = angular.module('myapp',['ui.date'])

app.controller('mycontroller',['$scope',function($scope){
	$scope.fechainputmodel = new Date();
  $scope.fechainput = {
		dateFormat: "yy/MM/dd", //formato de la fecha
		changeYear: true, //habilitar la edicion de años
		changeMonth: true, //habilitar la edicion de mes
        // maxDate    : new Date(), esto se usa para dale limites a las fechas "new Date() : es el valor maximo de hoy"
        // minDate    : new Date(2000, 5, 1), new Date(año,mes,dia)
        startingDay: 1   
	};
}])