/*
 * File: app/view/Splash.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.view.Splash', {
    extend: 'Ext.Container',
    alias: 'widget.splash',

    requires: [
        'GeoCon.view.legislator.List',
        'GeoCon.view.Settings'
    ],

    config: {
        id: 'splashScreen',
        layout: {
            animation: 'fade',
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'splashToolbar',
                title: 'Finding location...',
                items: [
                    {
                        xtype: 'button',
                        id: 'settingsBtn',
                        ui: 'plain',
                        iconCls: 'settings'
                    }
                ]
            },
            {
                xtype: 'legislatorlist'
            },
            {
                xtype: 'settings'
            }
        ]
    },

    animateTo: function(dir) {
        Ext.getCmp('viewport').getLayout().setAnimation({
            duration: 300,
            easing: 'ease-in-out',
            type: 'slide',
            direction: dir
        });
    }

});