import os
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone

CALENDAR_ID = os.environ['CALENDAR_ID']
API_KEY = os.environ['GOOGLE_API_KEY']

# 今年範圍
year = datetime.now(timezone.utc).year
time_min = f"{year}-01-01T00:00:00Z"
time_max = f"{year}-12-31T23:59:59Z"

params = urllib.parse.urlencode({
    'key': API_KEY,
    'timeMin': time_min,
    'timeMax': time_max,
    'singleEvents': 'true',
    'orderBy': 'startTime',
    'maxResults': '500',
})

url = f"https://www.googleapis.com/calendar/v3/calendars/{urllib.parse.quote(CALENDAR_ID)}/events?{params}"

with urllib.request.urlopen(url) as res:
    data = json.loads(res.read())

items = data.get('items', [])

# 只保留需要的欄位
events = []
for item in items:
    summary = item.get('summary', '').strip()
    start = item.get('start', {})
    date_str = start.get('date') or start.get('dateTime', '')[:10]
    if summary and date_str:
        events.append({'title': summary, 'date': date_str})

output = {
    'updated': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
    'events': events
}

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"Saved {len(events)} events to data.json")
