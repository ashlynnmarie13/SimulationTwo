INSERT INTO houses
(id, house_name, address, city, state, zipcode, monthly_mortgage, rent, image) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;
