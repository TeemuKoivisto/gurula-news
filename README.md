# haha

All-in-one schema:  
Post schema (in MongoDB):

id: hash  
created: date  
updated: date ?  
title: string  
url: string  
picture: blob  
content: string  
????  
comments: array  

Comment schema (only inside post schema, not separate entity)

id: hash  
UserId: hash  
created: date  
updated: date  
content: string  
comments: array  

User schema (referenced from comment)

id: hash  
created: date  
updated: date  
