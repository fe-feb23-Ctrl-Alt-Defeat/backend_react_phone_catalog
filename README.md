ALARM:
sync.ts and dbInitInfo.json are not used in server, they are for sending initial data and creating a table

---DOCS---: 

To get: 
1. All products you should use /products endpoint.
2. One exact product you should use /products/id (id is number).
Example:
/products/3
3. To get detailed phone info you should use /phones/itemId (itemId is string, exapmle - 'apple-iphone-7-plus-32gb-black').
Example request:
/phones/apple-iphone-7-plus-32gb-black
4. To get products with pagination you should use both page and limit queries.Example: 
/products?page=1&limit=4
5. To get products with pagination and order that you want to, you should use previous one part with extra orderBy and orderDir (this means order direction - it could be 'ASC' (from smaller to bigger) or 'DESC' (opposite one), 'ASC' is set by default - if you want to sort by ASC you can skip this part). 
For exapmle: 
/products?page=1&limit=4&orderBy=year&orderDir=DESC

or

/products?page=1&limit=4&orderBy=year
in this case orderDir is set 'ASC', because it is default value.

or 

/products?orderBy=year&orderDir=DESC

6. To get products by their ids (for exapmle to get your cart or favorites) you should use /products?ids=1,2,3
