$(() => {

  // this sheet id comes from the url of my sheet.
  // const sheetId = '1zmhU-abYQiW21j4DVBqhTBMamHaZALrca9A5tVanKCg';
     const sheetId = '1LD05ogn5Is57aPCc82X2AdwbkVytFI_4UID2SGbNyik';

  // this function appends each card/box I make to the container element in the HTML
  // each one is an object that corresponds to the first line of the google sheet.
  // below we loop each of them, and append a box with the data avaialble as row.[whatever the column name is]....
  function appendData(rows) {
    rows.forEach((row) => {
      console.log(row);
      $('.container').append(`<div class="box">
      <article class="media">

      <figure class="image is-50x50">

      <img src="${row.image}" alt="Placeholder image">

      </figure>
      <div class="media-content">

        <div class="content">
        <p>
             <strong>${row.name}</strong>
             <br>
             ${row.location}
             <br>
            <i> ${row.contact} </i>
             </p>

            </div>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">

      <style>

      .content {
margin: 20px 0 20px 70px;
font-size: 15px;
font-family: 'Press Start 2P', cursive;


      }

       </style>

      </article>
      </div>`)
    });
  };

  // this is the function the calls the informaton from the google sheet.
  $.googleSheetToJSON(sheetId)
  .done(function(rows){
    // each row is a row of data from the spreadsheet
    appendData(rows);
  })
  .fail(function(err){
    console.log('error!', err);
  });
});
