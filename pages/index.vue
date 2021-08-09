<template>
  <main>

        <!-- Header -->
        <Header />
        <!--MAIN BODY-->
        <div class="d-flex justify-content-center head">
            <h1><b>Build the best Discord Server</b></h1>
        </div>
        <div class="d-flex justify-content-center subtext">
            <p>Some old fart, text which will go here to make it look good but who knows what will happen :0</p>
        </div>

      
        <div class="container custom-1">
          <span class="material-icons">person_add</span>
            <h3 class="align-self-start"><b>Welcome Message and Auto Role</b></h3>
            <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>

        <div class="container pt-10 custom-2">
            <img src="https://cdn.discordapp.com/attachments/675669552796925987/838489945822724196/unknown.png">
            <h3><b>Easily Create Custom Tags</b></h3>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>

        <div class="container custom-1 pt-16">
           <span class="material-icons">gavel</span>
            <h3 class="align-self-start"><b>Easy To Moderate</b></h3>
            <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>

        <div class="container pt-10 pt-last custom-2" style="height: 300px">
            <img src="https://cdn.discordapp.com/attachments/675669552796925987/838490441975332904/unknown.png">
            <h3><b>Very Good Help Command</b></h3>
            <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>

        <div class="container" style="padding-top: 5rem!important"></div>

        <div class="footer">
        </div>
        

       <!--JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</main>
</template>

<script>
export default {
head: {
  link: [
    {
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      rel: "stylesheet"
    },
    {
      rel: "stylesheet",
      href: "/css/index.css"
    }
  ],
  meta: [
    { 
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }],

  title: "CTK BOT"
}
}
</script>
