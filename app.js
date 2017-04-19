"use strict"

angular
.module("portfolio", [
  "ui.router"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("HomeIndexController", [
  "$state",
  HomeIndexControllerFunction
])
.controller("AboutController", [
  "$state",
  AboutControllerFunction
])
.controller("SkillsController", [
  "$state",
  SkillsControllerFunction
])
.controller("ProjectsController", [
  "$state",
  ProjectsControllerFunction
])
.controller("ContactController", [
  "$state",
  ContactControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "ng-views/home.html",
      controller: "HomeIndexController",
      controllerAs: "vm"
    })
    .state('about', {
      url: "/about",
      templateUrl: "ng-views/about.html",
      controller: "AboutController",
      controllerAs: "vm"
    })
    .state('skills', {
      url: "/skills",
      templateUrl: "ng-views/skills.html",
      controller: "SkillsController",
      controllerAs: "vm"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "ng-views/projects.html",
      controller: "ProjectsController",
      controllerAs: "vm"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "ng-views/contact.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
  }

function HomeIndexControllerFunction($state){
  function blink(selector){
    $(selector).fadeOut(2000, function(){
      $(this).fadeIn(800, function(){
        blink(this)
      })
    })
  }
blink('.blink')
}

function AboutControllerFunction($state){
  $(document).ready(function(){
      $(".headShotDiv").slideDown(950);
      $(".aboutDiv").fadeIn(2500);
  });

}

function SkillsControllerFunction($state){
  $(document).ready(function(){
      $(".skillsContainer").show(1000, "linear");
  });

}

function ProjectsControllerFunction($state){

}

function ContactControllerFunction($state){

    }
