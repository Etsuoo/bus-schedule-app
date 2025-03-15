
// 路線の詳細情報
const routeDetails = {
  "渋63": {
    fullName: " [京王] 渋谷駅行",
    destination: "渋谷駅",
    via: ["幡ヶ谷原町", "幡ヶ谷駅", "幡代", "新国立劇場", "東京オペラシティ南", "初台坂上", "南初台", "初台坂下", "八幡下", "代々木八幡駅入口", "富ヶ谷", "放送センター西口", "渋谷区役所", "神南一丁目", "渋谷駅"]
  },
  "渋66": {
    fullName: "[京王/都営バス] 渋谷駅行",
    destination: "渋谷駅",
    via: ["幡ヶ谷原町", "幡ヶ谷駅", "幡代", "新国立劇場", "東京オペラシティ南", "初台坂上", "南初台", "初台坂下", "八幡下", "代々木八幡駅入口", "富ヶ谷","神山","東急百貨店本店前","渋谷駅"]
  }
};

// バスの時刻表データ（サンプル）
const busData = {
    "平日": {
        "渋63": ["6:07", "6:20", "6:32", "6:43", "6:54", "7:04", "7:13", "7:24", "7:32", "7:41", "7:49", "7:58",
              "8:06", "8:14", "8:26", "8:35", "8:44", "8:53",
              "9:01", "9:11", "9:23", "9:35", "9:47", "9:59",
              "10:11", "10:21", "10:33", "10:45", "10:57",
              "11:09", "11:21", "11:33", "11:44", "11:56",
              "12:08", "12:20", "12:32", "12:44", "12:56",
              "13:08", "13:20", "13:32", "13:44", "13:56",
              "14:08", "14:20", "14:32", "14:42", "14:52",
              "15:02", "15:12", "15:22", "15:32", "15:42", "15:52",
              "16:02", "16:12", "16:22", "16:32", "16:42", "16:52",
              "17:02", "17:12", "17:22", "17:32", "17:42", "17:52",
              "18:02", "18:12", "18:23", "18:33", "18:43", "18:53",
              "19:03", "19:13", "19:23", "19:33", "19:43", "19:53",
              "20:03", "20:13", "20:23", "20:33", "20:43", "20:53",
              "21:03", "21:13", "21:23", "21:33", "21:43", "21:53",
              "22:03", "22:13", "22:23", "22:33", "22:43"],
        "渋66": ["6:13", "6:25", "6:38", "6:45", "6:56",
              "7:06", "7:16", "7:23", "7:30", "7:41", "7:51",
              "8:03", "8:13", "8:23", "8:33", "8:44", "8:54",
              "9:04", "9:15", "9:26", "9:36", "9:47", "9:58",
              "10:08", "10:20", "10:31", "10:43", "10:55",
              "11:07", "11:19", "11:30", "11:42", "11:54",
              "12:06", "12:18", "12:30", "12:42", "12:54",
              "13:05", "13:17", "13:29", "13:41", "13:53",
              "14:05", "14:17", "14:29", "14:41", "14:53",
              "15:05", "15:17", "15:29", "15:41", "15:53",
              "16:05", "16:17", "16:29", "16:41", "16:53",
              "17:05", "17:17", "17:29", "17:42", "17:54",
              "18:06", "18:18", "18:29", "18:41", "18:53",
              "19:04", "19:15", "19:26", "19:37", "19:48", "19:59",
              "20:11", "20:23", "20:36", "20:48", "20:59",
              "21:15"]
    },
    "土曜": {
        "渋63": ["6:14", "6:26", "6:38", "6:50",
              "7:02", "7:15", "7:27", "7:39", "7:51",
              "8:04", "8:16", "8:28", "8:40", "8:52",
              "9:04", "9:19", "9:31", "9:43", "9:55",
              "10:07", "10:19", "10:31", "10:43", "10:55",
              "11:07", "11:19", "11:31", "11:43", "11:55",
              "12:07", "12:19", "12:31", "12:43", "12:55",
              "13:07", "13:19", "13:31", "13:43", "13:55",
              "14:07", "14:19", "14:31", "14:43", "14:55",
              "15:07", "15:19", "15:31", "15:43", "15:55",
              "16:07", "16:19", "16:31", "16:43", "16:55",
              "17:07", "17:19", "17:29", "17:41", "17:53",
              "18:05", "18:17", "18:29", "18:41", "18:53",
              "19:04", "19:16", "19:28", "19:38", "19:50",
              "20:02", "20:14", "20:26", "20:38", "20:50",
              "21:04", "21:24"],
        "渋66": ["6:16", "6:30", "6:41", "6:56",
              "7:08", "7:20", "7:34", "7:47",
              "8:01", "8:14", "8:26", "8:38", "8:50",
              "9:02", "9:14", "9:26", "9:38", "9:50",
              "10:02", "10:14", "10:26", "10:38", "10:50",
              "11:02", "11:14", "11:26", "11:38", "11:50",
              "12:02", "12:14", "12:26", "12:38", "12:50",
              "13:01", "13:13", "13:25", "13:37", "13:49",
              "14:01", "14:13", "14:25", "14:37", "14:49",
              "15:01", "15:13", "15:25", "15:37", "15:49",
              "16:01", "16:13", "16:25", "16:36", "16:48",
              "17:00", "17:12", "17:24", "17:36", "17:48",
              "18:00", "18:12", "18:23", "18:35", "18:47",
              "19:00", "19:13", "19:25", "19:38", "19:52",
              "20:05", "20:19", "20:32", "20:45",
              "21:00", "21:16"]
    },
    "日祝": {
        "渋63": ["6:14", "6:32", "6:50",
              "7:06", "7:22", "7:36", "7:50",
              "8:04", "8:16", "8:28", "8:40", "8:52",
              "9:04", "9:16", "9:28", "9:40", "9:52",
              "10:04", "10:16", "10:28", "10:40", "10:54",
              "11:06", "11:18", "11:30", "11:42", "11:54",
              "12:06", "12:18", "12:30", "12:42", "12:54",
              "13:06", "13:18", "13:30", "13:42", "13:54",
              "14:06", "14:18", "14:30", "14:42", "14:54",
              "15:06", "15:18", "15:30", "15:42", "15:54",
              "16:06", "16:18", "16:30", "16:42", "16:54",
              "17:04", "17:15", "17:27", "17:39", "17:51",
              "18:03", "18:15", "18:27", "18:38", "18:50",
              "19:02", "19:14", "19:27", "19:38", "19:50",
              "20:04", "20:24"],
        "渋66": ["6:19", "6:32", "6:44", "6:52",
              "7:08", "7:22", "7:36", "7:49",
              "8:02", "8:14", "8:26", "8:40", "8:52",
              "9:04", "9:16", "9:29", "9:41", "9:52",
              "10:03", "10:14", "10:25", "10:36", "10:48",
              "11:01", "11:13", "11:25", "11:37", "11:49",
              "12:01", "12:13", "12:25", "12:37", "12:49",
              "13:02", "13:14", "13:26", "13:38", "13:50",
              "14:02", "14:14", "14:26", "14:38", "14:50",
              "15:02", "15:14", "15:26", "15:38", "15:50",
              "16:02", "16:14", "16:26", "16:38", "16:50",
              "17:02", "17:14", "17:26", "17:38", "17:50",
              "18:01", "18:13", "18:25", "18:36", "18:48",
              "19:00", "19:13", "19:26", "19:38", "19:52",
              "20:04", "20:18", "20:32", "20:46",
              "21:00", "21:15"]
    }
};
// 目的地検索機能
function searchDestination() {
  const destination = document.getElementById('destination-input').value.trim();
  const resultsElement = document.getElementById('search-results');
  
  if (!destination) {
    resultsElement.innerHTML = '<p>目的地を入力してください</p>';
    return;
  }
  
  // 目的地に合致する路線を検索
  let matchingRoutes = [];
  let viaRoutes = [];
  
  for (const [routeName, details] of Object.entries(routeDetails)) {
    // 終点（渋谷駅）が一致するか
    if (details.destination.includes(destination)) {
      matchingRoutes.push({
        name: routeName,
        details: details
      });
    } 
    // 経由地に含まれるか
    else if (details.via.some(stop => stop.includes(destination))) {
      viaRoutes.push({
        name: routeName,
        details: details,
        stopIndex: details.via.findIndex(stop => stop.includes(destination))
      });
    }
  }
  
  // 検索結果の表示
  if (matchingRoutes.length === 0 && viaRoutes.length === 0) {
    resultsElement.innerHTML = `<p>「${destination}」に行く路線は見つかりませんでした</p>`;
    return;
  }
  
  let resultsHTML = `<h3>「${destination}」への路線</h3>`;
  
  // 現在の日時情報を取得
  const dateInfo = getCurrentDateInfo();
  const currentTime = dateInfo.now;
  
  // まず終点一致の路線を表示
  if (matchingRoutes.length > 0) {
    matchingRoutes.forEach(route => {
      const times = busData[dateInfo.dayType][route.name];
      const nextBusInfo = calculateNextBus(times, currentTime);
      
      // 駅のリスト表示（経路表示）
      let stationsHTML = '<div class="station-list"><strong>経路:</strong> ';
      route.details.via.forEach((station, index) => {
        if (index > 0) stationsHTML += ' → ';
        if (station === '幡ヶ谷原町') {
          stationsHTML += `<span class="current">${station}</span>`;
        } else if (station.includes(destination)) {
          stationsHTML += `<span class="destination">${station}</span>`;
        } else {
          stationsHTML += station;
        }
      });
      stationsHTML += '</div>';
      
      resultsHTML += `
        <div class="bus-line recommended">
          <h3 class="line-name">${route.name}（${route.details.fullName}）</h3>
          <p class="route-description">${route.details.description}</p>
          <div class="time-info">
            <div class="next-time">次のバス: ${nextBusInfo.nextTime}</div>
            <div class="time-remaining">${nextBusInfo.isNextDay ? '本日の運行終了' : nextBusInfo.waitMinutes + '分後'}</div>
          </div>
          ${stationsHTML}
          <div class="recommendation">
            <strong>✓ おすすめ</strong>: 終点まで乗車できます
          </div>
        </div>
      `;
    });
  }
  
  // 次に経由地一致の路線を表示
  if (viaRoutes.length > 0) {
    viaRoutes.forEach(route => {
      const times = busData[dateInfo.dayType][route.name];
      const nextBusInfo = calculateNextBus(times, currentTime);
      
      // 駅のリスト表示（経路表示）
      let stationsHTML = '<div class="station-list"><strong>経路:</strong> ';
      route.details.via.forEach((station, index) => {
        if (index > 0) stationsHTML += ' → ';
        if (station === '幡ヶ谷原町') {
          stationsHTML += `<span class="current">${station}</span>`;
        } else if (station.includes(destination)) {
          stationsHTML += `<span class="destination">${station}</span>`;
        } else {
          stationsHTML += station;
        }
      });
      stationsHTML += '</div>';
      
      const getOffStation = route.details.via[route.stopIndex];
      
      resultsHTML += `
        <div class="bus-line">
          <h3 class="line-name">${route.name}（${route.details.fullName}）</h3>
          <p class="route-description">${route.details.description}</p>
          <div class="time-info">
            <div class="next-time">次のバス: ${nextBusInfo.nextTime}</div>
            <div class="time-remaining">${nextBusInfo.isNextDay ? '本日の運行終了' : nextBusInfo.waitMinutes + '分後'}</div>
          </div>
          ${stationsHTML}
          <div class="recommendation">
            <strong>${getOffStation}</strong>で降りてください（${route.stopIndex + 1}番目の停留所）
          </div>
        </div>
      `;
    });
  }
  
  resultsElement.innerHTML = resultsHTML;
}


