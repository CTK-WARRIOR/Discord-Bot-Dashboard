<template>
<main>
  <Header />
 <div class="d-flex justify-content-center head">
  <h5>PLEASE SELECT THE SERVER</h5>
  </div>

<div id="server-list">
  <div class="server">
    <img src="https://cdn.discordapp.com/icons/598122945604354053/a_2dd6824baf662b7190425514bf1d5608.gif">
    <span>CTK's Server</span>

    <button class="ms-auto"><span>Go to Dashboard</span></button>
  </div>
</div>

</main>
</template>

<script>
export default {
  head: {
    link:[
      {
        rel: "stylesheet",
        href: "/css/dashboard.css"
      }
    ]
  }
}
</script>
