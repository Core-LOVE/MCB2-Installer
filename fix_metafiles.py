import sys
from pathlib import Path
import tomllib
import tomlkit

config = None

with open("index.toml", "r") as f:
    config = tomlkit.load(f)

config["database"]["port"] = 5432
config["new_section"] = {"key": "value"}

if "files" in config and isinstance(config["files"], list):
    for entry in config["files"]:
        if isinstance(entry, dict) and "metafile" in entry:
            if "install_data/" in entry["file"]:
                del entry["metafile"]

with open("config.toml", "w") as f:
    f.write(tomlkit.dumps(config))