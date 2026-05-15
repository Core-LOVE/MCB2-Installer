import tomlkit
import os
import glob
import argparse

import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

files = glob.glob(os.path.join(dir_path, 'mods/*.pw.toml'))

if files:
    for filepath in files:
        filename = os.path.basename(filepath)

        with open("mods/" + filename, "r") as f:
            print(filename)
            content = tomlkit.parse(f.read())

            if content['side'] == "server":
                content['side'] = "both"

            # if content['side'] == "":
            #     content['side'] = "both"
                
            with open("mods/" + filename, "w") as f:
                f.write(tomlkit.dumps(content))