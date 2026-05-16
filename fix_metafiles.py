import sys
from pathlib import Path
import tomllib
import tomlkit

config = None

with open("index.toml", "r") as f:
    config = tomlkit.load(f)

if "files" in config and isinstance(config["files"], list):
    for entry in config["files"]:
        if isinstance(entry, dict) and "metafile" in entry:
            if "install_data/" in entry["file"]:
                print(entry["file"])
                del entry["metafile"]
                del entry["preserve"]
                
with open("index.toml", "w") as f:
    f.write(tomlkit.dumps(config))