
You can search users and filter results via the Kinde Management API. You might need to do this to isolate users with specific properties defined, for example, to find users in a particular city.

## Make an API search request

Search with `GET` request: `/api/v1/search/users?query=searchterm`

Add additional filters to the request: `&filterA=X&filterB=Y`

Search and filter: GET `/api/v1/search/users?query=searchterm&filterA=X&filterB=Y`

The query= part is for searching by user name or email, additional filters can be applied separately. For example, use /api/v1/search/users?query=*&properties[kp_user_city]=Sydney to find all users from Sydney based on the kp_user_city property.

Here's some examples of search requests with different filter types.

- Filter for users with multiple properties using AND(&) statements. 


  ```/api/v1/search/users?query=properties[kp_usr_last_name]=Swan&properties[kp_usr_industry]=Construction```


- Filter for users with any property filter using OR(comma) statements.


  ```/api/v1/search/users?query=properties[kp_usr_last_name]=Hornet,Swan```
  

- Use a combination of filters.

  ```/api/v1/search/users?query=properties[kp_usr_last_name]=Hornet,Swan&properties[kp_usr_industry]=Construction&expand=identities,properties```


- Wildcards can also be used. 

  ```/api/v1/search/users?query=*&properties[kp_usr_middle_name]=Hornet,Swan&properties[kp_usr_industry]=Construction&expand=identities,properties```

## Example response

```jsx
{
"results": [
{
"id": "kp_8ef060c544584c51b255e83416818c12",
"email": "big.turtle42350@site.com",
"phone": null,
"picture": null,
"username": null,
"full_name": null,
"last_name": null,
"created_on": "2025-02-05T11:23:22.634233+00:00",
"first_name": null,
"identities": [
{
"type": "email",
"identity": "big.turtle42350@site.com"
}
],
"properties": {
"kp_usr_industry": "Construction",
"kp_usr_middle_name": "Hornet"
},
"provided_id": null,
"is_suspended": false,
"organizations": [
"org_d36a3f3f3c7
],
"last_signed_in": null,
"total_sign_ins": 0,
"failed_sign_ins": 0
}
]
"code": "OK",
"message": "Success"
```



