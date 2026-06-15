import re
import os

files = {
    'src/pages/Piscine.tsx': {'id': 'piscine', 'old_array': 'poolImages', 'get_fn': 'getPoolPlans', 'plan_type': 'PoolPlan'},
    'src/pages/Bowling.tsx': {'id': 'bowling', 'old_array': 'bowlingImages', 'get_fn': 'getBowlingPlans', 'plan_type': 'BowlingPlan'},
    'src/pages/Spa.tsx': {'id': 'spa', 'old_array': 'spaImages', 'get_fn': 'getSpaServices', 'plan_type': 'SpaService'},
    'src/pages/Gym.tsx': {'id': 'gym', 'old_array': 'gymImages', 'get_fn': 'getGymPlans', 'plan_type': 'GymPlan'}
}

for path, info in files.items():
    if not os.path.exists(path): continue
    with open(path, 'r') as f:
        content = f.read()

    # Remove static image imports
    content = re.sub(r"import img.*? from '\.\./images/.*?\n", "", content)
    
    # Remove old array definition
    content = re.sub(r"const " + info['old_array'] + r" = \[(.|\n)*?\];", "", content)

    # Replace old_array usage with (department?.images || [])
    content = content.replace(info['old_array'], "(department?.images || [])")

    # Update imports
    old_import = f"import {{ {info['get_fn']}, {info['plan_type']} }} from '../utils/storage';"
    new_import = f"import {{ {info['get_fn']}, {info['plan_type']}, getDepartments, Department }} from '../utils/storage';"
    content = content.replace(old_import, new_import)

    # Add department state and fetch
    old_state = f"const [plans, setPlans] = useState<{info['plan_type']}[]>([]);"
    if 'Spa.tsx' in path:
        old_state = "const [services, setServices] = useState<SpaService[]>([]);"
    
    new_state = old_state + "\n  const [department, setDepartment] = useState<Department | null>(null);"
    
    content = content.replace(old_state, new_state)

    old_effect = f"{info['get_fn']}().then(set"
    new_effect = f"{info['get_fn']}().then(set"
    
    # We replace the useEffect block
    effect_pattern = r"useEffect\(\(\) => \{.*?" + info['get_fn'] + r"\(\)\.then\(.*?\);.*?\}, \[\]\);"
    effect_match = re.search(effect_pattern, content, flags=re.DOTALL)
    if effect_match:
        old_eff = effect_match.group(0)
        new_eff = old_eff.replace("}, []);", f"  getDepartments().then(deps => setDepartment(deps.find(d => d.id === '{info['id']}') || null));\n  }}, []);")
        content = content.replace(old_eff, new_eff)

    with open(path, 'w') as f:
        f.write(content)

