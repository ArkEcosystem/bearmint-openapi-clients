# OpenapiClient::Account

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The internal id of the object. | [optional] |
| **address** | **String** | The id of the object. | [optional] |
| **public_key** | **String** | The id of the object. | [optional] |
| **name** | **String** | The id of the object. | [optional] |
| **nonce** | **Integer** | The id of the object. | [optional] |
| **balances** | **String** | The id of the object. | [optional] |
| **locked_balances** | **String** | The id of the object. | [optional] |
| **stakes** | **String** | The id of the object. | [optional] |
| **validator** | **String** | The id of the object. | [optional] |
| **metadata** | **String** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Account.new(
  id: 1,
  address: bear14v4nt0x5jryeagz2x6nad02pk9y6kjlwcav365l20emh8ht2q275ttfg8yq3ch43lpp8z22xyfxqxkpm0f7,
  public_key: ab2b35bcd490c99ea04a36a7d6bd41b149ab4beec7591d53ea7e7773dd6a02bd45ad2839011c5eb1f842712946224c03,
  name: johndoe,
  nonce: 1,
  balances: {&quot;BEAR&quot;:&quot;9999999900000000&quot;,&quot;FIRE&quot;:&quot;9999999900000000&quot;,&quot;GOLD&quot;:&quot;9999999900000000&quot;,&quot;SEED&quot;:&quot;9999999900000000&quot;},
  locked_balances: {&quot;BEAR&quot;:&quot;0&quot;,&quot;FIRE&quot;:&quot;0&quot;,&quot;GOLD&quot;:&quot;0&quot;,&quot;SEED&quot;:&quot;0&quot;},
  stakes: {&quot;johndoe&quot;:&quot;9999999900000000&quot;},
  validator: {&quot;address&quot;:&quot;5c6b8588b0cccde01c43286b1e698519dd27ceee&quot;,&quot;publicKey&quot;:&quot;fc795a9741081019b15ef5e34131e3d41bb59fccb99b6bae1419820fd300bfcf&quot;,&quot;power&quot;:&quot;1&quot;},
  metadata: [],
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

