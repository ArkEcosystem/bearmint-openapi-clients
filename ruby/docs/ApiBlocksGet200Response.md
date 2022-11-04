# OpenapiClient::ApiBlocksGet200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | **Array** |  | [optional] |
| **links** | **Object** |  | [optional] |
| **meta** | **Object** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApiBlocksGet200Response.new(
  data: [{&quot;id&quot;:1,&quot;hash&quot;:&quot;gm4XrAp6aJ/+oKAcnCoJwafhNJ0HD20DWg1epsEG6+o&#x3D;&quot;,&quot;height&quot;:1,&quot;header&quot;:{&quot;version&quot;:{&quot;block&quot;:&quot;11&quot;},&quot;chainId&quot;:&quot;bearmint-testnet&quot;,&quot;height&quot;:&quot;1&quot;,&quot;time&quot;:&quot;2022-10-09T02:12:21.361Z&quot;,&quot;lastBlockId&quot;:{&quot;partSetHeader&quot;:{&quot;hash&quot;:&quot;gm4XrAp6aJ/+oKAcnCoJwafhNJ0HD20DWg1epsEG6+o&#x3D;&quot;,&quot;partSetHeader&quot;:{&quot;total&quot;:1,&quot;hash&quot;:&quot;FASNnBqJ2g7aBGvQFoPdLRXhO6C/lbl+VNqYM0GTgps&#x3D;&quot;}}},&quot;lastCommitHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;dataHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;validatorsHash&quot;:&quot;ayn8KqIdjdg0za9pl/QPzJbOaSAkVIJWCXrctRWaR7s&#x3D;&quot;,&quot;nextValidatorsHash&quot;:&quot;ayn8KqIdjdg0za9pl/QPzJbOaSAkVIJWCXrctRWaR7s&#x3D;&quot;,&quot;consensusHash&quot;:&quot;BICRvH3cKD93v7+R1zxE2ljD34qcvIZ0Bdi389qtoi8&#x3D;&quot;,&quot;appHash&quot;:&quot;mhfocNgApsnLxYU1Wv8EwT3idwzBW8iP76GDbRAJLU8&#x3D;&quot;,&quot;lastResultsHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;evidenceHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;proposerAddress&quot;:&quot;XGuFiLDMzeAcQyhrHmmFGd0nzu4&#x3D;&quot;},&quot;last_commit_info&quot;:{&quot;votes&quot;:[{&quot;validator&quot;:{&quot;address&quot;:&quot;XGuFiLDMzeAcQyhrHmmFGd0nzu4&#x3D;&quot;,&quot;power&quot;:&quot;1&quot;},&quot;signedLastBlock&quot;:true}]},&quot;created_at&quot;:&quot;2022-10-09T02:12:24.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-09T02:12:24.000000Z&quot;}],
  links: {&quot;first&quot;:&quot;/api/blocks?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;last&quot;:&quot;/api/blocks?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev&quot;:&quot;/api/blocks?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;next&quot;:&quot;/api/blocks?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;},
  meta: {&quot;path&quot;:&quot;/api/blocks&quot;,&quot;per_page&quot;:100,&quot;next_cursor&quot;:&quot;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev_cursor&quot;:&quot;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;}
)
```

