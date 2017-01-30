$(document).ready(function() {

  $('.account-container').hide();
  $('.calls-container').hide();
  $('.appointment-container').hide();

  $('.account-sidebar').on('click', function() {
    $('.account-container').toggle();
  });

  $('.lead-sidebar').on('click', function() {
    $('.lead-container').toggle();
  });

  $('.log-sidebar').on('click', function() {
    $('.calls-container').toggle();
  });

  $('.appointment-sidebar').on('click', function() {
    $('.appointment-container').toggle();
  })

    var max_leads          = 10;
    var max_calls          = 10;
    var max_appointments   = 10;
    var max_accounts       = 10;



    var lead = 0;
    $('.add-lead').on('click', function(e) {
      e.preventDefault();
      if(lead < max_leads){
        lead++;
        $('.lead-container').append('<div><input type="text" id="lead-name'+lead+'" name="add-name" placeholder="Name"/><input type="tel" id="lead-tel'+lead+'" name="add-number"placeholder="Telephone"/><button class="remove_field">Delete Lead</button><button class="add-account">Add to Account</button></div>');
      }

      var account = 0;

      $('.add-account').on('click', function(e) {
        e.preventDefault();
        if(account < max_accounts) {
          account++;

          $(function appendLeadInfo() {
            $('.account-container').append('<div class="lead-to-account">' + $('#lead-name').val() + ' | ' + $('#lead-tel').val() + '<button class="remove_field">Delete Account</button></div>');
          })
          // $('#lead-name'+lead).appendLeadInfo();
          // $('#lead-tel'+lead).appendLeadInfo();
        }
      });

      $('.account-container').on('click','.remove_field', function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        account--;
      })

    });

    $('.lead-container').on('click','.remove_field', function(e){
      e.preventDefault();
      $(this).parent('div').remove();
      lead--;
    })



    var call = 0;
    $('.log-calls').on('click', function(e) {
      e.preventDefault();
      if(call < max_calls) {
        call++;
        $('.calls-container').append('<div><input type="text" name="add-name" placeholder="Name"/><input type="tel" name="add-number" placeholder="Telephone"/><input type="date" name="add-date" placeholder="Date"/><input type="text" name="add-agent" placeholder="Assigned To"/><input type="text" name="add-notes" placeholder="Notes"/><button class="remove_field">Delete</button></div>');
      }
    });

    $('.calls-container').on('click','.remove_field', function(e) {
      e.preventDefault();
      $(this).parent('div').remove();
      call--;
    })


    var appointment = 0;

    $(function() {
      $('#datepicker').datepicker({
        altField: '#alternate',
        altFormat: 'DD, d MM, yy'
      });
    });

    $('.appointment').on('click', function(e) {
      e.preventDefault();
      if(appointment < max_appointments){
        appointment++;
        $('.appointment-container').append('<div><input class="appointment-dates" id="datepicker'+appointment+'" type="text" class="date-cal" placeholder="Appointment"/>&nbsp;<input type="text" id="alternate'+appointment+'" size="30"><button class="remove_field">Delete</button></div>');
        $('#datepicker'+appointment).datepicker({
          altField: '#alternate'+appointment,
          altFormat: 'DD, d MM, yy'
        });
      }
    });

    $('.appointment-container').on('click','.remove_field', function(e){
      e.preventDefault();
      $(this).parent('div').remove();
      appointment--;
    })

});
