# OpenapiClient::ApiEntitiesGet200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | **Array** |  | [optional] |
| **links** | **Object** |  | [optional] |
| **meta** | **Object** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApiEntitiesGet200Response.new(
  data: [{&quot;id&quot;:1,&quot;module&quot;:&quot;@bearmint/bep-126&quot;,&quot;type&quot;:&quot;collection&quot;,&quot;key&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;value&quot;:{&quot;id&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;name&quot;:&quot;fc3296116a5b-42f8-8c41-5b51dd3813cb&quot;,&quot;symbol&quot;:&quot;f4af54f78243-4cd9-8ef5-09db6190c69a&quot;,&quot;uriPrefix&quot;:&quot;https://bearmint.com/&quot;,&quot;uriSuffix&quot;:&quot;.json&quot;,&quot;tokens&quot;:[&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;],&quot;initialOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;currentOwner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;,&quot;accessControlList&quot;:{&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;:{&quot;permissions&quot;:[0,1,2]}},&quot;policies&quot;:[{&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:1,&quot;name&quot;:&quot;@bearmint/bep-145&quot;},{&quot;type&quot;:2,&quot;name&quot;:&quot;@bearmint/bep-145&quot;}]},&quot;created_at&quot;:&quot;2022-10-12T03:02:06.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-12T03:02:06.000000Z&quot;},{&quot;id&quot;:2,&quot;module&quot;:&quot;@bearmint/bep-131&quot;,&quot;type&quot;:&quot;token&quot;,&quot;key&quot;:&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;,&quot;value&quot;:{&quot;id&quot;:1,&quot;hash&quot;:&quot;3d262af20ff9158e8194eadb43a06609dd82dfc3d515eb539cb3e945655538cb&quot;,&quot;collection&quot;:&quot;51e24f910c4b539280a8e0c8e3fc8119312d236aea36428165ab11f2c1ce2f18&quot;,&quot;owner&quot;:&quot;bear1j4vvs55nfkjffkewadw5atzyqsmmtvtj2rcwjcvk2qfc85k5w52j545nzgez4hsw67h9vzyu958rj3g20zt&quot;},&quot;created_at&quot;:&quot;2022-10-12T03:02:06.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-10-12T03:02:06.000000Z&quot;}],
  links: {&quot;first&quot;:&quot;/api/transactions/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;last&quot;:&quot;/api/transactions/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev&quot;:&quot;/api/transactions/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;,&quot;next&quot;:&quot;/api/transactions/metadata?page%5Bcursor%5D&#x3D;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;},
  meta: {&quot;path&quot;:&quot;/api/transactions/metadata&quot;,&quot;per_page&quot;:100,&quot;next_cursor&quot;:&quot;eyJoZWlnaHQiOjExLCJfcG9pbnRzVG9OZXh0SXRlbXMiOnRydWV9&quot;,&quot;prev_cursor&quot;:&quot;eyJoZWlnaHQiOjEwLCJfcG9pbnRzVG9OZXh0SXRlbXMiOmZhbHNlfQ&quot;}
)
```

