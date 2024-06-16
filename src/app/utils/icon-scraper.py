# This script fetches SVG icons from the Geist UI library and saves them to a specified directory.
# If the creators of the Geist UI library (Vercel) want me to remove this script, please contact me.
# This script is for educational purposes only and should not be used for commercial purposes.

import os
import requests
from bs4 import BeautifulSoup

def fetch_and_save_svgs(url, save_path):
    os.makedirs(save_path, exist_ok=True)
    
    response = requests.get(url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.content, 'html.parser')
    print(f"Page title: {soup.title.string}")
    with open('page.html', 'w', encoding='utf-8') as file:
        file.write(soup.prettify())
    
    div_elements = soup.find_all('span', attrs={'data-state': 'closed'})
    
    for index, div in enumerate(div_elements, start=1):
        print(f"Processing div #{index}")
        child = div.find('div', class_='hover:bg-background-100 flex h-28 w-full cursor-pointer flex-col items-center rounded px-4 text-gray-900')
        
        if child:
            svg = child.find('svg')
            svg_content = svg.prettify()
            
            svg_name = child.find('p').text
            svg_name_to_save = svg_name.replace(' ', '_').lower()

            with open(f'{save_path}/{svg_name_to_save}.svg', 'w', encoding='utf-8') as file:
                file.write(svg_content)
                print(f"Saved SVG: {svg_name_to_save}.svg")

url = 'https://vercel.com/geist/icons'
save_path = r''

fetch_and_save_svgs(url, save_path)
