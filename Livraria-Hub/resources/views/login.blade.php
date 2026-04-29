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

  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="{{ asset('img/livro.png') }}" width="40px" />
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
      </div>
    </div>
  </nav>

  <main class="container d-flex justify-content-center align-items-center">
    <div class="card-login shadow-lg">

      <div class="header-card">
        <h2 class="mb-0">Livraria Hub</h2>
        <p class="mb-0">Crie a sua conta ou entre</p>
      </div>

      <div class="p-4">
        <form>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" id="usrName" placeholder="ex: joao123" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="emailUsr" placeholder="exemplo@email.pt" required>
          </div>

          <div class="mb-4">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" id="passUsr" placeholder="******" required>
          </div>

          <button type="submit" class="btn-entrar">
            Entrar no Hub
          </button>
        </form>

        <div class="text-center mt-4">
          <small class="text-secondary">Já tem conta? <a href="#" class="link-acao">Entrar agora</a></small>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <script type="module" src="{{ asset('js/app.js') }}"></script>
    Copyright &copy; 2024 - Livraria Hub Portugal |
    <a href="#" class="linkFooter">Política de privacidade</a> |
    <a href="#" class="linkFooter">Termos de licença</a>
  </footer>

</body>

</html>