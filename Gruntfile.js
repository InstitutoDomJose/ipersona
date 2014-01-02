module.exports = function( grunt ) {

    // set task config
    grunt.initConfig({

    
    // js minifcation options
   uglify: {

        'bower_components/jquery/jquery.js': 'src/js/jquery.min.js',
        'bower_components/angular/angular.js': 'src/js/angular.min.js'  

     },


     // jshint options
    jshint : {
        all : ['src/js/all.js']
    },


    // css minifcation options
    cssmin: {
        task : {
            options : {
                report : 'gzip'
            },
            files : { 
                'css/style.min.css': [ '/src/css/style.css' ] 
            }
        }
    },


    // concat options
    concat : {
        task: {
            src: [ 'bower_components/bootstrap/dist/css/bootstrap.css', 'build/css/style.css' ],
            dest: 'src/css/all.css'
        }
    },

    

    // sass options
    sass : {
        task : {
          files: {
               'css/desktop.css' : 'scss/desktop.scss',
               'css/general.css' : 'scss/general.scss'
          }
        },
    },

    // watch options
    watch : {
      js : {
        files : [ 'js/main.js' ],
        tasks : [ 'jshint', 'uglify' ]
      },
      sass : {
        files : [ 'scss/*.scss' ],
        tasks : [ 'sass', 'concat', 'cssmin' ]
      }
    }
    });
    

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    // load plugins
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

}