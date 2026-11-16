/* Content and editorial data for Journey & Archive. Loaded before script.js. */
window.JOURNEY_ARCHIVE_DATA = {
  countries: [
    { id: "france", name: "France", localName: "프랑스", region: "EUROPE", coordinates: [46.6, 2.4], zoom: 6, count: 3 },
    { id: "vietnam", name: "Vietnam", localName: "베트남", region: "SOUTHEAST ASIA", coordinates: [16.2, 107.8], zoom: 5.5, count: 3 },
    { id: "japan", name: "Japan", localName: "일본", region: "EAST ASIA", coordinates: [36.2, 138.2], zoom: 5.5, count: 2 },
    { id: "italy", name: "Italy", localName: "이탈리아", region: "EUROPE", coordinates: [42.8, 12.5], zoom: 6, count: 2 }
  ],
  routes: [
    {
      id: "paris-canal", countryId: "france", number: "01", title: "파리의 운하와 동네 서점", location: "Paris · 2 days", duration: "2일", distance: "8.4 km",
      coordinates: [[48.874, 2.364], [48.872, 2.363], [48.870, 2.360], [48.869, 2.370], [48.867, 2.379]],
      stops: ["카날 생마르탱", "레퓌블리크 광장", "마레 지구", "보주 광장"],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "파리의 지붕과 에펠탑이 보이는 풍경", note: "아침 빛이 운하에 닿기 전, 10구의 작은 베이커리에서 하루를 시작해요.",
      description: "카날 생마르탱의 수면과 철제 다리를 따라 마레의 오래된 골목까지 이어지는 도심 산책. 아침에는 동네 빵집과 운하가 차분하고, 저녁에는 강변 카페와 바에 활기가 더해집니다.",
      highlights: [
        { name: "카날 생마르탱", detail: "운하를 따라 이어지는 산책로와 아치형 다리, 물가의 카페를 천천히 둘러보세요." },
        { name: "레퓌블리크 광장", detail: "여러 지하철 노선이 만나는 넓은 광장으로, 동네 산책을 시작하거나 쉬어가기 좋아요." },
        { name: "마레 · 보주 광장", detail: "작은 갤러리와 상점이 이어지는 골목을 지나 파리에서 가장 오래된 계획 광장 중 하나를 만납니다." }
      ],
      food: { name: "Du Pain et des Idées · 10구", detail: "버터 향이 진한 페이스트리와 사워도우로 알려진 동네 베이커리예요. 이른 시간에 들르고 휴무일·영업시간은 방문 전 확인하세요." },
      swim: { name: "Bassin de la Villette · 여름 시즌", detail: "여름철 운영되는 Paris Plages의 지정 수영 구역을 확인해 보세요. 운영 기간과 수질·입장 조건은 매해 달라질 수 있어요.", safety: "운영 기간·현장 안전요원 안내 확인" },
      transit: "Métro 5·8·9호선 République역. Navigo Easy에 10회권을 충전하면 편리해요."
    },
    {
      id: "versailles", countryId: "france", number: "02", title: "베르사유 정원 느린 산책", location: "Versailles · 1 day", duration: "하루", distance: "6.2 km",
      coordinates: [[48.8049, 2.1204], [48.8065, 2.1050], [48.8080, 2.0950], [48.809, 2.08], [48.805, 2.075]],
      stops: ["궁전 정원", "라토나 분수", "대운하", "트리아농"],
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "산책길과 푸른 자연이 어우러진 유럽 풍경", note: "정원은 생각보다 넓어요. 궁전 내부보다 바깥 산책에 시간을 넉넉히 남겨두세요.",
      description: "궁전의 화려한 내부를 지나 라토나 분수와 대운하, 트리아농의 숲길로 이어지는 정원 중심 코스입니다. 입장권 종류와 정원 행사 일정에 따라 동선이 달라질 수 있으니 하루를 넉넉히 비워두세요.",
      highlights: [
        { name: "궁전 정원 · 라토나 분수", detail: "정원의 중심축을 따라 걷다 보면 신화 장면을 담은 분수와 정교한 조경을 만납니다." },
        { name: "대운하", detail: "긴 수면과 정원 풍경이 시원하게 열리는 산책 구간. 그늘이 적은 편이라 물과 모자를 준비하세요." },
        { name: "그랑 트리아농", detail: "궁전보다 한적한 정원과 별궁을 둘러볼 수 있어요. 운영 구역과 별도 입장 조건을 미리 확인하세요." }
      ],
      food: { name: "La Flottille · 대운하 옆", detail: "대운하 전망을 보며 식사할 수 있는 정원 내 레스토랑입니다. 좌석과 운영 시간이 계절에 따라 달라질 수 있어 예약·영업 여부를 확인하세요." },
      swim: { name: "정원 산책 코스에는 수영 장소 없음", detail: "대운하와 분수는 관람 공간이며 수영 장소가 아닙니다. 수영을 원하면 베르사유의 공식 실내 수영장 운영 정보를 따로 확인하세요.", safety: "연못·분수 입수 금지 안내 준수" },
      transit: "RER C Versailles Château–Rive Gauche역에서 도보 약 10분. 파업·공사 일정은 출발 전 확인하세요."
    },
    {
      id: "lyon", countryId: "france", number: "03", title: "리옹, 두 강 사이의 오래된 길", location: "Lyon · 2 days", duration: "2일", distance: "7.1 km",
      coordinates: [[45.764, 4.835], [45.762, 4.827], [45.758, 4.822], [45.755, 4.832], [45.760, 4.840]],
      stops: ["벨쿠르 광장", "생장 대성당", "푸르비에르 언덕", "손 강변"],
      image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "리옹의 강과 도시 풍경", note: "푸르비에르 언덕은 푸니쿨라로 오르고, 내려올 때는 골목길을 걸어보세요.",
      description: "손강과 론강 사이의 프레스킬에서 시작해 구시가지의 트라불과 푸르비에르 언덕을 둘러보는 코스입니다. 언덕 구간은 가파르지만, 전망대에서 붉은 지붕과 두 강의 흐름을 한눈에 볼 수 있어요.",
      highlights: [
        { name: "벨쿠르 광장", detail: "프레스킬 중심의 넓은 광장. 양쪽 강변과 구시가지로 이동하기 좋은 출발점입니다." },
        { name: "비외 리옹 · 생장 대성당", detail: "르네상스 시대 건물 사이 골목과 건물 안쪽 통로인 트라불을 둘러보세요." },
        { name: "푸르비에르 전망대", detail: "언덕 위 대성당 주변에서 리옹의 지붕과 두 강을 내려다볼 수 있습니다." }
      ],
      food: { name: "Café des Fédérations · 리옹식 부숑", detail: "퀘넬과 소시송 등 리옹 전통 가정식을 맛볼 수 있는 부숑 스타일 식당입니다. 식사 시간에는 예약을 권해요." },
      swim: { name: "Centre Nautique Tony Bertrand", detail: "론강변의 야외 수영 시설로, 계절에 따라 운영 구역과 시간이 달라집니다. 강 자체가 아닌 지정된 수영장 시설을 이용하세요.", safety: "운영 시즌·수질·입장 규정 확인" },
      transit: "TCL 교통권은 메트로·트램·버스 공용. Fourvière 푸니쿨라는 Vieux Lyon역에서 환승해요."
    },
    {
      id: "hanoi", countryId: "vietnam", number: "04", title: "하노이, 호수와 골목의 아침", location: "Hanoi · 2 days", duration: "2일", distance: "5.8 km",
      coordinates: [[21.035, 105.834], [21.031, 105.850], [21.025, 105.852], [21.028, 105.840], [21.032, 105.835]],
      stops: ["호안끼엠 호수", "구시가지", "동쑤언 시장", "기찻길 골목"],
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "하노이 호안끼엠 호수 주변의 도시 풍경", note: "호숫가 산책은 이른 아침이 가장 좋아요. 횡단보도에서는 일정한 속도로 건너세요.",
      description: "호안끼엠 호숫가의 아침 운동 풍경에서 시작해 구시가지의 좁은 골목과 시장을 지나갑니다. 오토바이와 보행자가 함께 움직이는 도시의 리듬을 살피며, 길을 건널 때는 갑자기 멈추거나 뛰지 말고 일정한 속도를 유지하세요.",
      highlights: [
        { name: "호안끼엠 호수", detail: "이른 아침에는 현지 주민의 운동과 호수 주변의 일상을 볼 수 있어요. 응옥썬 사당은 운영 시간을 확인하세요." },
        { name: "구시가지 골목", detail: "거리마다 오래된 상점과 길거리 음식이 이어집니다. 보도 위 오토바이와 노점에 주의하며 걸어요." },
        { name: "동쑤언 시장", detail: "현지 생활용품과 식재료를 살펴볼 수 있는 실내 시장. 혼잡한 시간에는 소지품을 잘 챙기세요." }
      ],
      food: { name: "Phở Gia Truyền Bát Đàn · 구시가지", detail: "하노이식 소고기 쌀국수로 유명한 식당입니다. 식사 시간에는 줄이 생길 수 있고, 재료나 운영 시간은 현장에서 확인하세요." },
      swim: { name: "도심 도보 코스에는 공개 수영장 없음", detail: "호안끼엠 호수는 수영 장소가 아닙니다. 수영은 숙소나 정식 수영 시설의 운영 여부를 확인해 이용하세요.", safety: "호수·도심 운하 입수 금지" },
      transit: "도심은 도보와 앱 호출 차량 조합이 편해요. 버스는 현금 잔돈을 준비하고 노선을 미리 확인하세요."
    },
    {
      id: "ninh-binh", countryId: "vietnam", number: "05", title: "닌빈, 논 사이로 흐르는 강", location: "Ninh Bình · 1 day", duration: "하루", distance: "4.5 km",
      coordinates: [[20.253, 105.919], [20.235, 105.933], [20.222, 105.941], [20.236, 105.925]],
      stops: ["짱안 선착장", "석회암 카르스트", "논길", "호아루"],
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베트남 북부의 푸른 산과 강", note: "보트 투어와 자전거를 함께 계획하면 풍경을 여러 속도로 만날 수 있어요.",
      description: "석회암 봉우리 사이를 배로 지나고, 논과 마을길을 자전거로 잇는 자연 중심의 하루 코스입니다. 보트 선착장과 유적지가 떨어져 있으니 현지 이동 시간을 여유 있게 잡으세요.",
      highlights: [
        { name: "짱안 보트 선착장", detail: "현지 뱃사공과 함께 동굴과 석회암 절벽 사이를 지나는 보트 코스입니다. 출발 전 코스 길이와 대기 시간을 확인하세요." },
        { name: "논길과 카르스트 풍경", detail: "자전거로 논과 마을 사이를 천천히 둘러보세요. 한낮에는 햇빛이 강해 물과 자외선 차단이 필요합니다." },
        { name: "호아루 고도", detail: "옛 수도의 사당과 유적을 둘러볼 수 있습니다. 짱안과는 이동 거리가 있어 교통편을 미리 정하는 편이 좋아요." }
      ],
      food: { name: "닌빈 산양고기 · 껌짜이", detail: "산양고기 요리와 바삭하게 구운 쌀밥 껌짜이가 이 지역의 대표 음식입니다. 관광지 식당은 메뉴와 가격을 먼저 확인하세요." },
      swim: { name: "자연 수역 수영은 추천하지 않음", detail: "보트 운항 수역과 카르스트 지형은 수영 장소로 관리되지 않을 수 있습니다. 수영은 안전요원과 시설을 갖춘 숙소·공식 시설을 이용하세요.", safety: "보트 수역·동굴 주변 입수 금지" },
      transit: "하노이에서 기차 또는 리무진 버스로 이동. 현지에서는 자전거·택시를 이용하고 돌아오는 편을 예약하세요."
    },
    {
      id: "hoi-an", countryId: "vietnam", number: "06", title: "호이안, 강가의 등불 저녁", location: "Hội An · 2 days", duration: "2일", distance: "6.3 km",
      coordinates: [[15.879, 108.327], [15.877, 108.329], [15.874, 108.326], [15.872, 108.333], [15.876, 108.338]],
      stops: ["내원교", "투본 강", "안방 해변", "야시장"],
      image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "베트남 호이안의 강변 풍경", note: "구시가지는 해 질 무렵 걷고, 한낮에는 그늘이 있는 카페에서 쉬어가요.",
      description: "노란 벽의 구시가지 골목에서 투본강변을 거쳐 안방 해변까지 이어지는 코스입니다. 낮에는 유산 건축을 둘러보고, 해 질 무렵 강가를 산책한 뒤 해변에서 쉬어가세요.",
      highlights: [
        { name: "내원교와 구시가지", detail: "일본식 지붕 다리와 오래된 상가주택이 모여 있는 호이안의 대표 보행 구역입니다. 유료 관람 구역은 통합 티켓을 확인하세요." },
        { name: "투본강", detail: "강변에서 목선과 오래된 집들이 이어지는 풍경을 볼 수 있어요. 배를 탈 때는 정식 선착장과 안전 장비를 확인하세요." },
        { name: "안방 해변", detail: "구시가지에서 자전거·택시로 이동 가능한 해변입니다. 파도와 깃발, 구조요원의 현장 안내를 먼저 확인하세요." }
      ],
      food: { name: "Cao lầu · Bánh mì Phượng", detail: "호이안식 면 요리 까오러우와 바인미를 맛보세요. 유명 가게는 대기 시간이 길 수 있어 주변의 현지 식당도 함께 살펴보면 좋아요." },
      swim: { name: "안방 해변", detail: "해수욕을 계획하기 좋은 해변 구간입니다. 우기·강풍·높은 파도 때는 입수가 제한될 수 있으니 깃발과 구조요원의 지시를 따르세요.", safety: "당일 파도·깃발·구조요원 안내 확인" },
      transit: "다낭 공항에서 셔틀·택시로 약 45분. 구시가지 내 이동은 도보나 자전거가 편리해요."
    },
    {
      id: "tokyo", countryId: "japan", number: "07", title: "도쿄의 작은 정원과 골목", location: "Tokyo · 2 days", duration: "2일", distance: "7.6 km",
      coordinates: [[35.671, 139.765], [35.667, 139.760], [35.665, 139.750], [35.672, 139.744], [35.679, 139.746]],
      stops: ["긴자", "하마리큐 정원", "쓰키지", "도쿄역"],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "도쿄의 도시 풍경", note: "고층 빌딩 사이 정원에서 잠시 속도를 늦추면 도쿄의 다른 표정이 보여요.",
      description: "긴자의 빽빽한 상점가에서 출발해 하마리큐 정원의 연못과 해안 풍경을 지나 쓰키지 시장 골목으로 걷습니다. 고층 빌딩과 에도 시대 정원이 맞닿는 도쿄의 대비를 느껴보세요.",
      highlights: [
        { name: "긴자", detail: "백화점과 작은 상점, 건축물이 모인 쇼핑 지구입니다. 주말 보행자 천국 운영 여부를 확인하면 걷기 편해요." },
        { name: "하마리큐 정원", detail: "도쿄만과 연결된 물길을 활용한 에도 시대 정원입니다. 입장료와 폐원 시간을 확인하고 천천히 둘러보세요." },
        { name: "쓰키지 장외시장", detail: "초밥과 해산물, 간식 가게가 이어집니다. 이른 시간에 방문하고 시장 통로에서는 보행 흐름을 따라주세요." }
      ],
      food: { name: "쓰키지 장외시장 · 초밥과 계란말이", detail: "해산물 덮밥과 갓 구운 다마고야키 등 간단한 먹거리를 골라 즐겨보세요. 가게별 영업시간은 다르고 재료 소진 시 일찍 닫을 수 있습니다." },
      swim: { name: "도보 코스에는 해수욕장 없음", detail: "하마리큐·쓰키지 주변 바닷물은 수영 구역이 아닙니다. 수영은 도쿄의 정식 실내·야외 풀을 이용하고 운영 일정을 확인하세요.", safety: "항만·운하·정원 수역 입수 금지" },
      transit: "Suica·PASMO 등 교통 IC카드 하나면 충분해요. 출퇴근 시간 혼잡 구간은 여유 있게 이동하세요."
    },
    {
      id: "kyoto", countryId: "japan", number: "08", title: "교토 동쪽, 물과 돌의 길", location: "Kyoto · 1 day", duration: "하루", distance: "5.2 km",
      coordinates: [[35.011, 135.768], [35.013, 135.782], [35.006, 135.787], [35.000, 135.780], [35.004, 135.773]],
      stops: ["난젠지", "철학의 길", "은각사", "기온"],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "교토의 전통 거리", note: "사람이 붐비기 전 이른 오전에 출발하면 물가의 고요함을 오래 누릴 수 있어요.",
      description: "난젠지의 넓은 경내에서 시작해 철학의 길을 따라 은각사까지 걷고, 저녁에는 기온의 골목을 둘러봅니다. 사찰과 주거지가 가까운 곳이므로 조용히 걷고 사유지 출입을 삼가 주세요.",
      highlights: [
        { name: "난젠지 수로각", detail: "붉은 벽돌 아치와 사찰 정원이 함께 있는 교토 동쪽의 대표 산책 지점입니다." },
        { name: "철학의 길 · 은각사", detail: "운하 옆 벚나무 길을 따라 은각사까지 이어집니다. 사찰 내부 관람은 마감 시간 전에 도착하세요." },
        { name: "기온", detail: "목조 마치야와 좁은 골목이 남아 있는 지역입니다. 주민과 사유 공간을 존중하고 촬영 제한 표지를 확인하세요." }
      ],
      food: { name: "준세이 · 난젠지 유도후", detail: "난젠지 인근에서 교토식 두부 요리 유도후를 맛볼 수 있는 식당입니다. 점심 시간대는 예약 가능 여부와 대기 시간을 확인하세요." },
      swim: { name: "도보 코스에는 수영 장소 없음", detail: "철학의 길 수로와 사찰 연못은 수영 구역이 아닙니다. 수영은 교토의 공공 수영장 등 지정 시설을 이용하세요.", safety: "수로·사찰 연못 입수 금지" },
      transit: "시내버스는 혼잡할 수 있어요. 지하철과 도보를 섞고, IC카드로 탑승하면 편리합니다."
    },
    {
      id: "florence", countryId: "italy", number: "09", title: "피렌체, 아르노 강의 저녁빛", location: "Florence · 1 day", duration: "하루", distance: "4.8 km",
      coordinates: [[43.773, 11.256], [43.769, 11.255], [43.765, 11.249], [43.767, 11.242], [43.771, 11.247]],
      stops: ["두오모", "베키오 다리", "올트라르노", "미켈란젤로 광장"],
      image: "https://images.unsplash.com/photo-1543429257-7eb5d2a0a6c1?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "피렌체의 아르노 강과 다리", note: "강 건너편에서 도시를 바라보는 시간까지 포함해 천천히 걸어보세요.",
      description: "두오모의 대리석 외관에서 시작해 베키오 다리를 건너 올트라르노의 공방 골목을 지나 미켈란젤로 광원의 노을로 마무리하는 코스입니다. 광장과 미술관 주변은 붐비므로 소지품을 주의하세요.",
      highlights: [
        { name: "두오모 광장", detail: "대성당과 종탑, 세례당이 모여 있는 피렌체의 중심입니다. 내부 입장과 돔 등반은 사전 예약이 필요할 수 있어요." },
        { name: "베키오 다리 · 올트라르노", detail: "아르노강 위 다리와 강 건너 장인 공방이 이어집니다. 작은 작업실은 영업시간을 확인하고 둘러보세요." },
        { name: "미켈란젤로 광장", detail: "도시 전체를 내려다볼 수 있는 전망 지점입니다. 해 질 무렵에는 귀가 교통편까지 고려해 이동하세요." }
      ],
      food: { name: "All’Antico Vinaio · 파니니", detail: "갓 구운 포카치아에 지역 식재료를 채운 파니니로 알려진 곳입니다. 대기 줄이 길 수 있으니 주변의 다른 샌드위치 가게도 함께 살펴보세요." },
      swim: { name: "Piscina Costoli · 지정 수영장", detail: "아르노강은 수영 장소가 아닙니다. 여름철 야외 수영을 원하면 시내 공공 수영장의 시즌 운영과 입장 조건을 확인하세요.", safety: "강 입수 금지 · 수영장 운영일 확인" },
      transit: "역사 지구는 도보로 둘러보기 좋아요. 버스는 탑승 전 승차권을 구입·개찰해야 합니다."
    },
    {
      id: "bologna", countryId: "italy", number: "10", title: "볼로냐의 아케이드 산책", location: "Bologna · 1 day", duration: "하루", distance: "5.1 km",
      coordinates: [[44.494, 11.342], [44.493, 11.347], [44.489, 11.346], [44.484, 11.338], [44.489, 11.333]],
      stops: ["마조레 광장", "콰드릴라테로", "산 루카 회랑", "대학 지구"],
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "이탈리아 구시가지의 따뜻한 풍경", note: "아케이드 아래를 따라 걸으면 날씨와 상관없이 도시의 리듬을 느낄 수 있어요.",
      description: "마조레 광장과 중세 탑, 콰드릴라테로 시장 골목을 잇는 볼로냐 구시가지 산책입니다. 긴 회랑 아래로 이어지는 길 덕분에 햇볕이나 가벼운 비를 피하며 걷기 좋아요.",
      highlights: [
        { name: "마조레 광장", detail: "산 페트로니오 대성당과 시청 건물이 둘러싼 도시의 중심 광장입니다." },
        { name: "콰드릴라테로 시장", detail: "치즈·햄·신선 식재료 가게가 모인 오래된 시장 지구. 점심 전후로 활기찬 분위기를 느낄 수 있어요." },
        { name: "대학 지구 · 아케이드", detail: "유럽에서 오래된 대학가와 도시 전역의 회랑길을 따라 걷습니다. 유네스코 회랑 구간의 표지와 보행 예절을 확인하세요." }
      ],
      food: { name: "Trattoria Anna Maria · 볼로냐 파스타", detail: "탈리아텔레 알 라구 등 에밀리아로마냐식 파스타를 맛볼 수 있는 전통 식당입니다. 저녁에는 예약을 권하고, 메뉴와 영업시간을 확인하세요." },
      swim: { name: "도보 코스에는 수영 장소 없음", detail: "구시가지에는 수영 공간이 없습니다. 여름철 수영은 Piscina Sterlino 등 지정 시설의 운영 일정과 이용 조건을 확인하세요.", safety: "분수·도시 수로 입수 금지" },
      transit: "중심부는 도보가 가장 좋아요. 산 루카행 열차는 Piazza Maggiore 인근 정류장에서 출발해요."
    }
  ],
  archive: [
    {
      id: "deepfake", category: "DIGITAL SAFETY", date: "2024 — 계속되는 이슈", title: "딥페이크 사칭과 신뢰의 빈틈", summary: "익숙한 얼굴과 목소리를 빌려, 확인의 순간을 늦추는 수법.",
      mindmap: [
        { label: "중심 주제", title: "합성 미디어를 이용한 사칭", detail: "공개된 사진·음성 등을 합성해 지인, 기관 또는 유명인을 가장하고 송금·정보 제공을 요구하는 피해 유형." },
        { label: "수법 / 특성", title: "긴급성 · 권위 · 익숙함", detail: "짧은 영상통화나 음성 메시지로 급박한 상황을 연출합니다. 발신 경로가 익숙해 보여도 별도 채널로 재확인하는 것이 중요합니다." },
        { label: "법적 쟁점 · 용어", title: "사기 · 명예훼손 · 개인정보", detail: "사실과 다른 정보로 재산상 이익을 취하는 행위는 사기 쟁점이 될 수 있고, 합성물의 유포 목적·내용에 따라 명예·초상·개인정보 관련 책임도 검토됩니다. 관할과 구체적 사실에 따라 판단이 달라집니다." },
        { label: "프로파일링 인사이트", title: "기술보다 상황을 설계한다", detail: "핵심은 합성 품질보다 피해자의 판단 시간을 줄이는 사회공학적 압박입니다. 금전·인증 요청은 통화를 끊고 미리 저장한 번호로 다시 확인하세요." }
      ],
      sources: [
        { label: "FBI — Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud", url: "https://www.ic3.gov/PSA/2024/PSA240709" },
        { label: "FTC — How to Recognize and Avoid Phishing Scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
      ]
    },
    {
      id: "ransomware", category: "CYBERSECURITY", date: "2024 — 상시 경계", title: "랜섬웨어, 멈춰 선 일상", summary: "데이터를 잠그는 공격이 병원과 기업의 운영을 흔든다.",
      mindmap: [
        { label: "중심 주제", title: "랜섬웨어와 서비스 중단", detail: "악성코드로 파일이나 시스템을 사용할 수 없게 만든 뒤 금전을 요구하는 사이버 위협. 유출 협박이 함께 나타나기도 합니다." },
        { label: "수법 / 특성", title: "침투 · 확산 · 이중 협박", detail: "피싱, 취약한 원격 접속, 탈취한 계정 등이 침투 경로가 될 수 있습니다. 백업까지 접근해 복구를 어렵게 하거나 데이터 공개를 위협하기도 합니다." },
        { label: "법적 쟁점 · 용어", title: "침해사고 · 통지 의무", detail: "무단 접근과 데이터 유출 여부, 개인정보 처리자의 안전조치·통지 의무가 쟁점입니다. 신고·통지 요건과 기한은 국가 및 사건별로 달라집니다." },
        { label: "프로파일링 인사이트", title: "복구력은 평소에 만들어진다", detail: "공격자는 기술적 취약점뿐 아니라 조직의 백업·권한 관리 공백을 노립니다. 분리 보관한 백업과 정기 복구 훈련이 피해 확산을 줄입니다." }
      ],
      sources: [
        { label: "CISA — Stop Ransomware", url: "https://www.cisa.gov/stopransomware" },
        { label: "ENISA — Threat Landscape", url: "https://www.enisa.europa.eu/topics/cyber-threats" }
      ]
    },
    {
      id: "dark-patterns", category: "CONSUMER RIGHTS", date: "디지털 소비자 이슈", title: "다크패턴, 취소 버튼은 어디에", summary: "가입은 한 번에, 해지는 여러 번에 걸쳐야 하는 이유.",
      mindmap: [
        { label: "중심 주제", title: "사용자 선택을 비트는 인터페이스", detail: "디지털 화면의 설계로 특정 선택을 유도하거나 이용자가 원치 않는 결정을 하도록 만드는 관행을 다룹니다." },
        { label: "수법 / 특성", title: "숨김 · 반복 · 비대칭", detail: "해지 메뉴를 깊숙이 숨기거나, 거절을 어렵게 만들고, 동의 버튼을 더 눈에 띄게 배치하는 방식이 대표적입니다." },
        { label: "법적 쟁점 · 용어", title: "기만성 · 동의의 유효성", detail: "표시가 오인 가능했는지, 동의가 자유롭고 구체적이었는지, 구독·개인정보 처리 조건이 충분히 고지됐는지가 주요 쟁점입니다." },
        { label: "프로파일링 인사이트", title: "마찰의 방향을 살펴보기", detail: "가입과 해지에 필요한 단계 수를 비교해 보세요. 번거로움이 이용자의 이익보다 사업자의 유지율을 향하는지 파악하는 단서가 됩니다." }
      ],
      sources: [
        { label: "FTC — Bringing Dark Patterns to Light", url: "https://www.ftc.gov/reports/bringing-dark-patterns-light" },
        { label: "OECD — Dark commercial patterns", url: "https://www.oecd.org/en/topics/sub-issues/consumer-policy/dark-commercial-patterns.html" }
      ]
    },
    {
      id: "crowdstrike", category: "GLOBAL SYSTEMS", date: "2024.07 — 사례 기록", title: "한 번의 업데이트, 세계의 멈춤", summary: "디지털 인프라의 연결성이 만든 연쇄 중단의 기록.",
      mindmap: [
        { label: "중심 주제", title: "소프트웨어 업데이트와 연쇄 장애", detail: "보안 소프트웨어 업데이트 결함으로 여러 산업의 Windows 기기가 영향을 받으며 항공·의료·금융 서비스 등에 차질이 발생한 사례." },
        { label: "수법 / 특성", title: "악의가 아닌 단일 실패 지점", detail: "악의적 침입 사건과 달리, 배포된 업데이트의 결함과 광범위한 의존성이 동시에 작동해 장애가 빠르게 퍼졌습니다." },
        { label: "법적 쟁점 · 용어", title: "공급망 위험 · 책임 범위", detail: "서비스 계약, 사업자의 주의 의무, 손해의 인과관계와 복구 책임이 검토될 수 있습니다. 책임은 계약과 관할 법률에 따라 달라집니다." },
        { label: "프로파일링 인사이트", title: "집중된 연결은 집중된 위험", detail: "같은 도구와 공급자에 대한 의존이 효율을 높이는 동시에 장애 반경을 키울 수 있습니다. 단계적 배포와 독립 복구 경로가 회복탄력성의 핵심입니다." }
      ],
      sources: [
        { label: "CrowdStrike — Preliminary Post Incident Review", url: "https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/" },
        { label: "CISA — CrowdStrike Outage", url: "https://www.cisa.gov/news-events/alerts/2024/07/19/crowdstrike-outage" }
      ]
    }
  ]
};
// 최신 기술·사회 범죄 아카이브 (최근 1년 이내 주요 이슈)
const recentArchives = [
  {
    id: "crime-deepfake-2025",
    category: "Digital Crime & Tech",
    shortTitle: "텔레그램 딥페이크 허위영상물 유포와 대응",
    summary: "공개 이미지 등을 악용한 비동의 합성물 제작·유포와 피해 대응 쟁점",
    mindmap: {
      center: "AI 딥페이크 성범죄",
      branch1: {
        title: "수법 및 특성",
          desc: "공개된 사진 등을 동의 없이 합성해 허위영상물을 만들고 메신저 채널 등에서 유포하는 유형. 피해 확산과 재유포 방지가 주요 쟁점"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "성폭력처벌법 제14조의2 관련 허위영상물 편집·반포 쟁점. 플랫폼 책임과 공범 성립 여부는 구체적인 행위와 인식, 증거에 따라 판단"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "익명성과 빠른 재유포가 피해를 키울 수 있음. 피해자 보호, 신속한 신고·삭제 지원, 플랫폼의 대응 절차를 함께 살펴볼 필요"
      }
    },
    references: [
      { name: "경찰청", title: "공식 자료", url: "https://www.police.go.kr/" },
      { name: "국가법령정보센터", title: "성폭력처벌법 제14조의2", url: "https://www.law.go.kr/법령/성폭력범죄의처벌등에관한특례법" }
    ]
  },
  {
    id: "crime-deepvoice-phishing",
    category: "AI Financial Scam",
    shortTitle: "AI 음성 합성을 이용한 보이스피싱",
    summary: "가족·지인의 목소리를 흉내 내 긴급 상황을 꾸미고 금전을 요구하는 금융사기 유형",
    mindmap: {
      center: "AI 딥보이스 사기",
      branch1: {
        title: "수법 및 특성",
          desc: "온라인 음성 등을 합성·변조해 지인을 사칭하고 사고나 긴급 상황을 내세워 송금·정보 제공을 요구하는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "전기통신금융사기피해방지법과 사기죄 적용 여부가 쟁점. 계좌·통신 기록의 확보와 사업자 협조 범위는 사건별 법률 절차에 따라 검토"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "합성 음성의 정교함보다 긴급성으로 확인을 막는 사회공학적 압박에 주목. 송금 요청은 별도 연락처와 가족 간 확인 절차로 검증"
      }
    },
    references: [
      { name: "금융감독원", title: "금융사기 예방 정보", url: "https://www.fss.or.kr/" },
      { name: "국가법령정보센터", title: "전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법", url: "https://www.law.go.kr/법령/전기통신금융사기피해방지및피해금환급에관한특별법" }
    ]
  },
  {
    id: "crime-crypto-leading",
    category: "Investment Fraud",
    shortTitle: "가상자산 리딩방과 투자 사기",
    summary: "허위 수익 정보와 유명인 사칭 등을 앞세워 투자자를 유인하는 가상자산 사기 유형",
    mindmap: {
      center: "코인 리딩방 사기",
      branch1: {
        title: "수법 및 특성",
          desc: "메신저 대화방에서 허위 수익 인증·추천 정보를 반복해 신뢰를 쌓고, 검증되지 않은 자산 매수나 추가 입금을 유도하는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "사기·공모 여부와 자본시장법 적용은 자산의 성격과 구체적 행위에 따라 달라짐. 원금·고수익을 약정한 자금 모집은 유사수신 해당 여부도 검토"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "집단 대화와 반복되는 수익 인증은 독립적인 검증을 어렵게 만들 수 있음. 사업자 등록·공시 정보와 거래소 외부 송금 요구를 따로 확인"
      }
    },
    references: [
      { name: "금융위원회", title: "가상자산 정책·보도자료", url: "https://www.fsc.go.kr/" },
      { name: "국가법령정보센터", title: "가상자산 이용자 보호 등에 관한 법률", url: "https://www.law.go.kr/법령/가상자산이용자보호등에관한법률" }
    ]
  },
  {
    id: "crime-lease-scam",
    category: "Real Estate Fraud",
    shortTitle: "법인 명의와 다중 계약을 악용한 전세사기",
    summary: "명의·계약 구조를 복잡하게 만들어 임차인의 보증금 회수를 어렵게 하는 조직적 사기 유형",
    mindmap: {
      center: "조직적 전세사기",
      branch1: {
        title: "수법 및 특성",
          desc: "다수의 명의자·법인과 복잡한 계약을 이용해 책임 소재를 흐리거나, 실제 가치와 위험을 충분히 알리지 않은 채 보증금을 받는 유형"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "사기죄와 가중처벌 적용, 공범별 고의·가담 정도가 쟁점. 임대차보호법상 대항력·우선변제권 등 임차인의 권리도 함께 확인"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "개별 계약만으로 위험을 파악하기 어려울 수 있음. 등기·선순위 권리·보증 가입 여부를 계약 전 확인하고 공공 상담 창구를 이용"
      }
    },
    references: [
      { name: "국토교통부", title: "전세사기 피해 지원 정보", url: "https://www.molit.go.kr/" },
      { name: "국가법령정보센터", title: "주택임대차보호법", url: "https://www.law.go.kr/법령/주택임대차보호법" }
    ]
  },
  {
    id: "crime-retail-theft",
    category: "Juvenile Crime Trend",
    shortTitle: "무인점포 절도와 소년사법 쟁점",
    summary: "무인 운영 공간의 관리 공백과 반복 절도, 청소년 보호·책임 문제를 함께 살펴보는 이슈",
    mindmap: {
      center: "무인점포 연쇄 절도",
      branch1: {
        title: "수법 및 특성",
          desc: "야간 등 관리 인력이 적은 시간대에 무인 매장을 대상으로 절도가 반복되는 유형. 매장별 방범 환경과 지역 예방 체계가 함께 논의됨"
      },
      branch2: {
        title: "핵심 법적 쟁점 & 용어",
          desc: "절도죄 성립과 소년법상 연령·보호처분 적용이 쟁점. 형사책임 연령과 절차는 사건 당시 연령 및 구체적 행위에 따라 확인해야 함"
      },
      branch3: {
        title: "프로파일링 & 인사이트",
          desc: "환경 개선과 지역사회 개입을 함께 고려할 필요. 청소년 사건은 피해 회복, 재범 방지, 보호·교육의 균형을 중심으로 살펴봄"
      }
    },
    references: [
      { name: "경찰청", title: "생활안전·범죄예방 자료", url: "https://www.police.go.kr/" },
      { name: "한국형사·법무정책연구원", title: "소년사법·범죄예방 연구", url: "https://www.kicj.re.kr/" }
    ]
  }
].forEach((item) => {
  const branches = item.mindmap;
  window.JOURNEY_ARCHIVE_DATA.archive.push({
    id: item.id,
    category: item.category.toUpperCase(),
    date: "SOCIAL & TECH ISSUE",
    title: item.shortTitle,
    summary: item.summary,
    mindmap: [
      { label: "중심 주제", title: branches.center, detail: item.summary },
      { label: "수법 / 특성", title: branches.branch1.title, detail: branches.branch1.desc },
      { label: "법적 쟁점 · 용어", title: branches.branch2.title, detail: branches.branch2.desc },
      { label: "프로파일링 인사이트", title: branches.branch3.title, detail: branches.branch3.desc }
    ],
    sources: item.references.map((reference) => ({
      label: `${reference.name} — ${reference.title}`,
      url: reference.url
    }))
  });
});
