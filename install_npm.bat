cd /d "%~dp0"
rmdir /s /q node_modules
npm install --no-audit --no-fund --loglevel=verbose
