import re

# Spa.tsx
with open('src/pages/Spa.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getSpaServices } from '../utils/storage';")
content = re.sub(r'const soins: Soin\[\] = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const Spa = \(\) => \{', '''const Spa = () => {
  const [soins, setSoins] = useState<Soin[]>([]);
  useEffect(() => {
    // Assuming getSpaServices is synchronous for now, but ready for async
    const fetchServices = async () => {
      const data = await getSpaServices();
      setSoins(data as Soin[]);
    };
    fetchServices();
  }, []);''', content)

with open('src/pages/Spa.tsx', 'w') as f:
    f.write(content)

# Bowling.tsx
with open('src/pages/Bowling.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getBowlingPlans, BowlingPlan } from '../utils/storage';")
content = re.sub(r'const plans = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const Bowling = \(\) => \{', '''const Bowling = () => {
  const [plans, setPlans] = useState<BowlingPlan[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBowlingPlans();
      setPlans(data);
    };
    fetchData();
  }, []);''', content)

with open('src/pages/Bowling.tsx', 'w') as f:
    f.write(content)

# Piscine.tsx
with open('src/pages/Piscine.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getPoolPlans, PoolPlan } from '../utils/storage';")
content = re.sub(r'const poolPlans = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const Piscine = \(\) => \{', '''const Piscine = () => {
  const [poolPlans, setPoolPlans] = useState<PoolPlan[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPoolPlans();
      setPoolPlans(data);
    };
    fetchData();
  }, []);''', content)

with open('src/pages/Piscine.tsx', 'w') as f:
    f.write(content)

# Gym.tsx
with open('src/pages/Gym.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getGymPlans, GymPlan } from '../utils/storage';")
content = re.sub(r'const gymPlans = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const Gym = \(\) => \{', '''const Gym = () => {
  const [gymPlans, setGymPlans] = useState<GymPlan[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getGymPlans();
      setGymPlans(data);
    };
    fetchData();
  }, []);''', content)

with open('src/pages/Gym.tsx', 'w') as f:
    f.write(content)

# Sports.tsx
with open('src/pages/Sports.tsx', 'r') as f:
    content = f.read()

content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { getSportServices, SportService } from '../utils/storage';")
content = re.sub(r'const tennisServices = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const basketServices = \[.*?\];', '', content, flags=re.DOTALL)
content = re.sub(r'const Sports = \(\) => \{', '''const Sports = () => {
  const [tennisServices, setTennisServices] = useState<SportService[]>([]);
  const [basketServices, setBasketServices] = useState<SportService[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSportServices();
      setTennisServices(data.filter(s => s.sportType === 'Tennis'));
      setBasketServices(data.filter(s => s.sportType === 'Basketball'));
    };
    fetchData();
  }, []);''', content)

with open('src/pages/Sports.tsx', 'w') as f:
    f.write(content)

