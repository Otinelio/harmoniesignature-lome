import re

with open('src/utils/storage.ts', 'r') as f:
    content = f.read()

# Add import at the top
if "import { supabase }" not in content:
    content = "import { supabase } from '../lib/supabase';\n" + content

# Replace getDepartments
content = re.sub(
    r'export const getDepartments = \(\): Department\[\] => \{.*?\n\};',
    '''export const getDepartments = async (): Promise<Department[]> => {
  try {
    const { data, error } = await supabase.from('departments').select('*');
    if (error || !data || data.length === 0) return DEFAULT_DEPARTMENTS;
    return data as Department[];
  } catch (e) {
    console.error("Error loading departments:", e);
    return DEFAULT_DEPARTMENTS;
  }
};''',
    content, flags=re.DOTALL
)

# Replace saveDepartments
content = re.sub(
    r'export const saveDepartments = \(deps: Department\[\]\) => \{.*?\n\};',
    '''export const saveDepartments = async (deps: Department[]) => {
  try {
    const { error } = await supabase.from('departments').upsert(deps);
    if (error) throw error;
  } catch (e) {
    console.error("Error saving departments:", e);
  }
};''',
    content, flags=re.DOTALL
)

# Replace getRestaurants
content = re.sub(
    r'export const getRestaurants = \(\): Restaurant\[\] => \{.*?\n\};',
    '''export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const { data, error } = await supabase.from('restaurants').select('*');
    if (error || !data || data.length === 0) return DEFAULT_RESTAURANTS;
    return data as Restaurant[];
  } catch (e) {
    console.error("Error loading restaurants:", e);
    return DEFAULT_RESTAURANTS;
  }
};''',
    content, flags=re.DOTALL
)

# Replace saveRestaurants
content = re.sub(
    r'export const saveRestaurants = \(rests: Restaurant\[\]\) => \{.*?\n\};',
    '''export const saveRestaurants = async (rests: Restaurant[]) => {
  try {
    const { error } = await supabase.from('restaurants').upsert(rests);
    if (error) throw error;
  } catch (e) {
    console.error("Error saving restaurants:", e);
  }
};''',
    content, flags=re.DOTALL
)

# Replace getSettings
content = re.sub(
    r'export const getSettings = \(\): Settings => \{.*?\n\};',
    '''export const getSettings = async (): Promise<Settings> => {
  try {
    const { data, error } = await supabase.from('settings').select('*').limit(1).single();
    if (error || !data) return DEFAULT_SETTINGS;
    return data as Settings;
  } catch (e) {
    console.error("Error loading settings:", e);
    return DEFAULT_SETTINGS;
  }
};''',
    content, flags=re.DOTALL
)

# Replace saveSettings
content = re.sub(
    r'export const saveSettings = \(settings: Settings\) => \{.*?\n\};',
    '''export const saveSettings = async (settings: Settings) => {
  try {
    // We assume setting id=1
    const { error } = await supabase.from('settings').upsert({ id: 1, ...settings });
    if (error) throw error;
  } catch (e) {
    console.error("Error saving settings:", e);
  }
};''',
    content, flags=re.DOTALL
)

# Replace getFAQ
content = re.sub(
    r'export const getFAQ = \(\): FAQItem\[\] => \{.*?\n\};',
    '''export const getFAQ = async (): Promise<FAQItem[]> => {
  try {
    const { data, error } = await supabase.from('faq').select('*');
    if (error || !data || data.length === 0) return DEFAULT_FAQ;
    return data as FAQItem[];
  } catch (e) {
    console.error("Error loading FAQ:", e);
    return DEFAULT_FAQ;
  }
};''',
    content, flags=re.DOTALL
)

# Replace saveFAQ
content = re.sub(
    r'export const saveFAQ = \(faq: FAQItem\[\]\) => \{.*?\n\};',
    '''export const saveFAQ = async (faq: FAQItem[]) => {
  try {
    const { error } = await supabase.from('faq').upsert(faq);
    if (error) throw error;
  } catch (e) {
    console.error("Error saving FAQ:", e);
  }
};''',
    content, flags=re.DOTALL
)

