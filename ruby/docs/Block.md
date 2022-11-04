# OpenapiClient::Block

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | The id of the object. | [optional] |
| **hash** | **String** | The hash of the object. | [optional] |
| **height** | **Integer** | The height of the object. | [optional] |
| **header** | **Array** | The id of the object. | [optional] |
| **byzantine_validators** | **Array** | The id of the object. | [optional] |
| **last_commit_info** | **Array** | The id of the object. | [optional] |
| **created_at** | **Time** | The creation date of the object. | [optional] |
| **updated_at** | **Time** | The updating date of the object. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Block.new(
  id: 1,
  hash: gm4XrAp6aJ/+oKAcnCoJwafhNJ0HD20DWg1epsEG6+o&#x3D;,
  height: 1,
  header: {&quot;version&quot;:{&quot;block&quot;:&quot;11&quot;},&quot;chainId&quot;:&quot;bearmint-testnet&quot;,&quot;height&quot;:&quot;1&quot;,&quot;time&quot;:&quot;2022-10-09T02:12:21.361Z&quot;,&quot;lastBlockId&quot;:{&quot;partSetHeader&quot;:{&quot;hash&quot;:&quot;gm4XrAp6aJ/+oKAcnCoJwafhNJ0HD20DWg1epsEG6+o&#x3D;&quot;,&quot;partSetHeader&quot;:{&quot;total&quot;:1,&quot;hash&quot;:&quot;FASNnBqJ2g7aBGvQFoPdLRXhO6C/lbl+VNqYM0GTgps&#x3D;&quot;}}},&quot;lastCommitHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;dataHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;validatorsHash&quot;:&quot;ayn8KqIdjdg0za9pl/QPzJbOaSAkVIJWCXrctRWaR7s&#x3D;&quot;,&quot;nextValidatorsHash&quot;:&quot;ayn8KqIdjdg0za9pl/QPzJbOaSAkVIJWCXrctRWaR7s&#x3D;&quot;,&quot;consensusHash&quot;:&quot;BICRvH3cKD93v7+R1zxE2ljD34qcvIZ0Bdi389qtoi8&#x3D;&quot;,&quot;appHash&quot;:&quot;mhfocNgApsnLxYU1Wv8EwT3idwzBW8iP76GDbRAJLU8&#x3D;&quot;,&quot;lastResultsHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;evidenceHash&quot;:&quot;47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU&#x3D;&quot;,&quot;proposerAddress&quot;:&quot;XGuFiLDMzeAcQyhrHmmFGd0nzu4&#x3D;&quot;},
  byzantine_validators: [],
  last_commit_info: {&quot;votes&quot;:[{&quot;validator&quot;:{&quot;address&quot;:&quot;XGuFiLDMzeAcQyhrHmmFGd0nzu4&#x3D;&quot;,&quot;power&quot;:&quot;1&quot;},&quot;signedLastBlock&quot;:true}]},
  created_at: 2022-10-09T02:12:24Z,
  updated_at: 2022-10-09T02:12:24Z
)
```

