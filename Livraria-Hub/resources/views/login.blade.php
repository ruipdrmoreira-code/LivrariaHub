<!doctype html>
<html lang="pt-pt" data-bs-theme="dark">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="{{ asset('img/livro.png') }}" type="image/x-icon">
  <title>Livraria Hub | Login</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
</head>

<body>

  <!-- -----------------------------------------------NAVBAR--------------------------------------------->
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="{{ asset('img/livro.png') }}" width="40px" class="me-2" />
        Livraria Hub
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
          <input type="text" id="nmrBusca" class="form-control" placeholder="Procurar..." style="height: 38px;">
          <button class="btn btn-outline-light d-flex align-items-center justify-content-center" type="button"
            id="btnBusca" style="height: 38px; width: 40px;">
            <i class="bi bi-search"></i>
          </button>
          <button class="btn btn-outline-light d-flex align-items-center justify-content-center" id="btnTema"
            style="height: 38px; width: 40px;">
            <i class="bi bi-circle-half"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
 <!-- -----------------------------------------------Formulário de Login--------------------------------------------->
  <main class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
    <div class="card-login shadow-lg">
      <div class="header-card">
        <img src="{{ asset('img/livro.png') }}" width="60px" class="mb-2" />
        <h2 class="mb-0">Entrar</h2>
        <p class="mb-0 opacity-75">Bem-vindo(a) de volta</p>
      </div>
      <div class="p-4 bg-dark">
        <form>
          <div class="mb-3">
            <label class="form-label text-light">Username</label>
            <input type="text" class="form-control" id="usrName" placeholder="Nome de usuário" required>
          </div>
          <div class="mb-3">
            <label class="form-label text-light">Email</label>
            <input type="email" class="form-control" id="emailUsr" placeholder="exemplo@email.pt" required>
          </div>
          <div class="mb-4">
            <label class="form-label text-light">Palavra-passe</label>
            <input type="password" class="form-control" id="passUsr" placeholder="******" required>
          </div>
          <button type="submit" class="btn-entrar">Entrar</button>
        </form>
      </div>
    </div>
  </main>

  <!-- -------------------------------------------------------------Footer---------------------------------------------------- -->
  <footer>
    Copyright &copy; 2024 - Livraria Hub Portugal |
    <a href="#" class="linkFooter">Política de privacidade</a> |
    <a href="#" class="linkFooter">Termos de licença</a>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script type="module" src="{{ asset('js/app.js') }}"></script>

</body>

</html>