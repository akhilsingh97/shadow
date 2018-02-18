


          var app= angular.module('myApp', ['ngRoute']);
         
         app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/index.html",
        controller:"AppController"
    })
    .when("/edit/:id", {
        templateUrl : '/edit.html',
                controller  : 'EditController'
    })
    .otherwise({
                redirectTo: "/"
            });
    
});
          app.controller('AppController', ['$scope','$window','$location', function($scope, $window, $location) {
              var self = this;
             
              

              self.deleted= false;

              self.user={id:null,firstname:'',lastname:'',designation:'', age:''};
              self.id = localStorage.getItem('ids');
               
              self.users = [
                      
              ];

              self.user_temp = localStorage.getItem('users');
              self.user_json= JSON.parse(self.user_temp)
              console.log(self.user_json)
              if(self.user_json==null){
                self.user_json=[]
              }

              self.users=self.user_json;

               
              self.submit = function() {
                console.log(self.user.id)
               
               
                  if(self.user.id === null){

                    if(self.id==null){
                      self.id=1;
                    }
                   
                    self.user.id = self.id++;

                    
                     self.users=self.user_json;
                      
                      console.log('Saving New User', self.user);
                      console.log(self.users)    
                      // self.userk= JSON.stringify(self.user)
                      self.users.push(self.user)
                      


                      localStorage.setItem('ids',JSON.stringify(self.id));


                      localStorage.setItem('users', JSON.stringify(self.users));


                    
                  }else{
                    console.log(self.user_json.length)
                      for(var i = 0; i < self.user_json.length; i++){
                        console.log(self.user_json)
                          if(self.user_json[i].id === self.user.id) {
                            console.log(self.user)
                            self.user_json[i] = self.user;
                            break;
                          }
                      }
                     console.log('User updated with id ', self.user.id);
                     localStorage.setItem('users', JSON.stringify(self.user_json));

                  }

                  // self.userrr.push(JSON.parseJSON.stringify(self.users))
                  
                  console.log(self.user_json)

                  if (confirm("Successfully added !")) {
                     $window.location.reload();
      
    } else {
      $window.location.reload();
    }

                 
                 

                  self.reset();
              };
               
              self.edit = function(ids){

                  console.log('id to be edited', ids);
                  $location.path('/edit/' + ids)

                  // for(var i = 0; i < self.user_json.length; i++){
                  //   console.log(self.user_json[i].id)
                  //     if(self.user_json[i].id === ids) {
                  //        self.user = angular.copy(self.user_json[i]);
                  //        break;
                  //     }
                  // }
              }



              self.remove = function(ids){
                  console.log('id to be deleted', ids);
                  for(var i = 0; i < self.users.length; i++){

                      if(self.users[i].id === ids) {
                      	self.users[i].deleted= true;
                         // if(self.user.id === ids){//It is shown in form, reset it.
                         // 	console.log("reset")
                         //    self.reset();
                         // }
                         
                      }
                  }
                  console.log(self.users)
                  self.user_json= self.users;
                  localStorage.setItem('users', JSON.stringify(self.users));
                  console.log(self.user_json)
              }


             
               
            
               
              self.reset = function(){
                  self.user={id:null,name:'',address:'',email:''};
                  $scope.userForm.$setPristine(); //reset Form
              }
 
      }]);





         app.controller('EditController', ['$scope','$window', function($scope, $window) {

          console.log("d anskdam,")

          var self=this;

          self.user_temp = localStorage.getItem('users');
              self.users_json= JSON.parse(self.user_temp)


          self.edit = function(ids){
                  console.log('id to be edited', ids);
                  for(var i = 0; i < self.users_json.length; i++){
                    console.log(self.users_json[i].id)
                      if(self.users_json[i].id === ids) {
                         self.user = angular.copy(self.users_json[i]);
                         break;
                      }
                  }
              }



 self.submit = function(){


              
                    console.log(self.user_json.length)
                      for(var i = 0; i < self.user_json.length; i++){
                        console.log(self.user_json)
                          if(self.user_json[i].id === self.user.id) {
                            console.log(self.user)
                            self.user_json[i] = self.user;
                            break;
                          }
                      }
                     console.log('User updated with id ', self.user.id);
                     localStorage.setItem('users', JSON.stringify(self.user_json));

                  
                }

           }]);

