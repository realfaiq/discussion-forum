<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Home</title>
    <script>
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
        function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        }

        /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
        function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        }
    </script>
</head>
<body>
    
    <!-- Sidebar and Navigation Bar -->
    <div class="bg-primary text-white">
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="container">
                <h2>All Users</h2>
                <!-- Get Active Users from the database -->
                <div class="d-flex mb-2">
                    <div class="img-fluid">
                        <!-- Add the image there -->
                        <img src="People.jpg" alt="" height="40px" width="40px" class="rounded-circle mr-2">
                    </div>
                    <div class="name my-auto">
                        <!-- Add the name here -->
                        <span class="align-middle">Salena Gomez</span>
                    </div>
                </div>

                <!-- Dummy Remove it after extracting from the database -->
                <div class="d-flex">
                    <div class="img-fluid">
                        <!-- Add the image there -->
                        <img src="People2.jpg" alt="" height="40px" width="40px" class="rounded-circle mr-2">
                    </div>
                    <div class="name my-auto">
                        <!-- Add the name here -->
                        <span class="align-middle">Marine Smith</span>
                    </div>
                </div>
            </div>
        </div>


        <div id="main" class="d-flex">
            <button class="openbtn" onclick="openNav()">&#9776;</button>
            <a href="Home.php" class="navbar-brand text-white ml-2 my-auto">Discussion Form's</a>
            <div class="ml-auto btn">
                <button class="text-white btn btn-dark" data-toggle="modal" data-target="#askModal">Ask a Question</button>
                <button class="btn btn-dark text-white">Sign Out</button>
            </div>  
        </div>
    </div>

    <!-- Main Content -->

    <div class="container mt-2">
        <h1 class="">Discussions</h1>
        <div class="row">
            <div class="col-md-8 mt-2">
                <!-- Questions -->
                <div class="back">
                    <div class="container">
                        <h4 class="p-2">Title : <span class="question small"><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ab aperiam labore perferendis sed maxime sunt laudantium vel adipisci officiis!</strong></span></h4>
                        <h4 class="p-2">Answers : <span class="asnwers small">
                            <ul class="unstyled">
                                <!-- Add the answers from the database -->
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                                <li class="small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, cum!</li>
                            </ul>
                        </span></h4>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mt-2">
                <div class="back-2 p-2">
                    <div class="container">
                        <h4>Latest Questions</h4>
                        <ul class="list-unstyled">
                            <li class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit...</li>
                            <li class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit...</li>
                            <li class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit...</li>
                            <li class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit...</li>
                            <li class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="bg-dark text-center text-white p-2 my-auto">
            <div class="icons">
            <ul class="">
                <li><a href="#" class="link text-center"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#" class="link"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" class="link"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" class="link"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#" class="link"><i class="fab fa-pinterest"></i></a></li>
            </ul>
        </div>

            <p class="my-auto">Copyright &copy; 2021, Discussions Forums, All Rights Reserved</p>
        </div>
    </footer>

    <!-- Modal -->
    <div class="modal fade" id="askModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Ask a Question</h3>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="Home.php" method="POST">
                        <div class="form-group">
                            <label for="question">Question</label> 
                            <textarea name="textarea" id="text" class="form-control"></textarea>
                        </div>

                        <input type="submit" value="Submit" class="btn btn-primary form-control">
                    </form>
                </div>
            </div>
        </div>
    </div>
  



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>
