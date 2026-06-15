import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Replace static imports
content = re.sub(r"import imgGym from '\.\./images/salles/gym-2\.jpg';\n", "", content)
content = re.sub(r"import videoDeo\d from '\.\./images/spa/spaDeo/SpaDeo\d\.mp4';\n", "", content)
content = re.sub(r"import posterDeo\d from '\.\./images/spa/spaDeo/SpaDeo\d-poster\.jpg';\n", "", content)
content = re.sub(r"import logo.*? from '\.\./images/logo/logo_.*?.png';\n", "", content)
content = re.sub(r"import imgTennisBasket1 from '\.\./images/tennis&Basketball/tennis&Basketball1\.jpg';\n", "", content)
content = re.sub(r"import imgPiscine1 from '\.\./images/piscine/piscine1\.jpg';\n", "", content)

# Add imports for settings
if "getSettings" not in content:
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { getSettings, Settings } from '../utils/storage';")
    content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';")

# Fix universList
content = content.replace("img: logoBowling", "img: '/images/logo/logo_bowling.png'")
content = content.replace("img: logoSpa", "img: '/images/logo/logo_spa.png'")
content = content.replace("img: logoGym", "img: '/images/logo/logo_gym.png'")
content = content.replace("img: logoTropicana", "img: '/images/logo/logo_tropicana.png'")

# Add settings state
state_block = """  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getSettings().then(setSettings);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!settings) return null;"""
content = content.replace("  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');", state_block)

# Fix Hero Video
hero_video_block = """          <source src={isMobile && settings.heroVideoMobileUrl ? settings.heroVideoMobileUrl : settings.heroVideoUrl} type="video/mp4" />"""
content = content.replace('          <source src="/videoAccueil.mp4" type="video/mp4" />', hero_video_block)

# Fix Hero texts
content = content.replace("<p>BIENVENUE CHEZ HARMONIE SIGNATURE</p>", "<p>{settings.homeHeroTitle}</p>")
content = content.replace("<h2>Votre complexe de référence à Lomé</h2>", "<h2>{settings.homeHeroSubtitle}</h2>")

# Fix Spa videos
content = content.replace('poster={posterDeo1}', 'poster="/images/spa/spaDeo/SpaDeo1-poster.jpg"')
content = content.replace('<source src={videoDeo1} type="video/mp4" />', '<source src={settings.spaVideo1Url || "/images/spa/spaDeo/SpaDeo1.mp4"} type="video/mp4" />')

content = content.replace('poster={posterDeo2}', 'poster="/images/spa/spaDeo/SpaDeo2-poster.jpg"')
content = content.replace('<source src={videoDeo2} type="video/mp4" />', '<source src={settings.spaVideo2Url || "/images/spa/spaDeo/SpaDeo2.mp4"} type="video/mp4" />')

content = content.replace('poster={posterDeo3}', 'poster="/images/spa/spaDeo/SpaDeo3-poster.jpg"')
content = content.replace('<source src={videoDeo3} type="video/mp4" />', '<source src={settings.spaVideo3Url || "/images/spa/spaDeo/SpaDeo3.mp4"} type="video/mp4" />')

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)

