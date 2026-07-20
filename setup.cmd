@echo off
cd /d "%~dp0"
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p
call npm install gsap @gsap/react lenis framer-motion lucide-react @fontsource/archivo-black @fontsource/inter @fontsource/jetbrains-mono