// 現在の日時情報を取得する関数
function getCurrentDateInfo() {
    const now = new Date();
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][now.getDay()];
    
    // 曜日タイプを判定（0=日曜、6=土曜）
    let dayType;
    if (now.getDay() === 0) {
        dayType = "日祝";
    } else if (now.getDay() === 6) {
        dayType = "土曜";
    } else {
        dayType = "平日";
    }
    
    return {
        now: now,
        dayOfWeek: dayOfWeek,
        dayType: dayType
    };
}

// 時刻を分に変換する関数
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// 次のバス時刻と待ち時間を計算する関数
function calculateNextBus(busTimesArray, currentTime) {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    // 今日の残りの時刻から探す
    for (const timeStr of busTimesArray) {
        const busMinutes = timeToMinutes(timeStr);
        if (busMinutes >= currentMinutes) {
            return {
                nextTime: timeStr,
                waitMinutes: busMinutes - currentMinutes
            };
        }
    }
    
    // 翌日の最初のバス
    return {
        nextTime: busTimesArray[0],
        waitMinutes: null,
        isNextDay: true
    };
}

// 画面を更新する関数
// 画面を更新する関数
function updateDisplay() {
  const dateInfo = getCurrentDateInfo();
  const currentTimeElement = document.getElementById('current-time');
  const scheduleElement = document.getElementById('bus-schedule');
  
  // 現在時刻と曜日を表示
  const formattedMinutes = String(dateInfo.now.getMinutes()).padStart(2, '0');
  currentTimeElement.textContent = `現在時刻: ${dateInfo.now.getHours()}:${formattedMinutes} (${dateInfo.dayOfWeek}曜日)`;
  
  // 時刻表のデータが存在するか確認
  if (!busData[dateInfo.dayType]) {
    scheduleElement.innerHTML = `<p>エラー: ${dateInfo.dayType}のデータがありません</p>`;
    return;
  }
  
  // 各路線の次のバス時刻を計算して表示
  let scheduleHTML = '';
  for (const [line, times] of Object.entries(busData[dateInfo.dayType])) {
    const nextBusInfo = calculateNextBus(times, dateInfo.now);
    const routeInfo = routeDetails[line] || { description: "" };
    
    scheduleHTML += `
      <div class="bus-line">
        <h3 class="line-name">${line}（${routeInfo.fullName || line}）</h3>
        <p class="route-description">${routeInfo.description}</p>
        <div class="time-info">
          <div class="next-time">次のバス: ${nextBusInfo.nextTime}</div>
          <div class="time-remaining">${nextBusInfo.isNextDay ? '本日の運行終了' : nextBusInfo.waitMinutes + '分後'}</div>
        </div>
      </div>
    `;
  }
  
  scheduleElement.innerHTML = scheduleHTML;
}

// 更新ボタンのイベントハンドラ
function refreshTimes() {
    updateDisplay();
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    // 1分ごとに自動更新
    setInterval(updateDisplay, 60000);
});
