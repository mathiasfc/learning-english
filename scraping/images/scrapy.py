import requests
import json
import urllib

withoutImages = []

with open("phrases.json", "r+", encoding='utf-8') as jsonFile:
    phrasesJSON = json.load(jsonFile)
    for item in phrasesJSON:
        phrase = urllib.parse.quote(item['phrase'], safe='')
        url = f'https://unsplash.com/ngetty/v3/search/images/creative?fields=display_set%2Creferral_destinations%2Ctitle&page_size=6&phrase={phrase}&sort_order=best_match&graphical_styles=photography&exclude_nudity=true&exclude_editorial_use_only=true'

        resp = requests.get(url=url)

        response = resp.json()

        if response['result_count'] > 0:
            print('downloading image for phrase: ', phrase)
            imageURL = response['images'][0]['display_sizes'][1]['uri']
            print(imageURL)
            imgData = requests.get(imageURL).content
            word = item['word']
            with open(f'{word}.png', 'wb') as handler:
                handler.write(imgData)
        else:
            print('no image for phrase: ', phrase)
            withoutImages.append(item['word'])

print(withoutImages)
