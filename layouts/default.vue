<template>
    <div>
     <!-- HEADER -->
       <nav class="navbar navbar-expand-lg navbar-dark bg-color">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ntoggle" aria-controls="ntoggle" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="ntoggle">
            <a class="navbar-brand" href="/">
            <img src="https://cdn.discordapp.com/avatars/450634297871695896/0b2dbf9faa42752a4c317f61285e3abe.png?size=256" style="border-radius: 20px;" alt="CTK BOT" width="30" height="30" class="d-inline-block align-top">
            <b>CTK BOT</b>
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/commands">
                    Commands</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">
                    Invite</a>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-outline-success" type="button"><b>Login</b></button>
            </form>
        </div>
    </div>
</nav>
        <Nuxt />

    </div>
</template>

<style>
/*Background of the nav bar */

 .navbar-dark {
    background-color: #212529;
  }


/*Color of the login button */
  form.d-flex button {
    background-color: rgb(121 145 246);
    color: white;
    outline: none;
    border: none;
}

/* Color of the login button on hover */
form.d-flex button:hover {
    background-color: rgb(166 168 253);
}
</style>