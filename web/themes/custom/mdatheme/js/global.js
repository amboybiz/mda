(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_theme = {
    attach: function (context, settings) {

      $( document ).ready(function() {
        //alert( "ready!" );
      });

      $(".alert-home").hide();

      $("#btn-create-report").click(function() {
        if ($("#select-create-report :selected").val()!=""){
          window.location.href = "/node/add/" + $("#select-create-report :selected").val(); 
        } else {
          $(".alert-home").show();
        }
          
      });

      $("#btn-view-report").click(function() {
        if ($("#select-create-report :selected").val()!="") {
          window.location.href = "/view/report/" + $("#select-create-report :selected").val();
        } else {
          $(".alert-home").show();
        }
      });  
    }
  };

})(jQuery, Drupal);