/* 4주차 상세 번역: en=원문, ko=번역, note=편집 설명. */
(() => {
  'use strict';
  const b = (en, ko, level = 0) => ({en, ko, level});
  const section = (items, heading = '', headingEn = '') => ({heading, headingEn, items});
  const cohesionTable = {
    headers: [b('Assessment item','사정 항목'),b('Disengaged','유리형'),b('Separated','분리형'),b('Connected','연결형'),b('Enmeshed','밀착형')],
    rows: [
      [b('Couple/Family Score','부부·가족 점수'),b('1–2','1~2'),b('3–4','3~4'),b('5–6','5~6'),b('7–8','7~8')],
      [b('EMOTIONAL BONDING','정서적 유대'),
        b('Extreme emotional separateness. Lack of family loyalty.','정서적으로 극도로 떨어져 있다. 가족에 대한 충성심이 부족하다.'),
        b('Emotional separateness. Limited closeness. Occasional family loyalty.','정서적으로 분리되어 있다. 친밀감은 제한적이다. 가족에 대한 충성심이 때때로 나타난다.'),
        b('Emotional closeness. Some separateness. Loyalty to family expected.','정서적으로 가깝다. 어느 정도의 분리도 존재한다. 가족에 대한 충성심이 기대된다.'),
        b('Extreme emotional closeness. Little separateness. Loyalty to family demanded.','정서적으로 극도로 가깝다. 분리되어 있는 정도가 매우 낮다. 가족에 대한 충성심이 요구된다.')],
      [b('FAMILY INVOLVEMENT','가족 참여·관여'),
        b('Very low involvement or interaction. Infrequent affective responsiveness.','참여나 상호작용이 매우 적다. 서로에게 정서적으로 반응하는 일이 드물다.'),
        b('Involvement acceptable. Personal distance preferred. Some affective responsiveness.','가족의 관여가 수용된다. 개인적 거리를 두는 것을 선호한다. 어느 정도의 정서적 반응이 있다.'),
        b('Involvement emphasized. Personal distance allowed. Affective interactions encouraged and preferred.','가족의 참여·관여를 강조한다. 개인적 거리를 두는 것도 허용한다. 정서적 상호작용을 장려하고 선호한다.'),
        b('Very high involvement. Fusion, over-dependency. High affective responsiveness and control.','가족의 관여가 매우 높다. 융합과 과도한 의존이 나타난다. 정서적으로 반응하고 통제하는 정도가 높다.')],
      [b('MARITAL RELATIONSHIP','부부관계'),
        b('High emotional separateness. Limited closeness.','정서적으로 분리된 정도가 높다. 친밀감은 제한적이다.'),
        b('Emotional separateness. Some closeness.','정서적으로 분리되어 있으나 어느 정도의 친밀감이 있다.'),
        b('Emotional closeness. Some separateness.','정서적으로 가깝고 어느 정도의 분리도 존재한다.'),
        b('Extreme closeness, fusion. Limited separateness.','친밀감이 극도로 높고 융합되어 있다. 분리는 제한적이다.')],
      [b('PARENT-CHILD RELATIONSHIP','부모·자녀 관계'),
        b('Rigid generational boundaries. Low p/c closeness.','세대 간 경계가 경직되어 있다. 부모·자녀 간 친밀감이 낮다.'),
        b('Clear generational boundaries. Some p/c closeness.','세대 간 경계가 명확하다. 부모·자녀 간 친밀감이 어느 정도 있다.'),
        b('Clear generational boundaries. High p/c closeness.','세대 간 경계가 명확하다. 부모·자녀 간 친밀감이 높다.'),
        b('Lack of generational boundaries. Excessive p/c closeness.','세대 간 경계가 부족하다. 부모·자녀 간 친밀감이 지나치게 높다.')],
      [b('INTERNAL BOUNDARIES','내부 경계'),
        b('Separateness dominates.','서로 떨어져 지내는 것이 지배적이다.'),
        b('More separateness than togetherness.','함께 지내는 것보다 따로 지내는 쪽이 더 많다.'),
        b('More togetherness than separateness.','따로 지내는 것보다 함께 지내는 쪽이 더 많다.'),
        b('Togetherness dominates.','함께 지내는 것이 지배적이다.')],
      [b('TIME (Physical & Emotional)','시간: 물리적·정서적'),
        b('Time apart maximized. Rarely time together.','따로 보내는 시간이 최대화되어 있다. 함께 보내는 시간은 거의 없다.'),
        b('Time alone important. Some time together.','혼자 보내는 시간이 중요하다. 함께 보내는 시간도 어느 정도 있다.'),
        b('Time together important. Time alone permitted.','함께 보내는 시간이 중요하다. 혼자 보내는 시간도 허용된다.'),
        b('Time together maximized. Little time alone permitted.','함께 보내는 시간이 최대화되어 있다. 혼자 보내는 시간은 거의 허용되지 않는다.')],
      [b('SPACE (Physical & Emotional)','공간: 물리적·정서적'),
        b('Separate space needed and preferred.','분리된 공간이 필요하며 이를 선호한다.'),
        b('Separate space preferred. Sharing of family space.','분리된 공간을 선호한다. 가족 공간을 공유하기도 한다.'),
        b('Sharing family space. Private space respected.','가족 공간을 공유한다. 개인 공간도 존중된다.'),
        b('Little private space permitted.','개인 공간이 거의 허용되지 않는다.')],
      [b('DECISION-MAKING','의사결정'),
        b('Individual decision-making. (Oppositional)','개별적으로 의사결정한다. 대립적인 양상을 보인다.'),
        b('Individual decision-making, but joint possible.','개별적으로 의사결정하지만 공동 의사결정도 가능하다.'),
        b('Joint decisions preferred.','공동 의사결정을 선호한다.'),
        b('Decisions subject to wishes of entire group.','의사결정이 집단 전체의 바람에 좌우된다.')],
      [b('EXTERNAL BOUNDARIES','외부 경계'),
        b('Mainly focused outside the family.','주로 가족 밖에 초점이 맞춰져 있다.'),
        b('More focused outside than inside family.','가족 안보다 가족 밖에 더 초점을 맞춘다.'),
        b('More focused inside than outside family.','가족 밖보다 가족 안에 더 초점을 맞춘다.'),
        b('Mainly focused inside the family.','주로 가족 안에 초점이 맞춰져 있다.')],
      [b('FRIENDS','친구'),
        b('Individual friends seen alone.','각자 자기 친구를 혼자 만난다.'),
        b('Individual friendships seldom shared with family.','개인의 친구 관계를 가족과 공유하는 일이 드물다.'),
        b('Individual friendships shared with family.','개인의 친구 관계를 가족과 공유한다.'),
        b('Family friends preferred. Limited individual friends.','가족이 함께 어울리는 친구를 선호한다. 개인적인 친구 관계는 제한적이다.')],
      [b('INTERESTS','관심사'),
        b('Disparate interests.','관심사가 서로 다르다.'),b('Separate interests.','각자 별도의 관심사가 있다.'),
        b('Some joint interests.','일부 관심사를 공유한다.'),b('Joint interests mandated.','관심사를 공유하도록 요구받는다.')],
      [b('ACTIVITIES','활동'),
        b('Mainly separate activities.','주로 각자 따로 활동한다.'),
        b('More separate than shared activities.','함께하는 활동보다 각자 하는 활동이 더 많다.'),
        b('More shared than individual activities.','각자 하는 활동보다 함께하는 활동이 더 많다.'),
        b('Separate activities seen as disloyal.','따로 하는 활동은 가족에 대한 불충으로 여겨진다.')],
      [b('Global Cohesion Rating (1-8)','전반적 응집성 평정: 1~8'),
        b('Very Low','매우 낮음'),b('Low to Moderate','낮음~중간'),b('Moderate to High','중간~높음'),b('Very High','매우 높음')]
    ]
  };
  const flexibilityTable = {
    headers:[b('Assessment item','사정 항목'),b('Rigid','경직형'),b('Structured','구조화형'),b('Flexible','유연형'),b('Chaotic','혼돈형')],
    rows:[
      [b('Couple/Family Score','부부·가족 점수'),b('1–2','1~2'),b('3–4','3~4'),b('5–6','5~6'),b('7–8','7~8')],
      [b('LEADERSHIP (Control)','리더십: 통제'),
        b('Authoritarian leadership. Parent(s) highly controlling.','권위주의적인 리더십이다. 부모의 통제 수준이 매우 높다.'),
        b('Primarily authoritarian but some egalitarian leadership.','주로 권위주의적이지만 어느 정도 평등주의적인 리더십도 나타난다.'),
        b('Egalitarian leadership with fluid changes.','평등주의적인 리더십이며 유동적으로 변화한다.'),
        b('Limited and/or erratic leadership. Parental control unsuccessful. Rebuffed.','리더십이 부족하거나 불규칙하다. 부모의 통제가 효과를 발휘하지 못하고 거부된다.')],
      [b('DISCIPLINE (For families only)','훈육: 가족에만 해당'),
        b('Autocratic "law & order." Strict, rigid consequences. Not lenient.','독재적인 ‘법과 질서’ 방식이다. 행동에 대한 후속 조치가 엄격하고 경직되어 있다. 관대하지 않다.'),
        b('Somewhat democratic. Predictable consequences. Seldom lenient.','어느 정도 민주적이다. 행동에 대한 후속 조치를 예측할 수 있다. 관대하게 대하는 경우는 드물다.'),
        b('Usually democratic. Negotiated consequences. Somewhat lenient.','대체로 민주적이다. 행동에 대한 후속 조치를 협의한다. 어느 정도 관대하다.'),
        b('Laissez-faire and ineffective. Inconsistent consequences. Very Lenient.','방임적이고 효과가 없다. 행동에 대한 후속 조치가 일관되지 않는다. 매우 관대하다.')],
      [b('NEGOTIATION','협상'),
        b('Limited negotiations. Decisions imposed by parents.','협상이 제한적이다. 부모가 결정을 강요한다.'),
        b('Structured negotiations. Decisions made by parents.','정해진 틀 안에서 협상한다. 결정은 부모가 내린다.'),
        b('Flexible negotiations. Agreed upon decisions.','유연하게 협상한다. 합의에 따라 결정한다.'),
        b('Endless negotiations. Impulsive decisions.','협상이 끝없이 이어진다. 충동적으로 결정한다.')],
      [b('ROLES','역할'),
        b('Rigid generational boundaries. Low p/c closeness.','세대 간 경계가 경직되어 있다. 부모·자녀 간 친밀감이 낮다.'),
        b('Clear generational boundaries. Some p/c closeness.','세대 간 경계가 명확하다. 부모·자녀 간 친밀감이 어느 정도 있다.'),
        b('Clear generational boundaries. High p/c closeness.','세대 간 경계가 명확하다. 부모·자녀 간 친밀감이 높다.'),
        b('Lack of generational boundaries. Excessive p/c closeness.','세대 간 경계가 부족하다. 부모·자녀 간 친밀감이 지나치게 높다.')],
      [b('RULES','규칙'),
        b('Unchanging rules. Rules strictly enforced.','규칙이 바뀌지 않는다. 규칙을 엄격하게 적용한다.'),
        b('Few rule changes. Rules firmly enforced.','규칙이 바뀌는 일이 적다. 규칙을 확고하게 적용한다.'),
        b('Some rule changes. Rules flexibly enforced.','규칙이 어느 정도 바뀐다. 규칙을 유연하게 적용한다.'),
        b('Frequent rule changes. Rules inconsistently enforced.','규칙이 자주 바뀐다. 규칙을 일관되지 않게 적용한다.')],
      [b('Global Flexibility Rating (1-8)','전반적 유연성 평정: 1~8'),
        b('Very Low','매우 낮음'),b('Low to Moderate','낮음~중간'),b('Moderate to High','중간~높음'),b('Very High','매우 높음')]
    ]
  };
  const grid = {
    headers:[b('Flexibility / Cohesion','유연성 / 응집성'),b('Disengaged','유리형'),b('Separated','분리형'),b('Connected','연결형'),b('Enmeshed','밀착형')],
    rows:[
      [b('Chaotic','혼돈형'),b('Chaotically disengaged','혼돈·유리형'),b('Chaotically separated','혼돈·분리형'),b('Chaotically connected','혼돈·연결형'),b('Chaotically enmeshed','혼돈·밀착형')],
      [b('Flexible','유연형'),b('Flexibly disengaged','유연·유리형'),b('Flexibly separated','유연·분리형'),b('Flexibly connected','유연·연결형'),b('Flexibly enmeshed','유연·밀착형')],
      [b('Structured','구조화형'),b('Structurally disengaged','구조화·유리형'),b('Structurally separated','구조화·분리형'),b('Structurally connected','구조화·연결형'),b('Structurally enmeshed','구조화·밀착형')],
      [b('Rigid','경직형'),b('Rigidly disengaged','경직·유리형'),b('Rigidly separated','경직·분리형'),b('Rigidly connected','경직·연결형'),b('Rigidly enmeshed','경직·밀착형')]
    ]
  };
  const diagramSection = () => section([
    b('Cohesion','가로축: 응집성'),b('Flexibility','세로축: 유연성'),
    b('Figure 1. The Circumplex Model (after Olson, 2000)','그림 1. 순환모형(Olson, 2000을 바탕으로 함)')
  ],'도식의 축과 출처');
  const pages = [
    {n:1,title:'가족기능을 어떻게 사정하고 평가할 것인가',titleEn:'How to Assess and Evaluate Family Functioning',sections:[]},
    {n:2,title:'David Olson의 부부·가족체계 순환모형',titleEn:'(David Olson’s) Circumplex model of marital and family systems',sections:[section([
      b('Professor, Department of Family Sciences, University of Minnesota, USA','미국 미네소타대학교 가족과학과 교수.'),
      b('Key dimensions that are critical for understanding and treating marital and family systems','부부 및 가족체계를 이해하고 치료하는 데 중요한 핵심 차원은 다음과 같다.'),
      b('Cohesion/Connectedness/Togetherness','응집성 / 연결성 / 함께함',1),
      b('Flexibility (Adaptability)','유연성(적응성)',1),
      b('Used as a relational/family diagnosis based on research in marital and family dynamics','부부 및 가족의 역동에 관한 연구에 근거하여 관계·가족을 진단하는 데 활용된다.')
    ])],note:'교수 소속은 강의자료에 적힌 소개를 옮긴 것으로, 현재 재직 여부를 별도로 확인한 설명은 아닙니다.'},
    {n:3,title:'응집성',titleEn:'Cohesion',sections:[section([
      b('The emotional bonding that members have with one another and the degree of individual autonomy that a person experiences in the family system','응집성이란 가족 구성원들이 서로 맺고 있는 정서적 유대와, 가족체계 안에서 개인이 경험하는 자율성의 정도를 뜻한다.'),
      b('“I” vs. “we”: Importance of maintaining one’s own individuality and intimacy as a unit/family.','‘나’와 ‘우리’: 자기 자신의 개별성을 유지하는 것과 하나의 단위인 가족으로서 친밀감을 유지하는 것이 모두 중요하다.'),
      b('Variables that are used to assess family cohesion','가족의 응집성을 사정하는 데 사용하는 변수는 다음과 같다.'),
      b('Boundary','경계',1),b('Independence, interdependence, or dependence','독립, 상호의존 또는 의존',1),
      b('The degree of emotional bonding','정서적 유대의 정도',2),
      b('E.g.) Do they enjoy a family-level activity together and yet each one has own hobbies that he/she enjoys?','예: 가족이 함께하는 활동을 즐기면서도, 각 구성원이 자신만의 취미를 가지고 즐기는가?',1)
    ])]},
    {n:4,title:'응집성 사정표: 네 유형의 세부 비교',titleEn:'Cohesion assessment table',originalHeading:'',sections:[],table:cohesionTable,
      note:'원문 이미지 표의 12개 비교 항목과 점수·전반적 평정을 모두 번역했습니다. p/c는 parent-child(부모·자녀)를 뜻합니다. 비어 있는 기록용 칸은 생략하되, 내용이 있는 모든 셀은 보존했습니다. ‘유리형’은 정서적으로 지나치게 떨어진 상태이며, 중간 수준인 ‘분리형’과 구별됩니다. 제목은 찾기 쉽게 붙인 편집 제목입니다.'},
    {n:5,title:'유연성(적응성)',titleEn:'Flexibility (Adaptability)',sections:[section([
      b('The ability of a marital/family system to change its power structure, roles, and relationship rules in response to situational and developmental stress','유연성이란 부부·가족체계가 상황적 스트레스와 발달적 스트레스에 대응하여 권력구조, 역할, 관계의 규칙을 바꿀 수 있는 능력이다.'),
      b('Range: from rigid to chaotic','범위: 경직된 상태에서 혼돈된 상태까지',1),
      b('Variables that are used to assess family flexibility','가족의 유연성을 사정하는 데 사용하는 변수는 다음과 같다.'),
      b('Roles, Rules, Room for negotiation, Decision-making','역할, 규칙, 협상의 여지, 의사결정',1)
    ])]},
    {n:6,title:'유연성 사정표: 네 유형의 세부 비교',titleEn:'Flexibility',sections:[],table:flexibilityTable,
      note:'원문 표의 5개 비교 항목과 점수·전반적 평정을 모두 번역했습니다. 원문은 ‘역할(ROLES)’ 행에 세대 간 경계와 부모·자녀 친밀감을 제시하고 있어, 다른 내용으로 교체하지 않고 그대로 옮겼습니다. consequences는 훈육 맥락에서 행동에 뒤따르는 결과·조치를 뜻하므로 ‘행동에 대한 후속 조치’로 번역했습니다. p/c는 부모·자녀를 뜻합니다.'},
    {n:7,title:'순환모형: 응집성과 유연성의 16가지 조합',titleEn:'The Circumplex Model',originalHeading:'',sections:[diagramSection()],table:grid,
      note:'그림 속 16개 유형명을 모두 옮기고, 읽기 쉽도록 행·열 제목을 덧붙였습니다. 그림의 왼쪽에서 오른쪽으로 응집성이 높아지며, 아래에서 위로 유연성이 높아집니다. 가운데 흰색 네 칸은 두 차원 모두 중간 수준인 영역입니다. 색과 원래 배치는 ‘원문 대조’에서 확인할 수 있습니다.'}
  ];
  pages.push(
    {n:8,title:'질문 1. 배우자들이 두 차원의 균형에 관해 서로 다른 선호를 가진다면?',titleEn:'Q1: What if spouses differ in their preferences regarding the balance on these dimensions?',sections:[section([
      b('These levels can be altered by a couple to achieve a level that is acceptable to each individual.','부부는 각자가 받아들일 수 있는 수준에 이르도록 이러한 차원의 수준을 조정할 수 있다.')
    ])]},
    {n:9,title:'응집성',titleEn:'Cohesion',sections:[section([
      b('Too much togetherness (e.g., people “in love”) can lead to relationship fusion or enmeshment.','지나치게 함께하려는 성향(예: ‘사랑에 빠진’ 사람들)은 관계의 융합이나 밀착으로 이어질 수 있다.'),
      b('This may happen in all relationships, including couple, marital, and parent-child.','이러한 현상은 연인관계, 부부관계, 부모·자녀 관계를 비롯한 모든 관계에서 나타날 수 있다.'),
      b('In general, family researchers consider “balanced” couple/family to be more functional as opposed to disengaged or enmeshed couple/family.','일반적으로 가족 연구자들은 유리되거나 밀착된 부부·가족보다 ‘균형 잡힌’ 부부·가족이 더 기능적이라고 본다.')
    ])]},
    {n:10,title:'질문 2. 혼돈·밀착형인 신혼부부는 문제가 있는가?',titleEn:'Q2: Is chaotically enmeshed newly wed couple problematic?',sections:[section([
      b('Being extreme on these dimensions can be acceptable during certain stages of the family life cycle','가족 생애주기의 특정 단계에서는 이러한 차원에서 극단적인 수준을 보이는 것이 받아들여질 수 있다.'),
      b('PROBLEMATIC when families remain stuck at the extremes.','문제가 되는 것은 가족이 극단적인 수준에 계속 고착되어 있을 때이다.')
    ]),diagramSection()],table:grid,note:'원문에 반복 제시된 순환모형도 이 페이지에서 다시 번역했습니다. ‘일시적으로 극단에 위치하는 것’과 ‘그 위치에 고착되는 것’을 구분하는 질문입니다.'},
    {n:11,title:'질문 3. 가족이 스트레스나 위기를 경험하면 어떤 일이 일어날 수 있는가?',titleEn:'Q3: What might happen when a family experiences stress or crisis?',sections:[section([
      b('A balanced family may become more extreme on flexibility (towards more chaotic system) and on cohesion (toward more enmeshed system)','균형 잡힌 가족도 유연성 차원에서는 더 혼돈된 체계 쪽으로, 응집성 차원에서는 더 밀착된 체계 쪽으로 이동하여 더 극단적인 수준을 보일 수 있다.'),
      b('Once the stress has subsided, they usually return to a similar type of system prior to the stressful/crisis event [homeostasis]','스트레스가 가라앉으면, 대개 스트레스나 위기 사건을 겪기 이전과 비슷한 유형의 체계로 돌아간다. [항상성]'),
      b('Unbalanced families lack the resources needed to change their family during stress, thus have more difficulty adapting to a crisis','불균형한 가족은 스트레스를 겪는 동안 가족을 변화시키는 데 필요한 자원이 부족하므로, 위기에 적응하는 데 더 큰 어려움을 겪는다.')
    ])]},
    {n:12,title:'질문 3-1. 최근 이민한 가족이 이주한 나라에서의 첫해 동안 매우 밀착된 모습을 보인다면?',titleEn:'Q3-1: What about a recently arrived immigrant family that is highly enmeshed during the first year in the host country?',sections:[section([
      b('Being extreme on cohesion and flexibility might be appropriate:','응집성과 유연성에서 극단적인 수준을 보이는 것이 적절할 수도 있다.'),
      b('when a family is under stress or going through a transition','가족이 스트레스를 받거나 전환기를 거치고 있을 때가 이에 해당한다.',1),
      b('As children get older and become more acculturated to the host culture, parents may need to re-adjust family rules and expectations','자녀가 나이가 들고 이주한 나라의 문화에 더 적응하게 되면, 부모는 가족의 규칙과 기대를 다시 조정할 필요가 있을 수 있다.')
    ]),diagramSection()],table:grid,note:'이민 초기의 상황과 자녀가 성장한 이후의 상황을 구분하는 질문입니다. 원문에 반복 제시된 그림의 16개 유형도 모두 번역했습니다.'},
    {n:13,title:'질문 4. 부부와 가족은 생애주기 내내 같은 수준의 응집성과 유연성을 유지하는가?',titleEn:'Q4: Do couples and families maintain their levels of cohesion and flexibility throughout the family lifecycles?',sections:[section([
      b('Couples/families will modify their levels of cohesion and/or flexibility to deal effectively with situational stress and developmental changes across the family life cycle','부부와 가족은 가족 생애주기 전반에 걸친 상황적 스트레스와 발달적 변화에 효과적으로 대처하기 위해, 응집성이나 유연성의 수준을, 또는 두 수준 모두를 조정한다.')
    ])]},
    {n:14,title:'영화 사례: 위대한 산티니',titleEn:'Great Santini',sections:[
      section([
        b('What is the degree of closeness among family members?','가족 구성원들 사이의 친밀감은 어느 정도인가?'),
        b('Who is in charge? How do you know?','누가 주도권을 쥐고 있는가? 무엇을 보고 그렇게 판단할 수 있는가?'),
        b('How do family members demonstrate loyalty?','가족 구성원들은 충성심을 어떻게 드러내는가?')
      ],'장면 1','Scene 1'),
      section([
        b('Is any negotiation allowed?','협상이 조금이라도 허용되는가?'),
        b('Is respect and regard for one another demonstrated?','서로를 존중하고 배려하는 모습이 나타나는가?'),
        b('Rules & roles?','규칙과 역할은 어떠한가?')
      ],'장면 2','Scene 2'),
      section([b('What happened when a rule was violated?','규칙을 어겼을 때 어떤 일이 일어났는가?')],'장면 3','Scene 3'),
      section([
        b('The bravest thing he would ever do was let his family love him.','그가 평생 하게 될 가장 용감한 일은 가족이 자신을 사랑하도록 받아들이는 것이었다.'),
        b('THE GREAT SANTINI','위대한 산티니'),
        b('BCP Presents THE GREAT SANTINI. Starring ROBERT DUVALL · BLYTHE DANNER. Also Starring MICHAEL O’KEEFE · STAN SHAW.','BCP 제공 「위대한 산티니」. 주연: 로버트 듀발, 블라이스 대너. 함께 출연: 마이클 오키프, 스탠 쇼.'),
        b('Written for the Screen and Directed by LEWIS JOHN CARLINO. Based on the novel by PAT CONROY. Produced by CHARLES A. PRATT. Music by ELMER BERNSTEIN.','각색·감독: 루이스 존 칼리노. 원작 소설: 팻 콘로이. 제작: 찰스 A. 프랫. 음악: 엘머 번스타인.'),
        b('PG PARENTAL GUIDANCE SUGGESTED. SOME MATERIAL MAY NOT BE SUITABLE FOR CHILDREN.','PG: 부모의 관람 지도가 권장됨. 일부 내용은 어린이에게 적합하지 않을 수 있음.'),
        b('Prints by Technicolor. An ORION PICTURES Release. Thru WARNER BROS. A Warner Communications Company.','테크니컬러 인화. 오리온 픽처스 개봉작. 워너 커뮤니케이션스 계열 워너 브라더스를 통해 배급.')
      ],'포스터 속 문구·크레디트')
    ],figure:{src:'assets/slides/week-04/p14.webp',alt:'위대한 산티니 포스터와 장면별 관찰 질문을 담은 원문 14쪽',caption:'원문 14쪽. 영화의 실제 장면이나 공식 정답은 PDF에 포함되어 있지 않습니다.'},
      note:'장면별 질문은 원문 순서를 유지했습니다. 포스터의 홍보 문구·판독 가능한 크레디트는 강의 질문과 구분했습니다. 하단의 매우 작은 인쇄 식별번호·저작권 세부 표시는 원문 이미지에 보존했습니다. 장면 내용을 추정해 답을 만들어 넣지는 않았습니다.'},
    {n:15,title:'그렇다면 이 가족은 순환지도에서 어디에 위치하는가?',titleEn:'So, where is this family located on the circumplex map?',sections:[diagramSection()],table:grid,
      note:'앞선 「위대한 산티니」의 가족을 관찰한 뒤 답하는 질문입니다. 원문에는 특정 위치를 가리키는 표시나 정답이 없습니다.'},
    {n:16,title:'영화 사례: 보통 사람들',titleEn:'Ordinary People',originalHeading:'',sections:[section([
      b('ORDINARY PEOPLE','보통 사람들'),
      b('DONALD SUTHERLAND · MARY TYLER MOORE · TIMOTHY HUTTON','도널드 서덜랜드 · 메리 타일러 무어 · 티머시 허튼'),
      b('DIRECTED BY ROBERT REDFORD','감독: 로버트 레드퍼드')
    ],'포스터 속 제목·인명')],figure:{src:'assets/slides/week-04/p16.webp',alt:'영화 보통 사람들의 포스터와 세 인물이 함께 있는 흑백 사진',caption:'원문 16쪽: 「보통 사람들」 포스터와 장면 사진.'},
      note:'이 페이지는 포스터와 사진으로 이루어져 있으며 별도의 강의 설명이나 질문은 없습니다. 이미지 속 제목·출연자·감독 표기를 옮겼고, 사진에 없는 심리 해석이나 사건 설명은 덧붙이지 않았습니다.'},
    {n:17,title:'보통 사람들 (1)',titleEn:'Ordinary People (1)',sections:[section([
      b('Does this family share their feelings with one another?','이 가족은 서로 자신의 감정을 공유하는가?'),
      b('How is emotional closeness with one another in this family?','이 가족에서 구성원들 사이의 정서적 친밀감은 어떠한가?'),
      b('How is physical distance maintained between family members?','가족 구성원들 사이의 물리적 거리는 어떻게 유지되는가?'),
      b('What are some implicit rules of interaction and communication in this family?','이 가족의 상호작용과 의사소통에는 어떤 암묵적인 규칙들이 있는가?')
    ])]},
    {n:18,title:'보통 사람들 (2)',titleEn:'Ordinary People (2)',sections:[section([
      b('Do you notice any changes in this family? In some members at least?','이 가족에서 어떤 변화가 보이는가? 적어도 일부 구성원에게는 변화가 보이는가?'),
      b('Have any family member made attempts to improve relationships?','관계를 개선하려고 시도한 가족 구성원이 있는가?'),
      b('Which family members have changed his/her communication style?','어떤 가족 구성원이 자신의 의사소통 방식을 바꾸었는가?'),
      b('How do you think each member of this family changed or not changed?','이 가족의 각 구성원은 어떻게 변했거나 변하지 않았다고 생각하는가?')
    ])]},
    {n:19,title:'그렇다면 자렛 가족은 순환지도에서 어디에 위치하는가?',titleEn:'So, where is the Jarret family located on the circumplex map?',sections:[diagramSection()],table:grid,
      note:'원문은 가족 이름을 Jarret로 표기합니다. 이 질문에는 특정 위치를 표시한 정답이 없으므로, 영화에서 관찰한 근거 없이 유형을 단정하지 않았습니다.'}
  );
for (const p of pages) {
    p.slide = 'assets/slides/week-04/p' + String(p.n).padStart(2,'0') + '.webp';
    const lines = [p.originalHeading === undefined ? p.titleEn : p.originalHeading];
    for (const s of p.sections) {
      if(s.headingEn) lines.push(s.headingEn);
      for (const item of s.items) lines.push(item.en);
    }
    if (p.table) {
      lines.push(p.table.headers.map(h=>h.en).join(' | '));
      for(const row of p.table.rows) lines.push(row.map(c=>c.en).join(' | '));
    }
    p.rawEn = lines.filter(Boolean).join('\n');
  }
  const material = {
  "id": "assessing-family-functioning",
  "type": "lecture",
  "code": "04",
  "week": 4,
  "title": "가족기능의 사정과 평가",
  "titleEn": "How to Assess and Evaluate Family Functioning",
  "description": "19쪽 강의 본문·응집성과 유연성 비교표의 모든 항목·순환모형 16유형·영화 사례 질문을 원문과 대조하여 번역한 자료.",
  "sourceName": "04. Assessing family functioning_eTL(1).pdf",
  "sourcePath": "assets/source/assessing-family-functioning.pdf",
  "pageCount": 19,
  "added": "2026-09-22",
  "tags": [
    "가족기능",
    "순환모형",
    "응집성",
    "유연성",
    "가족 사정"
  ],
  "lead": "건강한 가족은 늘 같은 자리에 머무는 가족이 아니라, 상황에 맞게 가까움과 변화의 정도를 조절하는 가족이다.",
  "leadPages": [
    2,
    7,
    11,
    13
  ],
  "sectionsIndex": [
    {
      "label": "순환모형과 응집성",
      "start": 1,
      "end": 4
    },
    {
      "label": "유연성과 순환지도",
      "start": 5,
      "end": 8
    },
    {
      "label": "균형·극단과 상황적 변화",
      "start": 9,
      "end": 13
    },
    {
      "label": "영화 사례 적용",
      "start": 14,
      "end": 19
    }
  ],
  "summary": [
    {
      "title": "가족기능을 보는 두 축",
      "body": "Olson의 순환모형은 부부·가족체계를 이해하고 사정하는 핵심 차원으로 응집성과 유연성을 제시한다. 응집성은 정서적 유대와 개인의 자율성 사이의 관계를, 유연성은 스트레스에 대응해 권력구조·역할·규칙을 바꾸는 능력을 뜻한다.",
      "pages": [
        2,
        3,
        5
      ]
    },
    {
      "title": "응집성: 나와 우리의 균형",
      "body": "응집성은 단순히 가까울수록 좋은 특성이 아니다. 가족 공동활동을 즐기면서도 각자의 취미와 개별성을 유지할 수 있는지가 중요하며, 지나친 밀착은 융합 또는 얽힘으로 이어질 수 있다.",
      "pages": [
        3,
        4,
        9
      ]
    },
    {
      "title": "유연성: 변화에 대응하는 능력",
      "body": "유연성은 경직된 상태에서 혼돈된 상태까지의 연속선으로 나타난다. 리더십, 훈육, 협상, 역할, 규칙과 의사결정 방식이 주요 사정 지표이며, 상황과 발달적 스트레스에 맞추어 이를 조정할 수 있어야 한다.",
      "pages": [
        5,
        6
      ]
    },
    {
      "title": "순환모형의 핵심",
      "body": "응집성과 유연성을 교차하면 16가지 가족 유형이 구성된다. 일반적으로 두 차원이 중간 수준인 균형형이 더 기능적이지만, 특정 생애주기나 위기에서는 극단적 위치가 일시적으로 적절할 수도 있다.",
      "pages": [
        7,
        9,
        10
      ]
    },
    {
      "title": "위기 이후 되돌아오는 힘",
      "body": "균형 잡힌 가족도 스트레스 상황에서는 더 혼돈되고 밀착된 방향으로 이동할 수 있다. 스트레스가 줄면 이전과 비슷한 체계로 돌아가는 항상성이 나타나며, 불균형 가족은 변화를 위한 자원이 부족해 위기에 적응하기 어렵다.",
      "pages": [
        11
      ]
    },
    {
      "title": "생애주기와 문화적 전환",
      "body": "가족의 적절한 위치는 고정되지 않는다. 이민 초기에는 높은 밀착성이 도움이 될 수 있지만, 자녀의 성장과 문화적 적응에 따라 부모는 규칙과 기대를 다시 조정해야 한다. 가족은 생애주기 전반의 상황적·발달적 변화에 맞추어 응집성과 유연성을 수정한다.",
      "pages": [
        12,
        13
      ]
    },
    {
      "title": "사례 사정의 질문",
      "body": "영화 사례에서는 가족의 친밀감, 권력, 충성심, 협상 가능성, 상호 존중, 규칙과 역할, 감정 공유, 물리적 거리, 의사소통 방식과 변화 시도를 관찰하고 순환지도 위의 위치를 판단한다.",
      "pages": [
        14,
        15,
        16,
        17,
        18,
        19
      ]
    }
  ],
  "quiz": [
    {
      "id": "w4-q01",
      "kind": "객관식",
      "question": "Olson의 순환모형에서 가족기능을 이해하는 두 핵심 차원은?",
      "options": [
        "친밀감과 의사소통",
        "응집성과 유연성",
        "권력과 갈등",
        "역할과 세대"
      ],
      "correct": 1,
      "explanation": "강의자료는 핵심 차원으로 응집성(연결성·유대감)과 유연성(적응성)을 제시한다.",
      "pages": [
        2
      ]
    },
    {
      "id": "w4-q02",
      "kind": "객관식",
      "question": "응집성에 대한 설명으로 가장 적절한 것은?",
      "options": [
        "함께 보내는 시간만을 뜻한다.",
        "가까울수록 언제나 기능적이다.",
        "정서적 유대와 개인 자율성의 정도를 함께 본다.",
        "가족의 경제적 의존도를 뜻한다."
      ],
      "correct": 2,
      "explanation": "응집성은 구성원의 정서적 유대뿐 아니라 가족체계 안에서 경험하는 개인 자율성의 정도를 포함한다.",
      "pages": [
        3
      ]
    },
    {
      "id": "w4-q03",
      "kind": "객관식",
      "question": "유연성을 사정하는 변수에 해당하지 않는 것은?",
      "options": [
        "역할",
        "규칙",
        "협상의 여지",
        "가족 외 친구의 수"
      ],
      "correct": 3,
      "explanation": "자료는 역할, 규칙, 협상의 여지, 의사결정을 유연성의 사정 변수로 든다.",
      "pages": [
        5
      ]
    },
    {
      "id": "w4-q04",
      "kind": "객관식",
      "question": "순환모형의 16가지 가족 유형은 무엇을 교차하여 구성하는가?",
      "options": [
        "응집성 4수준과 유연성 4수준",
        "가족주기 4단계와 위기 4유형",
        "역할 4유형과 규칙 4유형",
        "부모 4유형과 자녀 4유형"
      ],
      "correct": 0,
      "explanation": "응집성과 유연성 각각의 네 수준을 교차해 4×4의 16가지 유형을 만든다.",
      "pages": [
        7
      ]
    },
    {
      "id": "w4-q05",
      "kind": "객관식",
      "question": "극단적인 가족 유형이 반드시 즉시 문제라고 볼 수 없는 이유는?",
      "options": [
        "극단적 유형이 항상 더 기능적이어서",
        "사정도구가 가족 차이를 측정하지 못해서",
        "특정 생애주기나 전환 상황에서는 일시적으로 적절할 수 있어서",
        "가족기능은 시간이 지나도 변하지 않아서"
      ],
      "correct": 2,
      "explanation": "자료는 특정 생애주기, 스트레스 또는 전환 상황에서 극단적 수준이 일시적으로 수용될 수 있다고 설명한다. 극단에 고착될 때 문제가 된다.",
      "pages": [
        10,
        12
      ]
    },
    {
      "id": "w4-q06",
      "kind": "객관식",
      "question": "균형 잡힌 가족이 위기 후 이전과 비슷한 체계로 돌아가는 현상은?",
      "options": [
        "삼각관계",
        "항상성",
        "투사",
        "개별화"
      ],
      "correct": 1,
      "explanation": "스트레스가 가라앉은 뒤 위기 이전과 비슷한 체계로 되돌아가는 경향을 항상성(homeostasis)이라고 한다.",
      "pages": [
        11
      ]
    },
    {
      "id": "w4-q07",
      "kind": "객관식",
      "question": "이민가족 사례가 보여 주는 핵심으로 가장 적절한 것은?",
      "options": [
        "높은 밀착성은 문화와 관계없이 늘 해롭다.",
        "가족규칙은 이민 직후 정한 뒤 유지해야 한다.",
        "상황에 적절했던 가족형태도 자녀의 성장과 적응에 따라 재조정해야 한다.",
        "자녀가 문화에 적응할수록 가족의 응집성을 최대화해야 한다."
      ],
      "correct": 2,
      "explanation": "이민 초기의 밀착은 전환에 도움이 될 수 있지만, 자녀의 성장과 문화 적응에 맞추어 규칙과 기대를 다시 조정해야 한다.",
      "pages": [
        12,
        13
      ]
    },
    {
      "id": "w4-q08",
      "kind": "객관식",
      "question": "영화 사례를 순환모형으로 사정할 때 가장 직접적으로 살펴볼 조합은?",
      "options": [
        "친밀감·권력·협상·규칙과 역할",
        "소득·주거면적·학력·직업",
        "성격유형·지능·취미·외모",
        "질병력·식습관·수면·운동"
      ],
      "correct": 0,
      "explanation": "사례 질문은 친밀감과 거리, 주도권, 협상, 존중, 규칙과 역할, 의사소통을 중심으로 구성된다.",
      "pages": [
        14,
        17,
        18
      ]
    }
  ],
  "revised": "2026-09-22",
  "translationVersion": "detailed-v2",
  "glossary": [
    {
      "en": "Cohesion",
      "ko": "응집성",
      "definition": "가족 구성원 간의 정서적 유대와 가족체계에서 개인이 경험하는 자율성의 정도.",
      "pages": [
        3,
        4
      ]
    },
    {
      "en": "Flexibility / Adaptability",
      "ko": "유연성 / 적응성",
      "definition": "상황적·발달적 스트레스에 대응해 권력구조, 역할, 관계 규칙을 바꾸는 능력.",
      "pages": [
        5,
        6
      ]
    },
    {
      "en": "Disengaged / Separated",
      "ko": "유리형 / 분리형",
      "definition": "유리형은 정서적 유대가 매우 낮고 가족 바깥에 주로 초점을 맞춘다. 분리형은 혼자 지내는 시간을 중시하면서도 일부 친밀감과 가족활동을 유지한다. 두 유형은 서로 다르다.",
      "pages": [
        4
      ]
    },
    {
      "en": "Connected / Enmeshed",
      "ko": "연결형 / 밀착형",
      "definition": "연결형은 함께하는 시간을 중시하면서 개인 공간도 존중한다. 밀착형은 극도의 친밀감과 함께함을 요구하고 개인의 시간·공간을 거의 허용하지 않는다.",
      "pages": [
        4
      ]
    },
    {
      "en": "Rigid / Structured",
      "ko": "경직형 / 구조화형",
      "definition": "경직형은 통제가 강하고 규칙이 거의 바뀌지 않는다. 구조화형은 정해진 틀 안의 협상과 예측 가능한 훈육을 특징으로 한다.",
      "pages": [
        6
      ]
    },
    {
      "en": "Flexible / Chaotic",
      "ko": "유연형 / 혼돈형",
      "definition": "유연형은 합의와 유연한 규칙 적용을 보인다. 혼돈형은 불규칙한 리더십, 끝없는 협상, 충동적 결정, 일관되지 않은 규칙 적용을 보인다. 유연성이 높다고 언제나 더 기능적인 것은 아니다.",
      "pages": [
        6,
        7
      ]
    },
    {
      "en": "Homeostasis",
      "ko": "항상성",
      "definition": "이 자료에서는 스트레스가 가라앉은 뒤 가족이 위기 이전과 비슷한 체계로 돌아가는 현상을 가리킨다.",
      "pages": [
        11
      ]
    },
    {
      "en": "Acculturation",
      "ko": "문화 적응",
      "definition": "이 자료에서는 이민가족의 자녀가 성장하며 이주한 나라의 문화에 더 적응해 가는 과정을 가리킨다.",
      "pages": [
        12
      ]
    }
  ],
  "sourceNotes": [
    "제공된 19쪽 PDF의 강의 본문, 질문, 예시, 표의 모든 내용 셀과 도식의 16개 유형명을 원문 순서에 맞추어 번역했습니다. 요약은 별도의 ‘내용 요약’ 탭에 두었습니다.",
    "4쪽 응집성 표는 12개 비교 항목과 점수·전반적 평정을, 6쪽 유연성 표는 5개 비교 항목과 점수·전반적 평정을 모두 포함합니다. 이미지 속 영어 문구도 직접 판독하여 텍스트로 보충했습니다.",
    "영어 텍스트는 읽기 쉽도록 줄바꿈·띄어쓰기를 정리했습니다. 표와 도식은 항목별 순서로 재구성했으며, 원래 배치·색·기호는 원문 이미지와 PDF를 기준으로 확인할 수 있습니다.",
    "설명을 위해 붙인 페이지 제목, 용어 구별, 원문상 특이사항은 ‘편집 안내’로 구분했습니다. 특히 6쪽 ROLES 행의 내용을 일반 이론에 맞추어 임의로 고치지 않았습니다.",
    "영화 포스터의 제목·주요 홍보 문구·판독 가능한 크레디트를 옮겼습니다. 14쪽 포스터 하단의 매우 작은 인쇄 식별번호·저작권 세부 표시는 원본 이미지에 보존했습니다.",
    "요약·용어 해설·퀴즈는 학습 보조이며 교수자의 공식 답안이나 시험 문항이 아닙니다. PDF에 없는 영화 장면의 내용, 가족 유형의 정답, 제출 기한·분량·방식은 만들어 넣지 않았습니다."
  ]
};
  material.pages = pages;
  const requirements = [{label:'제출 조건',value:'원문에 제출 기한·분량·방식이 명시되지 않음'}];
  material.activities = [
    {kind:'discussion',page:14,title:'위대한 산티니: 장면별 관찰',interpretation:'장면 1~3의 질문을 순서대로 옮겼습니다. 각 장면을 본 뒤 관찰한 사실을 근거로 답하는 수업 활동입니다.',
      questions:pages[13].sections.slice(0,3).flatMap(s=>s.items.map(q=>({ko:s.heading+' — '+q.ko,en:s.headingEn+' — '+q.en}))),requirements},
    {kind:'discussion',page:15,title:'위대한 산티니: 순환지도상의 위치',interpretation:'앞선 장면에서 관찰한 응집성과 유연성을 바탕으로 가족의 위치를 판단하는 질문입니다.',
      questions:[b(pages[14].titleEn,pages[14].title)],requirements},
    {kind:'discussion',page:17,title:'보통 사람들: 관계와 변화 관찰',interpretation:'17쪽의 네 질문과 18쪽의 네 질문을 모두 포함합니다. 첫 묶음은 감정·거리·규칙을, 다음 묶음은 관계 개선과 변화를 묻습니다.',
      questions:[...pages[16].sections[0].items,...pages[17].sections[0].items],requirements},
    {kind:'discussion',page:19,title:'보통 사람들: 자렛 가족의 위치',interpretation:'관찰 내용을 종합해 자렛 가족을 순환지도에 배치하는 질문입니다. 원문에는 정답 위치가 없습니다.',
      questions:[b(pages[18].titleEn,pages[18].title)],requirements}
  ];
  window.STUDY_MATERIALS = window.STUDY_MATERIALS || {};
  window.STUDY_MATERIALS[material.id] = material;
})();
