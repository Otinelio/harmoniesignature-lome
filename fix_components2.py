import re
import os

files = {
    'src/pages/Gym.tsx': {'id': 'gym', 'old_array': 'gymImages'},
    'src/pages/Spa.tsx': {'id': 'spa', 'old_array': 'spaImages'},
    'src/pages/Bowling.tsx': {'id': 'bowling', 'old_array': 'bowlingImages'}
}

for path, info in files.items():
    if not os.path.exists(path): continue
    with open(path, 'r') as f:
        content = f.read()

    # Remove ALL static image imports
    content = re.sub(r"import [a-zA-Z0-9_]+ from '\.\./images/.*?';\n", "", content)

    # Some variables like `logoGym` might have been used in the component. We should provide the path directly.
    content = content.replace("logoGym", "'/images/logo/logo_gym.png'")
    content = content.replace("logoSpa", "'/images/logo/logo_spa.png'")
    content = content.replace("logoBowling", "'/images/logo/logo_bowling.png'")

    with open(path, 'w') as f:
        f.write(content)

# For Restauration and DepartementsHub
for path in ['src/pages/Restauration.tsx', 'src/pages/DepartementsHub.tsx']:
    if not os.path.exists(path): continue
    with open(path, 'r') as f:
        content = f.read()
    content = re.sub(r"import [a-zA-Z0-9_]+ from '\.\./images/.*?';\n", "", content)
    content = content.replace("logoTropicana", "'/images/logo/logo_tropicana.png'")
    content = content.replace("harmonieImg", "'/images/harmonie.png'")
    with open(path, 'w') as f:
        f.write(content)

