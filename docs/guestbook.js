/**
 * Web application
 */
const apiUrl = 'https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/8b62411dba4efb65d9bbf2132ec0a143033ae485d6ee1a61e0200d7f7901fc53/kyc';
const guestbook = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  // add a single guestbood entry
  add(fname, sname, addr, city, state, zip, dob, hp, email, SSN, cship) {
    console.log('Sending', fname, sname, addr,city,state,zip,dob,hp,email, SSN, cship)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        fname,
        sname,
        addr,
        city,
        state,
        zip,
        dob,
        hp,
        email,
        SSN,
        cship
      }),
      dataType: 'json',
    });
  }
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    guestbook.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    guestbook.add(
      $('#fname').val().trim(),
      $('#sname').val().trim(),
      $('#addr').val().trim(),
      $('#city').val().trim(),
      $('#state').val().trim(),
      $('#zip').val().trim(),
      $('#dob').val().trim(),
      $('#hp').val().trim(),
      $('#email').val().trim(),
      $('#SSN').val().trim(),
      $('#cship').val().trim(),
    ).done(function(result) {
      // reload entries
      loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();
