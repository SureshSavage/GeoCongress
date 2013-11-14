/*
 * File: app/model/Bill.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.model.Bill', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'abbreviated',
                type: 'boolean'
            },
            {
                name: 'actions',
                type: 'object'
            },
            {
                name: 'awaiting_signature',
                type: 'boolean'
            },
            {
                name: 'bill_id',
                type: 'string'
            },
            {
                name: 'bill_type',
                type: 'string'
            },
            {
                name: 'chamber',
                type: 'string'
            },
            {
                name: 'code',
                type: 'string'
            },
            {
                name: 'committees',
                type: 'object'
            },
            {
                name: 'cosponsor_ids',
                type: 'object'
            },
            {
                name: 'cosponsors',
                type: 'object'
            },
            {
                name: 'cosponsors_count',
                type: 'float'
            },
            {
                name: 'enacted',
                type: 'boolean'
            },
            {
                name: 'introduced_at',
                type: 'date'
            },
            {
                name: 'keywords',
                type: 'object'
            },
            {
                name: 'last_action',
                type: 'object'
            },
            {
                name: 'last_action_at',
                type: 'date'
            },
            {
                name: 'last_passage_vote_at',
                type: 'date'
            },
            {
                name: 'last_version',
                type: 'object'
            },
            {
                name: 'last_version_on',
                type: 'string'
            },
            {
                name: 'number',
                type: 'float'
            },
            {
                name: 'official_title',
                type: 'string'
            },
            {
                name: 'passage_votes',
                type: 'object'
            },
            {
                name: 'passage_votes_count',
                type: 'float'
            },
            {
                name: 'popular_title',
                type: 'string'
            },
            {
                name: 'related_bills',
                type: 'object'
            },
            {
                name: 'session'
            },
            {
                name: 'short_title'
            },
            {
                name: 'sponsor'
            },
            {
                name: 'sponsor_id'
            },
            {
                name: 'state'
            },
            {
                name: 'summary'
            },
            {
                name: 'titles'
            },
            {
                name: 'version_codes'
            },
            {
                name: 'version_info'
            },
            {
                name: 'versions_count',
                type: 'float'
            },
            {
                name: 'vetoed',
                type: 'boolean'
            }
        ]
    }
});