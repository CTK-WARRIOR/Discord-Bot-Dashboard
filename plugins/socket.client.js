import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client';
 
export default function () {
 Vue.use(new VueSocketIO({
   connection: io()
 }))
}