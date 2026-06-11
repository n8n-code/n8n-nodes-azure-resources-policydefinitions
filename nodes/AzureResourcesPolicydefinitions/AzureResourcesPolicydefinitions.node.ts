import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureResourcesPolicydefinitions implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Resources Policydefinitions',
		name: 'N8nDevAzureResourcesPolicydefinitions',
		icon: { light: 'file:./azure-resources-policydefinitions.png', dark: 'file:./azure-resources-policydefinitions.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Define policies to manage resource access at a scope.',
		defaults: { name: 'Azure Resources Policydefinitions' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureResourcesPolicydefinitionsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
