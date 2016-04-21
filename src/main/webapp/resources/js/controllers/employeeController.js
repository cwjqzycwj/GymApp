gymApp.controller('EmployeeController', ['$http', '$scope', function($http, $scope){

    $scope.findAllEmployees = function() {
        $http.get('/api/employee/all').success(function (data) {
            $scope.employees = data;
        });
    };

    $scope.updateEmployee = function(employee) {
        $http.post('/api/employee/update/'+employee.employeeId, JSON.stringify(employee)).success(function () {
            $scope.findAllEmployees();
        });
    };
    $scope.createEmployee = function(employee) {
        $http.post('/api/employee/create', JSON.stringify(employee)).success(function () {
            $scope.clearAdd(employee);
            $scope.findAllEmployees();
        });
    };
    $scope.deleteEmployee = function(id) {
        $http.delete('/api/employee/delete/'+id).success(function () {
            $scope.findAllEmployees();
        });
    };

    $scope.clearAdd = function(employee){
        document.getElementById('first-name').value = null;
        document.getElementById('last-name').value = null;
        document.getElementById('employee-number').value = null;
        document.getElementById('phone-number').value = null;

        employee.lastName = null;
        employee.firstName = null;
        employee.employeeNumber = null;
        employee.phoneNumber = null;
    };

    $scope.showForm = false;
    $scope.findAllEmployees();
}]);