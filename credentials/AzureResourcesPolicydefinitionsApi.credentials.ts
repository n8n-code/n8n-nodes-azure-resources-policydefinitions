import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureResourcesPolicydefinitionsApi implements ICredentialType {
        name = 'N8nDevAzureResourcesPolicydefinitionsApi';

        displayName = 'Azure Resources Policydefinitions API';

        icon: Icon = { light: 'file:../nodes/AzureResourcesPolicydefinitions/azure-resources-policydefinitions.png', dark: 'file:../nodes/AzureResourcesPolicydefinitions/azure-resources-policydefinitions.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Resources Policydefinitions API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
