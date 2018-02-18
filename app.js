


          var app= angular.module('myApp', ['ngRoute']);
         
         app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : '/main.html',
        controller:'AppController'
    })
   
    .when('/edit/:id', {
        templateUrl : '/edit.html',
                controller  : 'EditController'
    })
    .otherwise({
                redirectTo: '/'
            });
    
});

          app.controller('mainController', function($scope) {
            console.log("dsvevfdxdwr")
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
          app.controller('AppController', ['$scope','$window','$location', function($scope, $window, $location) {
            
             
              

              $scope.deleted= false;

              $scope.user={id:null,firstname:'',lastname:'',designation:'', age:''};
              $scope.id = localStorage.getItem('ids');
               
              $scope.users = [
                      
              ];

              $scope.user_temp = localStorage.getItem('users');
              $scope.user_json= JSON.parse($scope.user_temp)
              console.log($scope.user_json)
              if($scope.user_json==null){
                console.log("dfhwn")
                $scope.user_json=[]
              }

              $scope.users=$scope.user_json;

               
              $scope.add = function() {
                console.log($scope.user.id)
                console.log("csdcvef")
               
               
                  if($scope.user.id === null){

                    if($scope.id==null){
                      $scope.id=1;
                    }
                   else{
                    $scope.user.id = $scope.id++;
                  }
                    
                     $scope.users=$scope.user_json;
                      
                      console.log('Saving New User', $scope.user);
                      console.log($scope.users)  
                      $scope.user={id:$scope.id,firstname:$scope.firstname,lastname:$scope.lastname,designation:$scope.designation, age:$scope.age};  
                      // $scope.userk= JSON.stringify($scope.user)
                      $scope.users.push($scope.user)
                      


                      localStorage.setItem('ids',JSON.stringify($scope.id));


                      localStorage.setItem('users', JSON.stringify($scope.users));


                    
                  }else{
                    console.log($scope.user_json.length)
                      for(var i = 0; i < $scope.user_json.length; i++){
                        console.log($scope.user_json)
                          if($scope.user_json[i].id === $scope.user.id) {
                            console.log($scope.user)
                            $scope.user_json[i] = $scope.user;
                            break;
                          }
                      }
                     console.log('User updated with id ', $scope.user.id);
                     localStorage.setItem('users', JSON.stringify($scope.user_json));

                  }

                  // $scope.userrr.push(JSON.parseJSON.stringify($scope.users))
                  
                  console.log($scope.user_json)

                  if (confirm("Successfully added !")) {
                     $window.location.reload();
      
    } else {
      $window.location.reload();
    }

                 
                 

                  $scope.reset();
              };
               
              $scope.edit = function(ids){

                  console.log('id to be edited', ids);
                  $location.path('/edit/' + ids)

                  // for(var i = 0; i < $scope.user_json.length; i++){
                  //   console.log($scope.user_json[i].id)
                  //     if($scope.user_json[i].id === ids) {
                  //        $scope.user = angular.copy($scope.user_json[i]);
                  //        break;
                  //     }
                  // }
              }



              $scope.remove = function(ids){
                  console.log('id to be deleted', ids);
                  for(var i = 0; i < $scope.users.length; i++){

                      if($scope.users[i].id === ids) {
                      	$scope.users[i].deleted= true;
                         // if($scope.user.id === ids){//It is shown in form, reset it.
                         // 	console.log("reset")
                         //    $scope.reset();
                         // }
                         
                      }
                  }
                  console.log($scope.users)
                  $scope.user_json= $scope.users;
                  localStorage.setItem('users', JSON.stringify($scope.users));
                  console.log($scope.user_json)
              }


             
               
            
               
              $scope.reset = function(){
                  $scope.user={id:null,name:'',address:'',email:''};
                  $scope.userForm.$setPristine(); //reset Form
              }
 
      }]);





         app.controller('EditController', ['$scope','$window', '$location', '$routeParams', function($scope, $window,$location,$routeParams) {

       

          

          $scope.user_t = localStorage.getItem('users');
              $scope.user_json= JSON.parse($scope.user_t)

              console.log($scope.user_json)
              $scope.id=$routeParams.id
              


          
                  console.log('id to be edited', $scope.id);
                  for(var i = 0; i < $scope.user_json.length; i++){
                    console.log($scope.user_json[i].id)
                      if($scope.user_json[i].id == $scope.id) {
                        console.log("aaaa")
                         // $scope.id = angular.copy($scope.user_json[i].id);

                         // $scope.firstnames= angular.copy($scope.user_json[i].firstname)
                         
                         $scope.user_tempo= $scope.user_json[i];
                         console.log($scope.user_tempo.id)
                         // $scope.lastnames=angular.copy($scope.user_json[i].lastname)
                         // $scope.designation=angular.copy($scope.user_json[i].designation)
                         // $scope.age=angular.copy($scope.user_json[i].age)
                         // break;
                      }
                  }

                  $scope.update = function(){


              
                   
                      for(var i = 0; i < $scope.user_json.length; i++){
                        console.log($scope.user_json)
                          if($scope.user_json[i].id === $scope.id) {
                            console.log($scope.user)
                            $scope.user_json[i].id= $scope.user_tempo.id;
                            $scope.user_json[i].firstname= $scope.user_tempo.firstname;
                            $scope.user_json[i].lastname= $scope.user_tempo.lastname;
                            $scope.user_json[i].designation= $scope.user_tempo.designation;
                            $scope.user_json[i].age= $scope.user_tempo.age;
                          
                          }
                      }
                     // console.log('User updated with id ', $scope.user.id);
                     localStorage.setItem('users', JSON.stringify($scope.user_json));
                     $location.path('/')

                  
                }


              }





           ]);

