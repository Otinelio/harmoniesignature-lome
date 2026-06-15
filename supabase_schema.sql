-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- DROP EXISTING TABLES TO RESET
DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS faq CASCADE;
DROP TABLE IF EXISTS spa_services CASCADE;
DROP TABLE IF EXISTS bowling_plans CASCADE;
DROP TABLE IF EXISTS pool_plans CASCADE;
DROP TABLE IF EXISTS gym_plans CASCADE;
DROP TABLE IF EXISTS sport_services CASCADE;

-- Table: departments
CREATE TABLE IF NOT EXISTS departments (
  id TEXT PRIMARY KEY,
  name TEXT,
  phone TEXT,
  hours TEXT,
  "priceAdult" TEXT,
  "priceChild" TEXT,
  description TEXT,
  "isOpen" BOOLEAN,
  images JSONB
);

-- Table: restaurants
CREATE TABLE IF NOT EXISTS restaurants (
  id TEXT PRIMARY KEY,
  name TEXT,
  whatsapp TEXT,
  email TEXT,
  hours TEXT,
  "isOpen" BOOLEAN,
  menu JSONB
);

-- Table: settings
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  "adminPasswordHash" TEXT,
  "mainWhatsApp" TEXT,
  address TEXT,
  "generalHours" TEXT,
  "bowlingHours" TEXT,
  "spaEmail" TEXT,
  "heroVideoUrl" TEXT,
  "heroVideoMobileUrl" TEXT,
  "homeHeroTitle" TEXT,
  "homeHeroSubtitle" TEXT,
  "spaVideo1Url" TEXT,
  "spaVideo2Url" TEXT,
  "spaVideo3Url" TEXT,
  "tiktokUrl" TEXT,
  "facebookUrl" TEXT
);

-- Table: faq
CREATE TABLE IF NOT EXISTS faq (
  id TEXT PRIMARY KEY,
  question TEXT,
  answer TEXT
);

-- Table: spa_services
CREATE TABLE IF NOT EXISTS spa_services (
  id TEXT PRIMARY KEY,
  category TEXT,
  name TEXT,
  duration TEXT,
  price TEXT,
  "desc" TEXT,
  image TEXT
);

-- Table: bowling_plans
CREATE TABLE IF NOT EXISTS bowling_plans (
  id TEXT PRIMARY KEY,
  badge TEXT,
  name TEXT,
  tagline TEXT,
  price TEXT,
  features JSONB,
  highlight BOOLEAN,
  image TEXT
);

-- Table: pool_plans
CREATE TABLE IF NOT EXISTS pool_plans (
  id TEXT PRIMARY KEY,
  category TEXT,
  name TEXT,
  price TEXT,
  "desc" TEXT,
  duration TEXT,
  badge TEXT
);

-- Table: gym_plans
CREATE TABLE IF NOT EXISTS gym_plans (
  id TEXT PRIMARY KEY,
  category TEXT,
  name TEXT,
  price TEXT,
  "desc" TEXT,
  duration TEXT,
  badge TEXT
);

-- Table: sport_services
CREATE TABLE IF NOT EXISTS sport_services (
  id TEXT PRIMARY KEY,
  "sportType" TEXT,
  name TEXT,
  duration TEXT,
  "desc" TEXT,
  price TEXT,
  unit TEXT
);

-- DESACTIVER LA SÉCURITÉ RLS POUR AUTORISER LES MODIFICATIONS DEPUIS L'ADMIN
ALTER TABLE departments DISABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants DISABLE ROW LEVEL SECURITY;
ALTER TABLE settings DISABLE ROW LEVEL SECURITY;
ALTER TABLE faq DISABLE ROW LEVEL SECURITY;
ALTER TABLE spa_services DISABLE ROW LEVEL SECURITY;
ALTER TABLE bowling_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE pool_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE gym_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE sport_services DISABLE ROW LEVEL SECURITY;
