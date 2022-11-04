# OpenapiClient::ApiAccountsMetadataGet200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | **Array** |  | [optional] |
| **links** | **Object** |  | [optional] |
| **meta** | **Object** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApiAccountsMetadataGet200Response.new(
  data: [{&quot;id&quot;:1,&quot;account_id&quot;:3,&quot;module&quot;:&quot;@bearmint/bep-131&quot;,&quot;key&quot;:&quot;inventory&quot;,&quot;value&quot;:[&quot;befaffab63b43b4689f2273b32c969abcb9b03af7902d523181e2be7b5b521f4&quot;],&quot;created_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;},{&quot;id&quot;:2,&quot;account_id&quot;:3,&quot;module&quot;:&quot;@bearmint/bep-126&quot;,&quot;key&quot;:&quot;inventory&quot;,&quot;value&quot;:[&quot;47be426fe6373cf104636a38e57f82624cb44b6389e2e954887c4a6be9921535&quot;],&quot;created_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-09T02:12:30.000000Z&quot;}],
  links: {&quot;first&quot;:&quot;/api/accounts/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;last&quot;:&quot;/api/accounts/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev&quot;:&quot;/api/accounts/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;next&quot;:&quot;/api/accounts/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;},
  meta: {&quot;path&quot;:&quot;/api/accounts/metadata&quot;,&quot;per_page&quot;:100,&quot;next_cursor&quot;:&quot;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev_cursor&quot;:&quot;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;}
)
```

