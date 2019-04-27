import Vue from 'vue'
import RichTextPageHome from './RichTextPage'

Vue.component('RichTextPage', RichTextPageHome)
if(document.getElementById('mobileRichTextPage')){
  new Vue({
    el: '#mobileRichTextPage',
    template: '<RichTextPage/>'
  })
}