# Replace getSpaServices
content = re.sub(
    r'export const getSpaServices = \(\): SpaService\[\] => \{.*?\n\};',
    '''export const getSpaServices = async (): Promise<SpaService[]> => {
  try {
    const { data, error } = await supabase.from('spa_services').select('*');
    if (error || !data || data.length === 0) return DEFAULT_SPA_SERVICES;
    return data as SpaService[];
  } catch (e) { return DEFAULT_SPA_SERVICES; }
};''',
    content, flags=re.DOTALL
)

# Replace saveSpaServices
content = re.sub(
    r'export const saveSpaServices = \(data: SpaService\[\]\) => \{.*?\n\};',
    '''export const saveSpaServices = async (data: SpaService[]) => {
  try {
    const { error } = await supabase.from('spa_services').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); }
};''',
    content, flags=re.DOTALL
)

# Replace getBowlingPlans
content = re.sub(
    r'export const getBowlingPlans = \(\): BowlingPlan\[\] => \{.*?\n\};',
    '''export const getBowlingPlans = async (): Promise<BowlingPlan[]> => {
  try {
    const { data, error } = await supabase.from('bowling_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_BOWLING_PLANS;
    return data as BowlingPlan[];
  } catch (e) { return DEFAULT_BOWLING_PLANS; }
};''',
    content, flags=re.DOTALL
)

# Replace saveBowlingPlans
content = re.sub(
    r'export const saveBowlingPlans = \(data: BowlingPlan\[\]\) => \{.*?\n\};',
    '''export const saveBowlingPlans = async (data: BowlingPlan[]) => {
  try {
    const { error } = await supabase.from('bowling_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); }
};''',
    content, flags=re.DOTALL
)

# Replace getPoolPlans
content = re.sub(
    r'export const getPoolPlans = \(\): PoolPlan\[\] => \{.*?\n\};',
    '''export const getPoolPlans = async (): Promise<PoolPlan[]> => {
  try {
    const { data, error } = await supabase.from('pool_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_POOL_PLANS;
    return data as PoolPlan[];
  } catch (e) { return DEFAULT_POOL_PLANS; }
};''',
    content, flags=re.DOTALL
)

# Replace savePoolPlans
content = re.sub(
    r'export const savePoolPlans = \(data: PoolPlan\[\]\) => \{.*?\n\};',
    '''export const savePoolPlans = async (data: PoolPlan[]) => {
  try {
    const { error } = await supabase.from('pool_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); }
};''',
    content, flags=re.DOTALL
)

# Replace getGymPlans
content = re.sub(
    r'export const getGymPlans = \(\): GymPlan\[\] => \{.*?\n\};',
    '''export const getGymPlans = async (): Promise<GymPlan[]> => {
  try {
    const { data, error } = await supabase.from('gym_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_GYM_PLANS;
    return data as GymPlan[];
  } catch (e) { return DEFAULT_GYM_PLANS; }
};''',
    content, flags=re.DOTALL
)

# Replace saveGymPlans
content = re.sub(
    r'export const saveGymPlans = \(data: GymPlan\[\]\) => \{.*?\n\};',
    '''export const saveGymPlans = async (data: GymPlan[]) => {
  try {
    const { error } = await supabase.from('gym_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); }
};''',
    content, flags=re.DOTALL
)

# Replace getSportServices
content = re.sub(
    r'export const getSportServices = \(\): SportService\[\] => \{.*?\n\};',
    '''export const getSportServices = async (): Promise<SportService[]> => {
  try {
    const { data, error } = await supabase.from('sport_services').select('*');
    if (error || !data || data.length === 0) return DEFAULT_SPORT_SERVICES;
    return data as SportService[];
  } catch (e) { return DEFAULT_SPORT_SERVICES; }
};''',
    content, flags=re.DOTALL
)

# Replace saveSportServices
content = re.sub(
    r'export const saveSportServices = \(data: SportService\[\]\) => \{.*?\n\};',
    '''export const saveSportServices = async (data: SportService[]) => {
  try {
    const { error } = await supabase.from('sport_services').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); }
};''',
    content, flags=re.DOTALL
)


with open('src/utils/storage.ts', 'w') as f:
    f.write(content)

