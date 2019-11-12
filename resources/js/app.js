import { InertiaApp } from "@inertiajs/inertia-vue";
import Vue from "vue";
import VueSnackbar from "vue-snack";
import VModal from "vue-js-modal";
import SocialSharing from "vue-social-sharing";
import VueClipboard from "vue-clipboard2";
import VueSweetalert2 from "vue-sweetalert2";

Vue.mixin({ methods: { route: window.route } });
Vue.use(InertiaApp);
Vue.use(VueSnackbar, { close: true, position: "bottom-left" });
Vue.use(VModal);
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(SocialSharing);
Vue.use(VueClipboard);

const options = {
    confirmButtonColor: "#20859f",
    cancelButtonColor: "#ff7674",
    showCloseButton: true
};
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2, options);

const app = document.getElementById("app");

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`@/Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(app);
