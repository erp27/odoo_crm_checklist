# -*- coding: utf-8 -*-

{
    'name': 'CRM Lead checkbox',
    'version': '13.0.0.1',
    'author': "@erp27",
    'license': "Other proprietary",
    'sequence': 7,
    'summary': 'Create checkboxes for Leads/Opportunities based on user config',
    'category': 'Sales/CRM',
    'description': "",
    'website': 'https://github.com/erp27/odoo_crm_checklist',
    'depends': ['web', 'crm'],
    'data': [
        'data/ir_sequence_data.xml',
        'security/ir.model.access.csv',
        'views/crm_lead_form_view.xml',
        'views/checklist_views.xml',
        'views/res_users_views.xml',
    ],
    'qweb': [],
}
