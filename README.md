# Frontend-Sass
This project template is a skeleton for starter Front End web application based on Sass. This repository is created for internal/personal/public general web project use.

### Directory Layout

```
├── /app/                           # Web Application base
│   ├── /fonts/                     # Font base files
│   ├── /img/                       # Images files
│   ├── /js/                        # Javascript files
│   ├── /sass/                      # The source code of the styles
│   │   ├── /base/                  # Base files for general & typography scss
│   │   ├── /bootstrap/             # Bootstrap Core files
│   │   ├── /components/            # Components scss for objects (buttons, forms, modal etc)
│   │   ├── /layout/                # Layout scss for templating (header, footer, sidebar, etc)
│   │   ├── /pages/                 # Standalone pages scss
│   │   ├── /utility/               # Variables, mixins
│   │   ├── /vendor/                # Plugin scss
│   │   ├── bootstrap.scss          # Bootstrap 4 components (Not Confirm)
│   │   ├── style.scss              # Imports all core scss files
│── gulpfile.js                     # Configuration file for Gulp logic
│── package.json                    # The list of 3rd party libraries and utilities
│── bower.json                      # The list of 3rd party packages files
```

### Features

* CSS Autoprefixing
* HTML/Javascript Template Engine
* PostCSS [More info](https://github.com/postcss/postcss)
* Component styles, layout concept
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io)
