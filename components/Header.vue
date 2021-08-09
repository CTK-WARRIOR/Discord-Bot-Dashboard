<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-color">
    <div class="container-fluid">
      <button aria-controls="ntoggle" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#ntoggle" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse" id="ntoggle">
        <a class="navbar-brand nav-head" href="/">
          CTK BOT
      </a>
      <ul id="nav-list" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/commands">
            Commands
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/invite">
            Invite
          </a>
          </li>
      </ul>
      <form class="d-flex">
        <button v-if="!$auth.loggedIn" onclick="location.href='/login'" class="btn btn-outline-success" type="button">
          <b>
            LOGIN
        </b>
        </button>

       <button v-else onclick="location.href='/dashboard'" class="btn btn-outline-success" type="button">
          <b>
            {{ $auth.user.username }}
        </b>
        </button>
                   
  </form>
        </div>
    </div>
</nav>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
    /*Background of the nav bar */

:root {
	--background: #0b1622;
  --header: #151f2e;
  --iconcolor: #85b2f7
}

.navbar-dark {
      background-color: var(--header);
}

.navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
}


  .nav-head {
    font-family: 'Hammersmith One', sans-serif;
    font-size: 2rem;
    display: none;
  }

 .active {
    color: rgb(166 168 253);
  }


/*Color of the login button */
  form.d-flex button {
     font-family: 'Josefin Sans', sans-serif;
    background-color: rgb(121 145 246);
    color: white;
    outline: none;
    border: none;
}

/* Color of the login button on hover */
form.d-flex button:hover {
    background-color: rgb(166 168 253);
}

li {
  font-family: 'Josefin Sans', sans-serif;
  padding-top: 10px;
}

#nav-list {
  transform: none;
}

.nav-link {
  background-color: var(--background);
  padding-right: 10px;
  text-align: center;
  border-radius: 5px;
}

@media (min-width: 992px) {
.nav-head {
  display: block;
}

.nav-link {
  background-color: transparent;
  padding-right: none;
  text-align: left;
  border-radius: none;
}

#nav-list {
  transform: translateY(-10%);
}

}

::-webkit-scrollbar {
    width: 3px;
}
 
::-webkit-scrollbar-track {
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #02a9ff; 
}

</style>

<script>
export default {
  mounted() {
    let element = document.getElementById("nav-list").getElementsByClassName("nav-link")
    for (var i=0;i<=element.length-1;i++) {
      if(document.location.href.includes(document.getElementById("nav-list").getElementsByClassName("nav-link")[i].innerHTML.replace(/\n| /g, "").toLowerCase())) return element[i].classList.add("active")
    }
  }
}

</script>