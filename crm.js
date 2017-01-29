$(document).ready(function() {
    var max_leads          = 10;
    var max_calls          = 10;
    var max_appointments   = 10;



    var lead = 0;
    $('.add-lead').on('click', function(e) {
      e.preventDefault();
      if(lead < max_leads){
        lead++;
        $('.lead-container').append('<div><input type="text" name="add-name" placeholder="Name"/><input type="tel" name="add-number"placeholder="Telephone"/><a href="#" class="remove_field">Delete</a></div>');
      }
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
        $('.calls-container').append('<div><input type="text" name="add-name" placeholder="Name"/><input type="tel" name="add-number" placeholder="Telephone"/><input type="date" name="add-date" placeholder="Date"/><input type="text" name="add-agent" placeholder="Assigned To"/><input type="text" name="add-notes" placeholder="Notes"/><a href="#" class="remove_field">Delete</a></div>');
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
        $('.appointment-fields').append('<div><input class="appointment-dates" id="datepicker'+appointment+'" type="text" class="date-cal" placeholder="Appointment"/>&nbsp;<input type="text" id="alternate'+appointment+'" size="30"><a href="#" class="remove_field">Delete</a></div>');
        $('#datepicker'+appointment).datepicker({
          altField: '#alternate',
          altFormat: 'DD, d MM, yy'
        });
        $('#alternate'+appointment).datepicker({
          altField: '#alternate',
          altFormat: 'DD, d MM, yy'
        });
      }
    });

    $('.appointment-fields').on('click','.remove_field', function(e){
      e.preventDefault();
      $(this).parent('div').remove();
      appointment--;
    })


});
