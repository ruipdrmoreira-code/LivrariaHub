<!doctype html>
<html lang="pt-pt" data-bs-theme="dark">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="img/comic.png" type="image/x-icon" />
  <title>LibriFlow | Login</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="/css/app.css?v={{ time() }}">
</head>

<body>

  <!-- -----------------------------------------------NAVBAR--------------------------------------------->
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="img/comic.png" width="40px" />
        LibriFlow
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navConteudo">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navConteudo">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#">Início</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Livros</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <input type="text" id="nmrBusca" class="form-control" placeholder="Procurar..." />
          <button class="btn btn-outline-light" type="button" id="btnBusca">
            <i class="bi bi-search"></i>
          </button>
          <button class="btn btn-outline-light" id="btnTema">
            <i class="bi bi-circle-half"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <header>

  </header>
  <main>

  </main>
  <!-- -------------------------------------------------------------Footer---------------------------------------------------- -->
  <footer>
    <script src="{{ asset('js/app.js') }}?v={{ time() }}"></script>
    Copyright &copy; 2024 - Livraria Hub Portugal |
    <a href="#" class="linkFooter">Política de privacidade</a> |
    <a href="#" class="linkFooter">Termos de licença</a>
  </footer>
</body>