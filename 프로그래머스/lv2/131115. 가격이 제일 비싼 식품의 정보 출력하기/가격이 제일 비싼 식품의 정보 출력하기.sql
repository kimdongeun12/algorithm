-- 코드를 입력하세요

SELECT *
from FOOD_PRODUCT fr
where fr.PRICE = (
    select max(sb.PRICE)
    from FOOD_PRODUCT sb
)