import os
import re

directories = ['src/pages', 'src/pages/Admin', 'src/components']

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content

    # Replace `const deps = getDepartments();` inside useEffect with:
    # `getDepartments().then(deps => setDepartment(deps.find(...) || null));`
    # Or better, let's just make the whole body of useEffect async if it contains these calls.
    # Actually, replacing them with `.then()` or an async IIFE is safer.

    # 1. AdminBowling.tsx: 
    # const deps = getDepartments();
    # setDepartment(deps.find(d => d.id === 'bowling') || null);
    content = content.replace(
        "const deps = getDepartments();\n    setDepartment(deps.find(d => d.id === 'bowling') || null);",
        "getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'bowling') || null));"
    )
    # AdminBowling.tsx save:
    # const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'bowling' ? department : d));
    content = content.replace(
        "const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'bowling' ? department : d));",
        "getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'bowling' ? department : d)));"
    )

    # 2. AdminSpa.tsx:
    content = content.replace(
        "const deps = getDepartments();\n    setDepartment(deps.find(d => d.id === 'spa') || null);",
        "getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'spa') || null));"
    )
    content = content.replace(
        "const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'spa' ? department : d));",
        "getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'spa' ? department : d)));"
    )

    # 3. AdminGym.tsx:
    content = content.replace(
        "const deps = getDepartments();\n    setDepartment(deps.find(d => d.id === 'gym') || null);",
        "getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'gym') || null));"
    )
    content = content.replace(
        "const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'gym' ? department : d));",
        "getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'gym' ? department : d)));"
    )

    # 4. AdminPiscine.tsx:
    content = content.replace(
        "const deps = getDepartments();\n    setDepartment(deps.find(d => d.id === 'piscine') || null);",
        "getDepartments().then(deps => setDepartment(deps.find(d => d.id === 'piscine') || null));"
    )
    content = content.replace(
        "const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'piscine' ? department : d));",
        "getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'piscine' ? department : d)));"
    )

    # 5. AdminSports.tsx:
    content = content.replace(
        "const deps = getDepartments();\n    setTennis(deps.find(d => d.id === 'tennis') || null);\n    setBasket(deps.find(d => d.id === 'basket') || null);",
        "getDepartments().then(deps => {\n      setTennis(deps.find(d => d.id === 'tennis') || null);\n      setBasket(deps.find(d => d.id === 'basket') || null);\n    });"
    )
    content = content.replace(
        "const deps = getDepartments(); saveDepartments(deps.map(d => d.id === 'tennis' && tennis ? tennis : d.id === 'basket' && basket ? basket : d));",
        "getDepartments().then(deps => saveDepartments(deps.map(d => d.id === 'tennis' && tennis ? tennis : d.id === 'basket' && basket ? basket : d)));"
    )

    # 6. AdminDashboard.tsx:
    content = content.replace("const settings = getSettings();", "getSettings().then(setSettings);")
    content = content.replace("const deps = getDepartments();", "getDepartments().then(setDepartments);")
    # if it had `setSettings(settings)` we remove it. We'll do regex:
    content = re.sub(r'getSettings\(\)\.then\(setSettings\);\n\s*setSettings\(settings\);', 'getSettings().then(setSettings);', content)
    content = re.sub(r'getDepartments\(\)\.then\(setDepartments\);\n\s*setDepartments\(deps\);', 'getDepartments().then(setDepartments);', content)

    # 7. AdminLogin.tsx:
    # const settings = getSettings();
    content = content.replace(
        "const settings = getSettings();",
        "const [settings, setSettings] = useState<any>(null);\n  useEffect(() => { getSettings().then(setSettings); }, []);"
    )

    # 8. Contact.tsx:
    # const settings = getSettings();
    if 'Contact.tsx' in filepath:
        if 'const settings = getSettings();' in content:
            content = content.replace(
                "const settings = getSettings();",
                "const [settings, setSettings] = useState<any>(null);\n  useEffect(() => { getSettings().then(setSettings); }, []);\n  if (!settings) return null;"
            )
            if 'import React' not in content and 'useState' not in content:
                content = content.replace("import {", "import React, { useState, useEffect } from 'react';\nimport {")

    # 9. WhatsAppCTA.tsx
    if 'WhatsAppCTA.tsx' in filepath:
        if 'const settings = getSettings();' in content:
            content = content.replace(
                "const settings = getSettings();",
                "const [settings, setSettings] = useState<any>(null);\n  useEffect(() => { getSettings().then(setSettings); }, []);\n  if (!settings) return null;"
            )
            content = content.replace("import React, {", "import React, { useState, useEffect,")
            if 'import { useState, useEffect }' not in content and 'useState' not in content:
                content = content.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';")

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for d in directories:
    if os.path.exists(d):
        for f in os.listdir(d):
            if f.endswith('.tsx'):
                process_file(os.path.join(d, f))
