##paso 1

#### npm create vite@latest

#### npm install

#### npm install -D tailwindcss @tailwindcss/vite

#### npx tailwindcss init

#### npm install -D @vitejs/plugin-react

#### verificas que inicia: npm run dev

## Paso Clerk:

#### npm install @clerk/clerk-react

#### npm install react-router-dom

#### npm install react-icons

# 🛠️ Ofix – Plataforma de Servicios Técnicos del Hogar

Ofix es una plataforma que conecta a usuarios con profesionales técnicos para servicios del hogar como limpieza, reparación, jardinería, mascotas, y más. Este es un MVP construido con React + TypeScript + Vite + TailwindCSS y Clerk para autenticación.

---

## 🚀 Tecnologías usadas

- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🔐 Clerk (autenticación)
- 🌍 React Router DOM
- 🧠 React Icons (WhatsApp icon)

---

## 🧰 Estructura del proyecto

src/
├── assets/ # Imágenes (logo, etc)
├── components/ # Navbar, Hero, Footer, Propuesta, Dashboard
├── App.tsx # Lógica de rutas
├── main.tsx # Configuración Clerk + Router
└── index.css # TailwindCSS importado

---

## 🔐 Autenticación con Clerk

- El botón **“Buscar servicios”** (en Hero y Navbar) activa el login de Clerk.
- Solo usuarios logueados pueden acceder a `/dashboard`.
- Al cerrar sesión, se redirige al home (`/`).
- El login se realiza con modal o redirección según el botón.

---

## 🧑‍🔧 Funcionalidades del MVP

### Landing Page

- Hero Section con mensaje y CTA
- Botones:
  - **Buscar servicios** → inicia sesión con Clerk
  - **Ofrecer servicios** → redirige a formulario Tally (https://tally.so/r/n95244)
- Propuesta de valor (6 características)
- Footer con derechos reservados

### Dashboard (privado)

- Buscador para técnicos por nombre o tipo de trabajo
- Muestra 6 técnicos simulados (mock)
- Cada tarjeta incluye:
  - Nombre
  - Rubro
  - Horario
  - Estudios
  - Experiencia
  - Botón de contacto por WhatsApp: `+51 921 506 486`
- Transiciones y hover animado con TailwindCSS

---

## ▶️ Comandos disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ver producción local
npm run preview
```

## ⚙️ Variables de entorno

Crear un archivo .env con tu clave pública de Clerk:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

## 📦 Dependencias clave

npm install react-router-dom @clerk/clerk-react react-icons

## 🌐 Enlaces de interés

Clerk Docs

TailwindCSS Docs

React Router Docs

Tally Form
