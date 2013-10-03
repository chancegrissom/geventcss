/**
 * jquery.geventcss.js 
 * Version: 0.1
 * URL: https://github.com/chancegrissom/geventcss
 * Description: Google Analytics tracking events via css classes
 * Requires: 1.4.2+
 * Author: https://github.com/chancegrissom
 * Copyright: Copyright 2013 Chance Grissom
 */

;(function($, document, window, undefined) {

    "use strict";

    var pluginName = 'geventcss';

    var defaults = {
        // Default classes to check for
        click: "gevent-click",
        hover: "gevent-hover",
        _gaq: ""
    };

    // Plugin constructor
    // This is the boilerplate to set up the plugin to keep our actual logic in one place
    function Geventcss(element, options) {
        this.element = element;

        // Merge the options given by the user with the defaults
        this.options = $.extend({}, defaults, options);

        // Attach data to the elment
        this.$el      = $(element);
        this.$el.data(name, this);

        this._defaults = defaults;

        var meta      = this.$el.data(name + '-opts');
        this.opts     = $.extend(this._defaults, options, meta);

        // Initialization
        this.init();
    }

    Geventcss.prototype = {
        // Public functions accessible to users
        // Prototype methods are shared across all elements
        // You have access to this.options and this.element
        // If your plugin is complex, you can split functionality into more
        // methods like this one

        init: function() {
            // Setup click handler
            $(this.element).delegate('.' + this.options.click, 'click', function(e){
                console.log('you clicked ' + this.element);
            });
            // Setup hover handler
            $(this.element).delegate('.' + this.options.hover, 'hover', function(e){
                console.log('you hovered ' + this.element);
            });
        }
    };

    $.fn[pluginName] = function(options) {
        // Iterate through each DOM element and return it
        return this.each(function() {
            // prevent multiple instantiations
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

    // Private function that is only called by the plugin
    var privateFunction = function() {
        // ...
    }

})(jQuery, document, window);
