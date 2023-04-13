-- 코드를 입력하세요
SELECT pi.PT_NAME , pi.PT_NO , pi.GEND_CD , pi.AGE , IFNULL(TLNO, 'NONE')
from PATIENT pi
where pi.GEND_CD = 'W' and
pi.AGE <= 12
ORDER BY pi.AGE DESC, pi.PT_NAME ASC;