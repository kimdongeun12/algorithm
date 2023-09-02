-- 코드를 입력하세요
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS 
from FOOD_FACTORY FF
where ADDRESS like "%강원도%"



# SELECT fh.FLAVOR
# from FIRST_HALF fh , ICECREAM_INFO ii
# where fh.FLAVOR = ii.FLAVOR and
# fh.TOTAL_ORDER > 3000 and
# ii.INGREDIENT_TYPE = 'fruit_based'

# select * from 
# FIRST_HALF fh