$(document).ready(function() {
  tableau.extensions.initializeAsync().then(function() {
    //$("#resultBox").html("Success");

  },
  function(err) {
    // something went wrong in initialization
    $("#resultBox").html("Error while Initializing: " + err.toString());
  });
  
  
  // Hook up an event handler for the load button click.
  // Wait to initialize until the button is clicked.
  
  $("#refresh").click(function() 
  {
     { const dashboards = tableau.extensions.dashboardContent.dashboard;
      if (dashboards.name ==='E2E Summary GPO')
      
      dashboards.worksheets.forEach(function(worksheet)
      {
        if (worksheet.name ==='QtCr to QtSbmtAprvl (2)')
        {
        worksheet.getFiltersAsync().then(function(filters)
        {
          
          let ApplFilt = []
          filters.forEach(function (filter)
          {
            if (filter.fieldName === 'Country Name (Country)' )  {
                          
            ApplFilt.push(worksheet.clearFilterAsync(filter.fieldName))
            //$("#resultBox").html(filter.fieldName); 
          }
            else if  (filter.fieldName==='Quote Type')
            {
                          
              ApplFilt.push(worksheet.clearFilterAsync(filter.fieldName))
             // $("#resultBox").html(filter.fieldName); 
            }
           //$("#resultBox").html(filter.fieldName);
          });
       }) 
        }
      });}

  });

});
