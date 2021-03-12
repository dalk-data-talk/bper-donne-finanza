import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
import italianContent from "./assets/content/content_IT.json"
import englishContent from "./assets/content/content_EN.json"
 
Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: "IT",
  save: process.env.NODE_ENV === "production",
  languages: [
    new MLanguage("IT").create(italianContent),
    new MLanguage("EN").create(englishContent)
  ]
});