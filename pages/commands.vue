<template>
<main>
      <!-- Header -->
        <Header />

   <!-- Heading on Page -->
    <div class="d-flex justify-content-center command_head slide-up-fade-in">
               <h1> Bot Commands </h1>
            </div>

             <!-- Command Menu -->
            <div class="container px-lg-5 slide-up-fade-in" id="commands_menu">
               <!-- Row -->
               <div class="row">
                  <!-- Category -->
                  <div class="col-sm-3" id="category">
                     <div class="list-group" id="myList" role="tablist">
                        <a v-bind:key=index v-for="(cate, index) in Object.keys(commands)" :class="`list-group-item list-group-item-action ${index === 0 ? 'active' : ''}`" data-bs-toggle="list" :href="`#${cate}`" role="tab" :aria-controls="cate">{{ cate }}</a>
                        <!-- -->
                     </div>
                  </div>
                  <div class="col-sm-9">
                     <!-- Get the Category again to list the commands -->
                     <div class="tab-content">
                        <!-- Another Tab to list category -->
                        <div  v-bind:key=index v-for="(cate, index) in Object.keys(commands)" :class="`tab-pane fade show ${index==0 ? 'active' : ''}`" :id="cate" role="tabpanel" >
                           <!-- accordion for every category -->
                           <div class="accordion" :id="`acc_${cate}`">
                              <!-- -->
                              <div v-bind:key=i class="accordion-item" v-for="(cmd, i) in commands[cate]">
                                 <!-- [1] Name of the command -->
                                 <h2 class="accordion-header" :id="`head_${cmd.name}`">
                                    <!-- Add button -->
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${cmd.name}`" aria-expanded="false" :aria-controls="cmd.name">
                                    {{ cmd.name }}
                                    </button>
                                 </h2>
                                 <!-- [1] -->

                                 <!-- [2] Content -->
                                 <div :id="`${cmd.name}`" class="accordion-collapse collapse" :aria-labelledby="`head_${cmd.name}`" :data-bs-parent="`#acc_${cate}`">
                                    <div class="accordion-body">
                                       <code>Description : </code>{{ cmd.description }} <br>
                                       <code>Permissions : </code><kbd>{{ cmd.permissions ? cmd.permissions.join(", ") : "None"}}</kbd> <br>
                                      <code>Aliases : </code><kbd>{{ cmd.aliases ? cmd.aliases.join(", ") : "None"}}</kbd> <br>
                                       <code>Usage : </code><small><kbd>{{ cmd.usage }}</kbd></small><br>
                                    </div>
                                 </div>
                                 <!-- [2] -->
                                 <!-- -->
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Row End -->     
               </div>
               <!-- Command Menu End -->
            </div>
            <!-- Scripts -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</main>
</template>

<script>
export default {
   data() {
      return { commands: {} }
   },
   mounted() {
      this.$load.start()
   },
   sockets: {
      commands: function(data) {
         this.commands = data
         this.$load.done()
      }
   },
   head: {
     link: [
       {
         rel: "stylesheet",
         href: "/css/commands.css"
       }
     ],
     meta: [
       {
         charset: "utf-8"
       },
       {
         name: "viewport",
         content: "width=device-width, initial-scale=1"
       }
     ],
     title: "CTK BOT"
   }
}
</script>

