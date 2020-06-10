odoo.define('crm_checklist_widget', function (require) {
"use strict";

var AbstractField = require('web.AbstractField');
var basicFields = require('web.basic_fields');
var concurrency = require('web.concurrency');
var ControlPanelView = require('web.ControlPanelView');
var core = require('web.core');
var data = require('web.data');

var _t = core._t;
var _lt = core._lt;
var qweb = core.qweb;


var AbstractField = require('web.AbstractField');
var fieldRegistry = require('web.field_registry');

var FieldMany2ManyCheckBoxesList = AbstractField.extend({
    template: 'FieldMany2ManyCheckBoxesList',
    events: _.extend({}, AbstractField.prototype.events, {
        change: '_onChange',
        click: '_onClick',
    }),
    specialData: "_fetchSpecialRelation",
    supportedFieldTypes: ['many2many'],

    init: function () {
        this._super.apply(this, arguments);
        this.m2mValues = this.record.specialData[this.name];
        console.log("crm_checklist: init m2mValues = " + this.m2mValues);
    },

    start: function() {
        console.log("crm_checklist: Many2ManyCheckBox2 loaded");
        this._renderCheckboxes();
    },

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    isSet: function () {
        return true;
    },

    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * @private
     */
    _renderCheckboxes: function () {
        console.log("crm_checklist: _renderCheckboxes");
        var self = this;
        this.m2mValues = this.record.specialData[this.name];
        console.log("crm_checklist: _renderCheckboxes m2mValues = " + this.m2mValues);
        this.$el.html(qweb.render(this.template, {widget: this}));
        console.log("crm_checklist: _renderCheckboxes, this.value.res_ids = " + this.value.res_ids);
        _.each(this.value.res_ids, function (id) {
            self.$('input[data-record-id="' + id + '"]').prop('checked', true);
            console.log("crm_checklist: _renderCheckboxes in _.each loop, id = " + id);
        });
    },
    /**
     * @override
     * @private
     */
    _renderEdit: function () {
        this._renderCheckboxes();
    },
    /**
     * @override
     * @private
     */
    _renderReadonly: function () {
        this._renderCheckboxes();
        this.$("input").prop("disabled", true);
    },

    //--------------------------------------------------------------------------
    // Handlers
    //--------------------------------------------------------------------------

    /**
     * @private
     */
    _onChange: function () {
        var ids = _.map(this.$('input:checked'), function (input) {
            return $(input).data("record-id");
        });
        this._setValue({
            operation: 'REPLACE_WITH',
            ids: ids,
        });
    },

    _onClick: function(e) {
        //e.preventDefault();
            console.log("crm_checklist: _onClick ");
    },

});

fieldRegistry.add('checkboxes_list', FieldMany2ManyCheckBoxesList);

return {
    FieldMany2ManyCheckBoxesList: FieldMany2ManyCheckBoxesList,
};
});
