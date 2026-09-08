/* ── 파이썬 실습실 (Pyodide) ── */
(function(){
  // ★ = 수업 시간에 실제 실습한 파일 (파이참 폴더에 있는 내 코드 그대로)
  // 나머지는 교재 예제를 오탈자 없이 정리한 것 — 수업에서 건너뛰었어도 공부는 여기서!
  var EX = {
'01.hello.py': { star: true, ch: 'chap_02', code:
`print('hello')`,
  notes: [[1, "<b>print()</b> — 괄호 안의 내용을 화면(콘솔)에 출력하는 내장함수. 따옴표로 감싼 글자는 '문자열'이다."]] },

'01.variable.py': { star: false, ch: 'chap_03', code:
`variable1 = 100                  # 정수 변수 선언
variable2 = 3.14                 # 실수 변수 선언
variable3 = -200
variable4 = 1.2 + 3.4j           # 복소수 변수 선언
variable5 = 'This is Python'     # 문자열 변수 선언

variable6 = True                 # bool 변수 선언
variable7 = float(variable1)     # 자료형 변경: 정수 -> 실수
variable8 = int(variable2)       # 자료형 변경: 실수 -> 정수

print('variable1 =', variable1, type(variable1))
print('variable2 =', variable2, type(variable2))
print('variable4 =', variable4, type(variable4))
print('variable5 =', variable5, type(variable5))
print('variable6 =', variable6, type(variable6))
print('variable7 =', variable7, type(variable7))
print('variable8 =', variable8, type(variable8))`,
  notes: [
   [1, "= 는 '같다'가 아니라 <b>오른쪽 값을 왼쪽 이름에 담아라</b>는 뜻. 파이썬은 자료형을 미리 적지 않는다(동적 타입)."],
   [4, "복소수는 수학의 i 대신 <b>j</b>를 쓴다. 1.2+3.4j"],
   [8, "float() — 정수 100을 실수 100.0으로. 소수점이 붙는다."],
   [9, "int() — 3.14가 <b>3</b>이 된다. 반올림이 아니라 <b>버림</b>! 시험 포인트."],
   [11, "type() — 그 값의 자료형을 알려 주는 내장함수. int, float, str 등으로 표시된다."]] },

'02.list.py': { star: true, ch: 'chap_03', code:
`list1 = [1, 2, 3, 4]
list2 = [1, 1.5, 'a', 'a', '문자열']

tuple1 = (1, 2)
tuple2 = (1, 1.5, 'b', 'b', '문자열')

dict1 = {'name':'김민', 'email':'naver.com'}
set1, set2 = set(list2), set(tuple2)   # 한 행에 두 개 변수 선언

list1[0] = 5   # 0번 원소 값 변경
list2.insert(3, 'b')   # 원소 삽입
# tuple1[0] = 5   # 에러 발생 - 튜플은 원소 변경 불가

dict1['email'] = 'naver.com'   # 킷값으로 접근

print('list1', list1, type(list1))
print('list2', list2, type(list2))
print('tuple1', tuple1, type(tuple1))
print('dict1', dict1, type(dict1))
print('set1', set1, type(set1))
print('set2', set2, type(set2))
print('intersection', set1 & set2)   # 교집합 구함`,
  notes: [
   [1, "대괄호 [ ] = <b>리스트</b>. 넣고 빼고 바꾸는 게 전부 자유로운 그릇."],
   [4, "소괄호 ( ) = <b>튜플</b>. 한번 만들면 절대 못 바꾸는 '잠긴 리스트'."],
   [7, "중괄호 {키:값} = <b>사전(dict)</b>. 이름표(키)로 값을 찾는 서랍."],
   [8, "set() = <b>집합</b>. 중복된 원소('a' 두 개)를 자동으로 하나만 남긴다."],
   [10, "리스트는 0번부터 센다. list1[0]=5 → 첫 원소가 1에서 5로 바뀐다."],
   [11, "insert(3,'b') — 3번 자리에 'b'를 끼워 넣는다. 뒤 원소들은 한 칸씩 밀린다."],
   [12, "주석을 풀고 실행해 보라 — TypeError가 난다. 튜플 불변을 눈으로 확인!"],
   [22, "& 는 교집합. | 합집합, - 차집합도 해 보자."]] },

'03.command_line.py': { star: false, ch: 'chap_03', code:
`title = '서기 1년 1월 1일부터' \\
        '오늘까지' \\
        '일수 구하기'
months = [31, 28, 31, 30, 31, 30,
          31, 31, 30, 31, 30, 31]
year, month = 2020, 1            # 여러개 변수 한행에 선언
day = 7; ratio = 365.2425        # 2개 논리적 명령행

days = (year -1) * ratio + \\
       sum(months[:month-1]) + day

print(title), print(' - 년:', year), print(' - 월:', month)
print(' - 일:', day); print(' * 일수 총합:', int(days))`,
  notes: [
   [1, "행 끝의 <b>역슬래시(\\)</b> — '이 명령은 다음 줄로 이어진다'는 표시. 세 줄이 한 문장이 된다."],
   [4, "리스트의 원소를 나열할 때는 역슬래시 <b>없이도</b> 여러 줄로 쓸 수 있다."],
   [6, "쉼표 다중 할당 — year에 2020, month에 1이 동시에 담긴다."],
   [7, "<b>세미콜론(;)</b> — 한 줄에 두 명령. 자주 쓰진 않지만 문법은 알아 두자."],
   [9, "1년 평균 365.2425일(그레고리력) × 지난 연수 + 이번 해 지난 날수."],
   [13, "실행하면 737431일 — 서기 1년부터 2020년 1월 7일까지의 총일수다."]] },

'04.slice_operater.py': { star: true, ch: 'chap_03', code:
`a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(a)
print(a[:2])       # 처음부터 1번까지 (2는 미포함)
print(a[4:-1])     # 4번부터 뒤에서 두 번째까지
print(a[2::2])     # 2번부터 2칸씩
print(a[::-1])     # 전체 역순 - 자주 쓴다!
print(a[1::-1])    # 1번부터 거꾸로
print(a[7:1:-2])   # 7번부터 2칸씩 감소
print(a[:-4:-1])   # 끝에서 3개, 역순`,
  notes: [
   [4, "규칙은 <b>[시작:끝:간격]</b> 하나. 끝 인덱스는 <b>포함되지 않는다</b> — [:2]는 0,1번만."],
   [5, "-1은 '마지막 원소'라는 뜻. 끝 미포함 규칙 때문에 8까지만 나온다."],
   [7, "간격이 <b>음수</b>면 거꾸로 간다. 시작을 생략하면 마지막(9)부터 출발."],
   [10, "영상처리 예고 — image[::-1]이 사진 상하 반전, image[100:200, 50:150]이 잘라내기다."]] },

'05.if.py': { star: false, ch: 'chap_03', code:
`year = 2020    # 2100, 2000, 2024 로 바꿔 보자

if (year % 4==0) and (year % 100 != 0):
    print(year, "는 윤년입니다.")
elif year % 400==0:
    print(year, "는 윤년입니다.")
else:
    print(year, "는 윤년이 아닙니다.")`,
  notes: [
   [3, "% 는 나머지 연산. year%4==0 → 4의 배수. <b>and</b>는 두 조건이 모두 참일 때만 참."],
   [3, "조건 뒤에는 반드시 <b>콜론(:)</b>, 실행할 내용은 <b>들여쓰기</b> — 파이썬 블록의 규칙."],
   [5, "elif = '아니면 만약'. 위 조건이 거짓일 때만 검사한다. 여러 번 이어 쓸 수 있다."],
   [7, "else = '그도 아니면'. 2100으로 바꾸면 여기로 온다 — 2100년은 평년!"]] },

'06.while.py': { star: false, ch: 'chap_03', code:
`# 원본 예제는 input()으로 키보드 입력을 받지만,
# 브라우저 실습실에서는 입력 대신 리스트로 재현한다.
inputs = [1, 2, 3, 4]    # 키보드로 칠 값들 (0을 넣어 보자!)
idx = 0

n = 3
while n >= 0:
    m = inputs[idx]; idx = idx + 1
    print('Enter a integer:', m)
    if int(m) == 0: break    # 0이면 while 문을 벗어남
    n = n - 1
else:
    print('4 inputs.')`,
  notes: [
   [3, "inputs 중간에 0을 넣으면 break가 걸려 else가 실행되지 않는 것을 볼 수 있다."],
   [7, "while 조건: — 조건이 참인 동안 들여쓴 블록을 반복한다."],
   [10, "<b>break</b> — 반복을 즉시 탈출. 이때는 아래 else가 실행되지 <b>않는다</b>."],
   [12, "파이썬 특유의 <b>while-else</b> — break 없이 조건이 거짓이 되어 끝났을 때만 실행. 시험 포인트!"]] },

'07.for.py': { star: true, ch: 'chap_03', code:
`# 리스트 원소합 구하기
# for 변수 in 리스트(또는 range(), zip()) - 순회
kor = [70, 80, 90, 40, 50]   # 리스트 선언
eng = [90, 80, 70, 70, 60]

sum1, sum2, sum3, sum4 = 0, 0, 0, 0   # 누적 변수 초기화

for i in range(0, 5):   # range() 함수로 범위지정
    sum1 = sum1 + kor[i] + eng[i]

for k in kor:   # 리스트 원소 순회
    sum2 = sum2 + k
for e in eng:
    sum2 = sum2 + e

for i, k in enumerate(kor):   # 리스트의 인덱스와 원소로 순회
    sum3 = sum3 + k + eng[i]

for k, e in zip(kor, eng):   # 여러 객체 동시 순회
    sum4 = sum4 + k + e

print('sum1 = ', sum1), print('sum2 = ', sum2)
print('sum3 = ', sum3), print('sum4 = ', sum4)`,
  notes: [
   [8, "방법① range(0,5) — 0,1,2,3,4 번호를 만들어 <b>번호로</b> 원소에 접근."],
   [11, "방법② 원소 직접 순회 — 번호가 필요 없으면 이게 제일 깔끔하다."],
   [16, "방법③ <b>enumerate</b> — 번호(i)와 원소(k)를 <b>동시에</b> 준다."],
   [19, "방법④ <b>zip</b> — 두 리스트를 나란히 묶어 한 쌍씩 꺼낸다."],
   [22, "네 방법 모두 합계는 700 — 결과는 같아도 상황에 맞는 것을 고르는 게 파이썬답게 쓰는 길."]] },

'08.def.py': { star: false, ch: 'chap_03', code:
`def calc_area(type, a, b, c=None):   # c는 기본값 인수
    if type == 1:                    # 사각형
        result = a * b
        msg = '사각형'
    elif type == 2:                  # 삼각형
        result = a * b / 2
        msg = '삼각형'
    elif type == 3:                  # 사다리꼴
        result = (a + b) * c / 2
        msg = '사다리꼴'
    return result, msg               # 반환값 2개 -> 튜플

def say():                           # 인수, 반환값 없는 함수
    print('넓이를 구해요')

def write(result, msg):              # 반환값 없는 함수
    print(msg, '넓이는', result, 'm2 입니다.')

say()
ret = calc_area(type=1, a=5, b=5)    # 튜플로 받기
area, msg = calc_area(2, 5, 5)       # 풀어서 받기
area2, _ = calc_area(3, 10, 7, 5)    # 안 쓸 값은 _ 로 버림

print(type(ret))
write(ret[0], ret[1])
write(area, msg)
write(area2, '사다리꼴')`,
  notes: [
   [1, "<b>def</b>로 함수를 만든다. c=None은 '안 넘기면 None으로 하겠다'는 <b>기본값 인수</b>."],
   [9, "(윗변+아랫변)×높이÷2 = <b>사다리꼴</b> 공식. (교재 원문엔 '평행사변형'으로 표기 — 수식 기준으로 바로잡음)"],
   [11, "값을 <b>두 개</b> 돌려주면 자동으로 튜플이 된다. 파이썬의 큰 편리함."],
   [20, "이름을 붙여 호출(type=1, a=5) — 순서를 안 외워도 되는 <b>키워드 인수</b>."],
   [21, "튜플을 area, msg 두 변수로 풀어서 받는다(언패킹)."],
   [22, "안 쓸 반환값은 <b>_</b> 라는 이름으로 버리는 게 파이썬 관례."]] },

'09.module.py': { star: false, ch: 'chap_03', code:
`# 원본 예제는 함수들을 header_area.py 파일로 저장한 뒤
#   import chap03.header_area as mod
#   from chap03.header_area import write
# 로 불러온다. 브라우저 실습실은 파일이 하나라 직접 정의해 재현한다.

def calc_area(type, a, b, c=None):
    if type == 1:
        return a * b, '사각형'

def say():
    print('넓이를 구해요')

def write(result, msg):
    print(msg, '넓이는', result, 'm2 입니다.')

say()
area, msg = calc_area(type=1, a=5, b=5)
write(area, msg)`,
  notes: [
   [2, "<b>모듈</b> = 함수를 모아 둔 .py 파일. import 파일명 as 별명 으로 불러온다."],
   [3, "from 파일 import 함수 — 특정 함수만 콕 집어 가져와 바로 이름으로 쓴다."],
   [4, "import cv2, import numpy as np 가 정확히 이 문법이다 — 남이 만든 모듈을 빌려 쓰는 것."]] },

'10.inner_fuction.py': { star: false, ch: 'chap_03', code:
`a = [1.5, 2, 3, 4, 5]            # 리스트 생성
b = map(float, a)                # 모든 원소를 실수로
c = divmod(5, 3)                 # 몫과 나머지를 한 번에

print('최댓값:', max(a), ' 최솟값:', min(a))
print('몫과 나머지:', c)
print('c의 자료형:', type(c), type(c[0]), type(c[1]))

print('2의 4제곱:', pow(2, 4))
print('절댓값:', abs(-4))`,
  notes: [
   [2, "<b>map(함수, 객체)</b> — 모든 원소에 같은 함수를 적용한다. list(b)로 감싸면 결과가 보인다."],
   [3, "<b>divmod(5,3)</b> — 몫 1과 나머지 2를 튜플 (1, 2)로 한 번에 돌려준다."],
   [5, "max/min — 가장 큰/작은 원소. 전부 파이썬이 <b>미리 만들어 둔 내장함수</b>다."],
   [9, "pow(2,4) = 2⁴ = 16. 연산자 2**4와 같다."]] },

'11.numpy.py': { star: false, ch: 'chap_03', code:
`import numpy as np

list1, list2 = [1, 2, 3], [4, 5.0, 6]
a, b = np.array(list1), np.array(list2)   # 리스트 -> ndarray

c = a + b        # 원소끼리 덧셈
d = a - b
e = a * b
f = a / b
g = a * 2        # 스칼라 곱
h = b + 2

print('a 자료형:', type(a), type(a[0]))
print('b 자료형:', type(b), type(b[0]))
print('c 자료형:', type(c), type(c[0]))
print(c, d, e)
print(f, g, h)`,
  notes: [
   [1, "as np — numpy를 np라는 짧은 별명으로. 전 세계 공통 관례다."],
   [4, "<b>np.array()</b> — 리스트를 ndarray(넘파이 배열)로 바꾼다. OpenCV 영상이 바로 이것."],
   [6, "반복문 없이 <b>모든 원소가 한 번에</b> 계산된다 — 넘파이의 힘."],
   [10, "배열 × 숫자 — 모든 원소에 2를 곱한다. '영상 전체 2배 밝게'가 이 한 줄."],
   [13, "a는 정수라 int32, b는 5.0 때문에 float64. 섞어 계산하면 <b>float64로 승격</b>된다."]] },

'12.numpy2.py': { star: true, ch: 'chap_03', code:
`# 라이브러리 > 패키지 > 모듈 > 함수

import numpy as np   # 넘파이 모듈 임포트

a = np.zeros((2, 5), int)      # 원소값 0 행렬 - 2행 5열
b = np.ones((3, 1), np.uint8)  # 원소값 1 행렬 - 3행 1열, 부호 없는 8비트
c = np.empty((1, 5), float)    # 값 없음 행렬 - 1행 5열
d = np.full(5, 15, np.float32) # 원소값 15, 1차원 행렬

print(type(a), type(a[0]), type(a[0][0]))
print(type(b), type(b[0]), type(b[0][0]))
print(type(c), type(c[0]), type(c[0][0]))
print(type(d), type(d[0]))
print('c 형태:', c.shape, 'd 형태:', d.shape)
print(a), print(b)
print(c), print(d)`,
  notes: [
   [5, "<b>zeros((2,5))</b> — 0으로 채운 2행 5열. (행, 열) 순서를 꼭 기억!"],
   [6, "<b>uint8</b> = 0~255 정수 = 8비트 양자화. 2장의 회색 창이 이 자료형이었다."],
   [7, "<b>empty</b>는 초기화를 안 해서 쓰레기값이 보인다 — 실행할 때마다 달라질 수 있음(정상!)."],
   [14, "<b>shape</b> 읽기 — (1,5)는 2차원 1행 5열, (5,)는 1차원 5개. 둘은 다르다!"],
   [3, "교재의 np.int·np.float는 최신 넘파이에서 삭제됨 — int, float, np.int32처럼 쓰는 게 맞다."]] },

'13.numpy3.py': { star: false, ch: 'chap_03', code:
`import numpy as np

np.random.seed(10)               # 시드 고정 - 매번 같은 난수
a = np.random.rand(2, 3)         # 0~1 균등분포
b = np.random.randn(3, 2)        # 표준정규분포
c = np.random.rand(6)
d = np.random.randint(1, 100, 6) # 1~99 정수 6개
c = np.reshape(c, (2, 3))        # 모양 바꾸기
d = d.reshape(2, -1)             # -1 = 자동 계산

print('a 형태:', a.shape); print(a)
print('d 형태:', d.shape); print(d)

print('다차원 객체 1차원 변환')
print('a =', a.flatten())
print('b =', np.ravel(b))
print('c =', np.reshape(c, (-1,)))
print('d =', d.reshape(-1,))`,
  notes: [
   [3, "<b>seed(10)</b> — 난수의 '시작점'을 고정. 실행할 때마다 같은 값이 나와 실험 재현이 가능하다."],
   [7, "randint(1, 100, 6) — 1 이상 <b>100 미만</b>의 정수 6개. 끝 미포함은 여기서도!"],
   [9, "reshape(2, <b>-1</b>) — '-1은 알아서 계산해'라는 뜻. 6개면 자동으로 (2,3)."],
   [15, "<b>flatten()</b> — 몇 차원이든 한 줄(1차원)로 펴 준다. ravel, reshape(-1,)도 같은 일."]] },

'02.opencvtest.py': { star: true, ch: 'chap_02', code:
`import numpy as np    # pip install numpy
import cv2            # pip install opencv-python

image = np.zeros((300, 400), np.uint8)
image.fill(255)       # 혹은 image[:] = 200  (0~255 정수)

cv2.imshow("Window title", image)
cv2.waitKey(0)
cv2.destroyAllWindows()`,
  notes: [
   [4, "300행 400열의 0(검정) 행렬 = 검은 영상 한 장. uint8이라 화소값은 0~255."],
   [5, "fill(255) — 모든 화소를 255(흰색)로. 수업 때 나는 255로 바꿔 실습했다."],
   [7, "imshow — 행렬을 창에 영상으로 표시. <b>브라우저에서는 실행 불가</b> → CH02 탭의 시뮬레이터로!"],
   [8, "waitKey(0) — 키를 누를 때까지 창을 유지. 이게 없으면 창이 바로 사라진다."]] },
  };

  var ta = document.getElementById('pyCode'), out = document.getElementById('pyOut'),
      run = document.getElementById('pyRun'), st = document.getElementById('pyStatus'),
      bar = document.getElementById('exBtns'), gut = document.getElementById('edGutter'),
      np_ = document.getElementById('npRows');
  var curName = '07.for.py';

  function renderGutter(){
    var n = ta.value.split('\n').length;
    var s = '';
    for (var i = 1; i <= n; i++) s += i + '\n';
    gut.textContent = s;
  }
  ta.addEventListener('input', renderGutter);
  ta.addEventListener('scroll', function(){ gut.scrollTop = ta.scrollTop; });

  // Tab = 4칸 들여쓰기, Shift+Tab = 내어쓰기, Enter = 이전 줄 들여쓰기 유지 (파이참처럼)
  ta.addEventListener('keydown', function(e){
    var s = ta.selectionStart, epos = ta.selectionEnd, v = ta.value;
    if (e.key === 'Tab'){
      e.preventDefault();
      if (e.shiftKey){
        var ls = v.lastIndexOf('\n', s - 1) + 1;
        if (v.substr(ls, 4) === '    '){
          ta.value = v.slice(0, ls) + v.slice(ls + 4);
          ta.selectionStart = ta.selectionEnd = Math.max(ls, s - 4);
        }
      } else {
        ta.value = v.slice(0, s) + '    ' + v.slice(epos);
        ta.selectionStart = ta.selectionEnd = s + 4;
      }
      renderGutter();
    } else if (e.key === 'Enter'){
      e.preventDefault();
      var ls2 = v.lastIndexOf('\n', s - 1) + 1;
      var indent = (v.slice(ls2).match(/^ */) || [''])[0];
      var line = v.slice(ls2, s);
      if (/:\s*$/.test(line)) indent += '    ';        // 콜론으로 끝나면 한 단계 더
      ta.value = v.slice(0, s) + '\n' + indent + v.slice(epos);
      ta.selectionStart = ta.selectionEnd = s + 1 + indent.length;
      renderGutter();
    }
  });

  function load(name){
    curName = name;
    ta.value = EX[name].code;
    out.textContent = '실행 결과가 여기에 표시됩니다.';
    renderGutter();
    var html = '';
    EX[name].notes.forEach(function(nrow){
      html += '<div class="np-row"><span class="ln">' + nrow[0] + '</span><span class="tx">' + nrow[1] + '</span></div>';
    });
    np_.innerHTML = html || '<div class="np-row"><span class="tx">해설 준비 중</span></div>';
    bar.querySelectorAll('button').forEach(function(x){ x.classList.toggle('on', x.dataset.name === name); });
  }

  Object.keys(EX).sort(function(a, b){
    var ca = EX[a].ch, cb = EX[b].ch;
    return ca === cb ? a.localeCompare(b) : ca.localeCompare(cb);
  }).forEach(function(name){
    var b = document.createElement('button');
    b.dataset.name = name;
    b.innerHTML = (EX[name].star ? '<span class="star">★</span> ' : '') + name;
    b.title = EX[name].star ? '수업 시간에 실제 실습한 파일' : '교재 예제 (수업에서는 건너뜀 — 여기서 공부!)';
    b.addEventListener('click', function(){ load(name); });
    bar.appendChild(b);
  });
  load('07.for.py');
  document.getElementById('pyReset').addEventListener('click', function(){ load(curName); });

  var pyodide = null, loading = false;
  function ensureEngine(){
    if (pyodide) return Promise.resolve(pyodide);
    if (loading) return loading;
    st.textContent = '파이썬 엔진 내려받는 중… (최초 1회, 20~30초)';
    run.disabled = true;
    loading = new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      s.onload = function(){
        loadPyodide({indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'}).then(function(py){
          st.textContent = 'numpy 불러오는 중…';
          return py.loadPackage('numpy').then(function(){ pyodide = py; resolve(py); });
        }).catch(reject);
      };
      s.onerror = function(){ reject(new Error('엔진 로드 실패 — 인터넷 연결을 확인해 주세요.')); };
      document.head.appendChild(s);
    });
    return loading;
  }
  run.addEventListener('click', function(){
    if (/^\s*import\s+cv2/m.test(ta.value)){
      out.textContent = 'ℹ cv2(OpenCV)는 브라우저 파이썬에서 지원되지 않습니다.\n' +
        '이 예제는 CH02 탭의 [회색 창 시뮬레이터]에서 값을 바꿔 가며 실습하세요.\n' +
        '(내 컴퓨터의 파이참에서는 그대로 실행됩니다)';
      return;
    }
    ensureEngine().then(function(py){
      st.textContent = '';
      run.disabled = false;
      var code = ta.value;
      try {
        py.runPython(
          'import sys, io\n_buf = io.StringIO()\nsys.stdout = _buf\nsys.stderr = _buf\n');
        py.runPython(code);
        var text = py.runPython('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__; _buf.getvalue()');
        out.textContent = text || '(출력 없음 — print()를 넣어 보세요)';
      } catch (e) {
        var msg = String(e.message || e);
        var lines = msg.split('\n').filter(function(l){ return l.trim(); });
        out.textContent = '⚠ 파이썬 에러\n' + lines.slice(-3).join('\n');
      }
    }).catch(function(e){
      run.disabled = false;
      st.textContent = '';
      out.textContent = '⚠ ' + e.message;
    });
  });
})();

