# OpenapiClient::ApiAccountsGet200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | **Array** |  | [optional] |
| **links** | **Object** |  | [optional] |
| **meta** | **Object** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApiAccountsGet200Response.new(
  data: [{&quot;id&quot;:1,&quot;address&quot;:&quot;bear14v4nt0x5jryeagz2x6nad02pk9y6kjlwcav365l20emh8ht2q275ttfg8yq3ch43lpp8z22xyfxqxkpm0f7&quot;,&quot;public_key&quot;:&quot;ab2b35bcd490c99ea04a36a7d6bd41b149ab4beec7591d53ea7e7773dd6a02bd45ad2839011c5eb1f842712946224c03&quot;,&quot;balances&quot;:{&quot;BEAR&quot;:&quot;10000002200000000&quot;},&quot;locked_balances&quot;:{&quot;BEAR&quot;:&quot;0&quot;},&quot;validator&quot;:{&quot;address&quot;:&quot;5c6b8588b0cccde01c43286b1e698519dd27ceee&quot;,&quot;publicKey&quot;:&quot;fc795a9741081019b15ef5e34131e3d41bb59fccb99b6bae1419820fd300bfcf&quot;,&quot;power&quot;:&quot;1&quot;},&quot;metadata&quot;:[],&quot;created_at&quot;:&quot;2022-10-09T02:12:24.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-09T02:12:36.000000Z&quot;},{&quot;id&quot;:3,&quot;address&quot;:&quot;bear1jrvszt338cqya8vn4gqj9zduy9kcr6t24t93ewq4askp82mfgn7geekenddygqalqk73e98tj6r4u9mwejl&quot;,&quot;public_key&quot;:&quot;90d9012e313e004e9d93aa012289bc216d81e96aaacb1cb815ec2c13ab6944fc8ce6d99b5a4403bf05bd1c94eb96875e&quot;,&quot;nonce&quot;:1,&quot;balances&quot;:{&quot;BEAR&quot;:&quot;9999999900000000&quot;},&quot;locked_balances&quot;:{&quot;BEAR&quot;:&quot;0&quot;},&quot;metadata&quot;:[],&quot;created_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;}],
  links: {&quot;first&quot;:&quot;/api/accounts?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;last&quot;:&quot;/api/accounts?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev&quot;:&quot;/api/accounts?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;next&quot;:&quot;/api/accounts?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;},
  meta: {&quot;path&quot;:&quot;/api/accounts&quot;,&quot;per_page&quot;:100,&quot;next_cursor&quot;:&quot;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev_cursor&quot;:&quot;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;}
)
```

