# This script fetches SVG icons from the Radix UI library and saves them to a specified directory.
# If the creators of the Radix UI library want me to remove this script, please contact me.
# This script is for educational purposes only and should not be used for commercial purposes.

import os
import requests
from bs4 import BeautifulSoup

def fetch_and_save_svgs(url, save_path):
    os.makedirs(save_path, exist_ok=True)
    
    response = requests.get(url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.content, 'html.parser')
    div_elements = soup.find_all('button', class_='rt-reset rt-BaseButton rt-r-size-4 rt-variant-ghost rt-high-contrast rt-IconButton')
    
    for index, div in enumerate(div_elements, start=1):
        print(f"Processing div #{index}")
        child = div.find('svg')
        
        if child:
            svg_content = child.prettify()
            
            svg_name = div.get('aria-label')
            svg_name_to_save = svg_name.replace(' ', '_').lower()

            with open(f'{save_path}/{svg_name_to_save}.svg', 'w', encoding='utf-8') as file:
                file.write(svg_content)
                print(f"Saved SVG: {svg_name_to_save}.svg")

url = 'https://www.radix-ui.com/icons'
save_path = r''

fetch_and_save_svgs(url, save_path)
