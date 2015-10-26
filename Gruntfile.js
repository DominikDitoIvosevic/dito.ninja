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
      files: ['views/*.jade', 'public/sass/*.sass'],
      tasks: ['sass', 'jade']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['watch']);

};