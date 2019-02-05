/*
 * Copyright 2005-2015 Alfresco Software, Ltd. All rights reserved.
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */
'use strict';

var ACTIVITI = ACTIVITI || {};

ACTIVITI.CONFIG = {
	'onPremise' : false,
	'contextRoot' : '/activiti-app',
	'webContextRoot' : '/activiti-app',
    'locales': ['en','de','es','fr','it','nl','ja'],
	'integrationProfile' : null,

    // Google analytics event tracking
    'isEventTrackingEnabled' : false,
    'trackingCode': 'REPLACE_THIS_',
    'signupUrl' : 'https://www.alfresco.com/products/bpm/activiti-online-trial',
    'isDevMode': false // Enable for localhost testing + console logging
};
