# -*- coding: utf-8 -*-

from odoo import fields, models


class CrmLead(models.Model):
    _inherit = 'crm.lead'

    checklist_ids = fields.Many2many('crm.lead.checklist',
                                    'crm_lead_checklist_rel',
                                    'lead_id', 'checklist_id',
                                    string='Checklists')
