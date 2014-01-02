
module.exports = function( grunt ) {

    // Load all tasks
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // set task config
    grunt.initConfig({

    // jshint options
    jshint : {
        all : ['assets/js/all.js']
    },

    
    // js minifcation options
  
    uglify: {
        'lib/js/jquery.min.js': 'bower_components/jquery/jquery.js',
        'lib/js/angular.min.js': 'bower_components/angular/angular.js',
     },
    
    // concat options
    concat : {
        task: {
            src: [ 'bower_components/bootstrap/dist/css/bootstrap.css', 'build/css/style.css' ],
            dest: 'assets/css/all.css',

            src: ['lib/js/jquery.min.js', 'lib/js/jquery.min.js'],
            dest: 'assets/js/all.js'
        }
      },

    // concat options
    concat : {
        task: {

            src: ['lib/js/jquery.min.js', 'lib/js/jquery.min.js'],
            dest: 'assets/js/all.js'
        }
      },
    });

    // Registrando task
    grunt.registerTask( 'concat', [ 'concat' ] );
    grunt.registerTask( 'uglify', [ 'uglify' ] );
     
    
    // load plugins
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

}