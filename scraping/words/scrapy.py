import requests
import json

translations = []
currIndex = 0

with open("contents.json", "r+", encoding='utf-8') as jsonFile:
    wordsJSON = json.load(jsonFile)
    for item in wordsJSON:
        word = item['word']
        url = 'https://www.translate.com/translator/ajax_translate'

        payload = {"text_to_translate": word,
                   "source_lang": "en",
                   "translated_lang": "pt",
                   "use_cache_only": "false"}

        headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
                   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'}

        # session = requests.Session()
        resp = requests.post(url=url, headers=headers, data=payload)
        response = resp.json()

        if(response['result'] == 'success'):
            translation = response['translated_text'].lower()
            print(f'translation of {word}: {translation}')
            translations.append(
                {"index": currIndex, "translation": translation})
        currIndex = currIndex + 1

for item in translations:
    with open("contents.json", "r+", encoding='utf-8') as jsonFile:
        data = json.load(jsonFile)
        data[item['index']]['translation'] = item['translation']
        jsonFile.seek(0)
        json.dump(data, jsonFile, ensure_ascii=False)
        jsonFile.truncate()
