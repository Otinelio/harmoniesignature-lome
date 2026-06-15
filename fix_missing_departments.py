import re
import os

files = {
    'src/pages/Gym.tsx': 'gym',
    'src/pages/Piscine.tsx': 'piscine',
    'src/pages/Spa.tsx': 'spa'
}

for path, dep_id in files.items():
    if not os.path.exists(path): continue
    with open(path, 'r') as f:
        content = f.read()

    # Make sure we don't duplicate
    if "const [department, setDepartment]" in content:
        continue

    # Add the department state
    content = re.sub(
        r"(const \[.*?\] = useState<.*?\[\]>\(\[\]\);)",
        r"\1\n  const [department, setDepartment] = useState<Department | null>(null);",
        content,
        count=1
    )

    # Add the department fetch
    content = re.sub(
        r"(const fetchData = async \(\) => \{.*?)(\};)",
        r"\1  const deps = await getDepartments();\n      setDepartment(deps.find(d => d.id === '" + dep_id + r"') || null);\n    \2",
        content,
        flags=re.DOTALL
    )

    with open(path, 'w') as f:
        f.write(content)

