<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="shortcut icon" href="../../docs-assets/ico/favicon.png">
       
    <!-- FontAwesome: font-set designed for Bootstrap -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"> 

    <link href="css/font-awesome.css" rel="stylesheet">


    <title>Befair • Timetracker</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/time.css" rel="stylesheet">
    
    <!-- Template HTML to build up a new row on the table -->
 

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    
   
  </head>

  <body>
      
    <div class="navbar navbar-inverse navbar-fixed-top navbar-time" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle navbarbtn" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Timetracker</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Tracking</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control input-sm">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control input-sm">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </div>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron jumbotime">
      <div class="container">
        <h1 class="time">Timetracker management</h1>
        <p class="timepar">Nella tabella sottostante verranno inserite la varie attività, classificabili in base al proprio CH e agli utenti che le svolgono.</p>
        <!--<p><a class="btn btn-primary btn-lg" role="button">Learn more &raquo;</a></p>-->
      </div>
    </div>

    <div class="container">
        <h3 class="time">Risultati attesi</h3>
            <hr>
        <div class="selection"> <!-- inserire well nella classe per ottenere riquadro blu -->
            <span class="titolosel">Centro di costo</span>
            <select class="form-control selecttime">
            </select>                
        </div>
            <hr>
        
    <!-- Table containing the info about CH, users and RA -->    
    <table id ="timetable" class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Users</th>
            <th>Activities</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody class="ra">
            
        </tbody>
      </table>    



        


      <footer>
        &copy; BeFair 2013 - Website developed by Riccardo Pancotti
        
      </footer>
    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <!-- INDEX.HTML -->

    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/lib/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="js/jquery.tablesorter.min.js"></script>
    <script type="text/javascript" src="js/local.js"></script>
    <script type="text/javascript" src="js/jquery.offline.js"></script>
    
    
    
    <script type="text/javascript" charset="utf-8">
    //**ANIMATED DIV/TABLE/TIMER**
    
    </script>
    
    <script type="text/javascript" charset="utf-8">
           
                
           
   </script>
    
  </body>
</html>
