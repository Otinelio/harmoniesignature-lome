import re

with open('src/pages/Sports.tsx', 'r') as f:
    content = f.read()

# 1. Update imports
content = content.replace(
    "import { getSportServices, SportService } from '../utils/storage';",
    "import { getSportServices, SportService, getDepartments, Department } from '../utils/storage';"
)

# 2. Remove static imports
content = re.sub(r"import imgTennisBasket.*?;\n", "", content)

# 3. Remove static arrays
content = re.sub(r"const tennisImages = \[.*?\];\n", "", content)
content = re.sub(r"const basketImages = \[.*?\];\n", "", content)
content = re.sub(r"const sportsImages = \[.*?\];\n", "", content)

# 4. Add states and fetch
state_block = """  const [tennisServices, setTennisServices] = useState<SportService[]>([]);
  const [basketServices, setBasketServices] = useState<SportService[]>([]);
  const [dTennis, setDTennis] = useState<Department | null>(null);
  const [dBasket, setDBasket] = useState<Department | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSportServices();
      setTennisServices(data.filter(s => s.sportType === 'Tennis'));
      setBasketServices(data.filter(s => s.sportType === 'Basketball'));
      const deps = await getDepartments();
      setDTennis(deps.find(d => d.id === 'tennis') || null);
      setDBasket(deps.find(d => d.id === 'basket') || null);
    };
    fetchData();
  }, []);
  
  const tennisImages = dTennis?.images || [];
  const basketImages = dBasket?.images || [];
  const sportsImages = [...tennisImages, ...basketImages];"""

# Find the old state block
old_state_block = """  const [tennisServices, setTennisServices] = useState<SportService[]>([]);
  const [basketServices, setBasketServices] = useState<SportService[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSportServices();
      setTennisServices(data.filter(s => s.sportType === 'Tennis'));
      setBasketServices(data.filter(s => s.sportType === 'Basketball'));
    };
    fetchData();
  }, []);"""

content = content.replace(old_state_block, state_block)

with open('src/pages/Sports.tsx', 'w') as f:
    f.write(content)
