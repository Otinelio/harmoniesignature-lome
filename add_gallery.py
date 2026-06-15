import os

files = [
    'src/pages/Admin/AdminPiscine.tsx',
    'src/pages/Admin/AdminSpa.tsx',
    'src/pages/Admin/AdminBowling.tsx',
    'src/pages/Admin/AdminGym.tsx'
]

for path in files:
    with open(path, 'r') as f:
        content = f.read()

    # Add import
    if "AdminGallery" not in content:
        content = content.replace("import Modal from '../../components/Modal';", "import Modal from '../../components/Modal';\nimport AdminGallery from '../../components/AdminGallery';")
    
    # Add the component rendering just below the Informations Générales section
    # The Informations Générales section ends with `</div>\n      )}`
    
    gallery_code = """
      {department && (
        <AdminGallery 
          department={department} 
          onUpdate={(images) => handleDepChange('images', images)} 
        />
      )}
"""
    if "AdminGallery department" not in content:
        content = content.replace("</div>\n        </div>\n      )}", "</div>\n        </div>\n      )}\n" + gallery_code)

    with open(path, 'w') as f:
        f.write(content)

# For AdminSports.tsx, it has two departments (dTennis and dBasket)
with open('src/pages/Admin/AdminSports.tsx', 'r') as f:
    content = f.read()

if "AdminGallery" not in content:
    content = content.replace("import Modal from '../../components/Modal';", "import Modal from '../../components/Modal';\nimport AdminGallery from '../../components/AdminGallery';")

gallery_tennis = """
        {dTennis && (
          <AdminGallery 
            department={dTennis} 
            onUpdate={(images) => hdc('tennis', 'images', images)} 
          />
        )}
"""
gallery_basket = """
        {dBasket && (
          <AdminGallery 
            department={dBasket} 
            onUpdate={(images) => hdc('basket', 'images', images)} 
          />
        )}
"""

if "AdminGallery department={dTennis}" not in content:
    content = content.replace("</div>\n        </div>)}", "</div>\n        </div>)}\n" + gallery_tennis, 1)

if "AdminGallery department={dBasket}" not in content:
    # the second occurrence of </div>\n        </div>)}
    parts = content.split("</div>\n        </div>)}")
    if len(parts) >= 3:
        content = parts[0] + "</div>\n        </div>)}" + parts[1] + "</div>\n        </div>)}\n" + gallery_basket + parts[2]

with open('src/pages/Admin/AdminSports.tsx', 'w') as f:
    f.write(content)

