import os
import json

def list_files_in_directory(directory_path, output_json_path):
    """
    Lists all files in the given directory and saves them to a JSON file.

    Args:
        directory_path (str): Path to the directory to list files from.
        output_json_path (str): Path to the JSON file to save the filenames.
    """
    files_list = []

    for root, _, files in os.walk(directory_path):
        for file in files:
            files_list.append(file)
    
    with open(output_json_path, 'w') as json_file:
        json.dump(files_list, json_file, indent=4)
    
    print(f"File list saved to {output_json_path}")

directory_path = r''
output_json_path = r''

list_files_in_directory(directory_path, output_json_path)
