from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import json
from variables import words

phrases = []
currIndex = 0

for word in words:
    url = f'http://www.merriam-webster.com/dictionary/{word}'
    req = Request(url,
                  headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'})
    fp = urlopen(req)
    soup = BeautifulSoup(fp, "lxml")
    # print(soup)
    html = soup.find("span", {"class": "ex-sent t no-aq sents"})
    if html:
        phrase = html.get_text().strip()
        phrase = phrase.replace("“", "").replace("”", "")
        phrases.append({"index": currIndex, "phrase": phrase})
        print(f'word:{word} | phrase:{phrase}')
    currIndex = currIndex + 1
    fp.close()

for item in phrases:
    with open("contents.json", "r+", encoding='utf-8') as jsonFile:
        data = json.load(jsonFile)
        data[item['index']]['phrase'] = item['phrase']
        jsonFile.seek(0)
        json.dump(data, jsonFile, ensure_ascii=False)
        jsonFile.truncate()
