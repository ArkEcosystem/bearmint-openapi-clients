# OpenapiClient::TransactionMetadata

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The id of the object. | [optional] |
| **transaction_id** | **Integer** | The id of the object. | [optional] |
| **_module** | **String** | The id of the object. | [optional] |
| **key** | **String** | The id of the object. | [optional] |
| **value** | **String** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TransactionMetadata.new(
  id: 1,
  transaction_id: 1,
  _module: @bearmint/bep-126,
  key: collection,
  value: {&quot;id&quot;:&quot;47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535&quot;,&quot;name&quot;:&quot;41848b4314b2-43bf-819d-41ae21a4b763&quot;,&quot;symbol&quot;:&quot;d6b96b8b9677-4669-a0aa-8b74b545d611&quot;,&quot;uriPrefix&quot;:&quot;https://bearmint.com/&quot;,&quot;uriSuffix&quot;:&quot;.json&quot;,&quot;initialOwner&quot;:&quot;bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl&quot;,&quot;currentOwner&quot;:&quot;bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl&quot;,&quot;accessControlList&quot;:{&quot;bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl&quot;:{&quot;permissions&quot;:[0,1,2]}},&quot;policies&quot;:[{&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:1,&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:2,&quot;name&quot;:&quot;@bearmint/bep-145&quot;}]},
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

