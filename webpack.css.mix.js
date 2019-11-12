const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");

mix.sass("resources/sass/app.scss", "public/css")
    .options({
        postCss: [tailwindcss("tailwind.config.js")]
    })
    .purgeCss()
    .version();
