module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/stylesheets/main.css': 'public/sass/main.sass'
            }
        }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'public/stylesheets/main.css'
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "views/index.html": "views/index.jade"
        }
      }
    },
    watch: {
      files: ['public/sass/*.sass'],
      tasks: ['css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('default', ['css', 'watch']);

};