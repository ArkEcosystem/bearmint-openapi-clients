# OpenapiClient::AccountMetadata

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The id of the object. | [optional] |
| **account_id** | **Integer** | The id of the object. | [optional] |
| **_module** | **String** | The id of the object. | [optional] |
| **key** | **String** | The id of the object. | [optional] |
| **value** | **String** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AccountMetadata.new(
  id: 1,
  account_id: 3,
  _module: @bearmint/bep-131,
  key: inventory,
  value: [&quot;befaffab63b43b4689f2273b32c969abcb9b03af7902d523181e2be7b5b521f4&quot;],
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

