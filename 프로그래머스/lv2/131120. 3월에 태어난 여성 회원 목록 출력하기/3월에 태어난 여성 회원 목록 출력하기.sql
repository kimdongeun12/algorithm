-- 코드를 입력하세요
SELECT mp.MEMBER_ID, mp.MEMBER_NAME, mp.GENDER, DATE_FORMAT(mp.DATE_OF_BIRTH, "%Y-%m-%d")
from MEMBER_PROFILE mp
where mp.TLNO is not null and
mp.GENDER = 'W' and
mp.DATE_OF_BIRTH like('%-03-%')