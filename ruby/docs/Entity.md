# OpenapiClient::Entity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The id of the object. | [optional] |
| **_module** | **String** | The id of the object. | [optional] |
| **type** | **String** | The id of the object. | [optional] |
| **key** | **String** | The id of the object. | [optional] |
| **value** | **Array** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Entity.new(
  id: 1,
  _module: @bearmint/bep-126,
  type: collection,
  key: 51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18,
  value: {&quot;id&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;name&quot;:&quot;fc3296116a5b-42f8-8c41-5b51dd3813cb&quot;,&quot;symbol&quot;:&quot;f4af54f78243-4cd9-8ef5-09db6190c69a&quot;,&quot;uriPrefix&quot;:&quot;https://bearmint.com/&quot;,&quot;uriSuffix&quot;:&quot;.json&quot;,&quot;tokens&quot;:[&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;],&quot;initialOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;currentOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;accessControlList&quot;:{&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;:{&quot;permissions&quot;:[0,1,2]}},&quot;policies&quot;:[{&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:1,&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:2,&quot;name&quot;:&quot;@bearmint/bep-145&quot;}]},
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

