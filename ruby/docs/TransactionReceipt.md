# OpenapiClient::TransactionReceipt

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The id of the object. | [optional] |
| **transaction_id** | **Integer** | The id of the object. | [optional] |
| **block_hash** | **String** | The id of the object. | [optional] |
| **block_number** | **Integer** | The id of the object. | [optional] |
| **logs** | **Array** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TransactionReceipt.new(
  id: 1,
  transaction_id: 2,
  block_hash: Cda8V4lhwCNGlm2DIFKX7asRiHHD8XWtxNp/fKTFLPQ&#x3D;,
  block_number: 5,
  logs: [{&quot;event&quot;:&quot;MetadataCreated&quot;,&quot;args&quot;:{&quot;_modelKey&quot;:&quot;ec667f03c0d3d929d09a80c947dbce6ac3b65193fca08c3543b1a4b0a27bd03b&quot;,&quot;_modelSubType&quot;:&quot;metadata&quot;,&quot;_modelType&quot;:&quot;tx&quot;,&quot;_module&quot;:&quot;@bearmint/bep-131&quot;,&quot;_opIndex&quot;:&quot;0&quot;,&quot;key&quot;:&quot;id&quot;,&quot;value&quot;:{&quot;id&quot;:1}}},{&quot;event&quot;:&quot;MetadataCreated&quot;,&quot;args&quot;:{&quot;_modelKey&quot;:&quot;ec667f03c0d3d929d09a80c947dbce6ac3b65193fca08c3543b1a4b0a27bd03b&quot;,&quot;_modelSubType&quot;:&quot;metadata&quot;,&quot;_modelType&quot;:&quot;tx&quot;,&quot;_module&quot;:&quot;@bearmint/bep-131&quot;,&quot;_opIndex&quot;:&quot;0&quot;,&quot;key&quot;:&quot;hash&quot;,&quot;value&quot;:{&quot;hash&quot;:&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;}}},{&quot;event&quot;:&quot;OwnerChanged&quot;,&quot;args&quot;:{&quot;_modelKey&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;_modelSubType&quot;:&quot;metadata&quot;,&quot;_modelType&quot;:&quot;account&quot;,&quot;_module&quot;:&quot;@bearmint/bep-131&quot;,&quot;_opIndex&quot;:&quot;0&quot;,&quot;key&quot;:&quot;inventory&quot;,&quot;value&quot;:[&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;]}},{&quot;event&quot;:&quot;MetadataCreated&quot;,&quot;args&quot;:{&quot;_modelKey&quot;:&quot;ec667f03c0d3d929d09a80c947dbce6ac3b65193fca08c3543b1a4b0a27bd03b&quot;,&quot;_modelSubType&quot;:&quot;metadata&quot;,&quot;_modelType&quot;:&quot;tx&quot;,&quot;_module&quot;:&quot;@bearmint/bep-131&quot;,&quot;_opIndex&quot;:&quot;0&quot;,&quot;key&quot;:&quot;token&quot;,&quot;value&quot;:{&quot;id&quot;:1,&quot;hash&quot;:&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;,&quot;collection&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;owner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;}}},{&quot;event&quot;:&quot;MetadataUpdated&quot;,&quot;args&quot;:{&quot;_modelKey&quot;:&quot;ec667f03c0d3d929d09a80c947dbce6ac3b65193fca08c3543b1a4b0a27bd03b&quot;,&quot;_modelSubType&quot;:&quot;metadata&quot;,&quot;_modelType&quot;:&quot;tx&quot;,&quot;_module&quot;:&quot;@bearmint/bep-126&quot;,&quot;key&quot;:&quot;collection&quot;,&quot;value&quot;:{&quot;id&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;name&quot;:&quot;fc3296116a5b-42f8-8c41-5b51dd3813cb&quot;,&quot;symbol&quot;:&quot;f4af54f78243-4cd9-8ef5-09db6190c69a&quot;,&quot;uriPrefix&quot;:&quot;https://bearmint.com/&quot;,&quot;uriSuffix&quot;:&quot;.json&quot;,&quot;tokens&quot;:[&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;],&quot;initialOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;currentOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;accessControlList&quot;:{&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;:{&quot;permissions&quot;:[0,1,2]}},&quot;policies&quot;:[{&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:1,&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:2,&quot;name&quot;:&quot;@bearmint/bep-145&quot;}]}}}],
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

