import os
import re

directories = ['src/pages', 'src/pages/Admin', 'src/components']

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content

    # 1. Handle useEffect(() => { setX(getX()); }, []);
    # Matches: setSomething(getSomething());
    # We'll replace it with: getSomething().then(setSomething);
    # Regex: (set[A-Za-z0-9_]+)\((get[A-Za-z0-9_]+\(\))\)
    def repl_get(m):
        setter = m.group(1)
        getter = m.group(2)
        return f"{getter}.then({setter})"

    content = re.sub(r'(set[A-Za-z0-9_]+)\((get[A-Za-z0-9_]+\(\))\)', repl_get, content)

    # 2. Handle await saveSomething(data);
    # Since saveSomething is async, if they are not awaited, they'll just fire and forget. This is fine for admin saves,
    # but some might have `saveSomething(data);`. This is valid JS for an async function, it just returns a Promise. 
    # To be safe, let's not touch save calls unless they need to be awaited. Fire and forget is okay for these.

    # 3. Handle `const data = getSettings();` in functional component bodies.
    # Wait, Contact.tsx or Tarifs.tsx might just do: `const settings = getSettings();` at the top level of the component!
    # If they do, they need to be rewritten to use useState and useEffect.
    # Let's see if any file does `const data = getSomething();` inside the component body, outside useEffect.
    
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

for d in directories:
    if os.path.exists(d):
        for f in os.listdir(d):
            if f.endswith('.tsx'):
                process_file(os.path.join(d, f))

