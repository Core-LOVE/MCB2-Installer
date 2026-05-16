import os

folder_path = os.getcwd()

for filename in os.listdir(folder_path):
    if ".pw.toml" in filename:
        old_file = os.path.join(folder_path, filename)
        
        new_filename = filename.replace("pw.toml", "asset")
        new_file = os.path.join(folder_path, new_filename)

        print(old_file, new_file)
        
        os.rename(old_file, new_file)